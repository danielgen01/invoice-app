import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import { BsCircleFill } from "react-icons/bs"
import { RootState } from "../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../store"
import { useNavigate } from "react-router-dom"
import { toggleEditInvoiceForm } from "../EditInvoice/EditInvoiceSlice"
import { toggleDeleteInvoiceForm } from "../DeleteDialog/DeleteDialogSlice"
import { resetActiveInvoice } from "../Data/DataSlice"

type props = {
  invoiceId: any
}
const ViewInvoice: React.FC<props> = ({ invoiceId }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // Reset active invoice
  const handleResetActiveInvoice = () => {
    dispatch(resetActiveInvoice())
  }

  const handleGoBack = () => {
    navigate("/")
    handleResetActiveInvoice()
  }

  const data = useAppSelector((state: RootState) => state.data.Data)

  const isEditInvoiceFormOpen = useAppSelector(
    (state: RootState) => state.newInvoice.isNewInvoiceFormOpen
  )

  const isDeleteFormOpen = useAppSelector(
    (state: RootState) => state.deleteInvoice.isDeleteInvoiceFormOpen
  )

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const handleToggleEditInvoiceForm = () => {
    dispatch(toggleEditInvoiceForm())
  }

  const handleToggleDeleteInvoiceForm = () => {
    dispatch(toggleDeleteInvoiceForm())
  }

  console.log(activeInvoice)

  return (
    <>
      <div className="overlay"> </div>
      <div className="content px-5 py-5 xl:px-72 lg:py-10">
        <button
          className="go-back-button flex items-center gap-5 "
          onClick={handleGoBack}
        >
          <img src={arrowleft} alt="goback" className="w-2" />
          <h1 className="font-bold dark:text-white">Go back</h1>
        </button>
        <StatusBox />
        <div className="invoice-box bg-white   mt-5 shadow-md rounded-xl dark:bg-[#252945]">
          <section className="invoice-details-content md:py-10">
            <TitleAndAdress />
            <InvoiceInfos />
            <section className="price-overview bg-[#F8F8FB] dark:bg-[#252945] w-full min-h-[300px] mt-4 rounded-xl">
              <div className="headline hidden md:grid md:grid-cols-4 px-5 dark:bg-[#252945] ">
                <h1 className="font-bold text-medium-gray">Item Name</h1>
                <h1 className="font-bold text-medium-gray flex justify-center">
                  Qty.
                </h1>
                <h1 className="font-bold text-medium-gray ml-7">Price</h1>
                <h1 className="flex justify-end font-bold text-medium-gray">
                  Total
                </h1>
              </div>
              <ul className="content-item-list px-6 py-6 grid grid-cols-2 w-full gap-5 md:grid-cols-4 dark:bg-[#252945]">
                <Item />
              </ul>
              <TotalBox />
            </section>
          </section>
        </div>
        <footer className="block md:hidden bg-white  mt-20 dark:bg-[#1E2139]">
          <div className="footer-content px-5 py-5 flex justify-between items-center">
            <button
              className="md:hidden  w-20 h-10 bg-[#F8F8FB] rounded-full text-[#9277FF] font-bold dark:bg-[#252945] dark:text-medium-gray"
              onClick={handleToggleEditInvoiceForm}
            >
              Edit
            </button>
            <button
              className="md:hidden  w-20 h-12 bg-[#EC5757] rounded-full text-white font-bold"
              onClick={handleToggleDeleteInvoiceForm}
            >
              Delete
            </button>
            <button className="md:hidden w-32 h-12  bg-[#7C5DFA] rounded-full text-white font-bold">
              Mark as Paid
            </button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ViewInvoice

function StatusBox() {
  const dispatch = useAppDispatch()

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const handleToggleEditInvoiceForm = () => {
    dispatch(toggleEditInvoiceForm())
  }

  const handleToggleDeleteInvoiceForm = () => {
    dispatch(toggleDeleteInvoiceForm())
  }
  return (
    <div className="status-box h-24 bg-white dark:bg-[#252945] shadow-md mt-5 rounded-xl">
      <div className="status-box-content px-2 py-7  grid grid-cols-2 md:grid-cols-5 md:gap-2">
        <h1 className="font-bold text-medium-gray capitalize">{activeInvoice.status}</h1>
        <div className="status-box flex gap-4 items-center bg-green-500/20 justify-center w-[80%] py-2 rounded-md">
          <BsCircleFill className="text-green-500 text-sm " />
          <p className="text-green-500 font-bold text-sm capitalize">
            {activeInvoice.status}
          </p>
        </div>

        <button
          className="hidden md:block  py-3 bg-[#F8F8FB] rounded-full text-[#9277FF] font-bold"
          onClick={handleToggleEditInvoiceForm}
        >
          Edit
        </button>
        <button
          className="hidden md:block  py-3 bg-[#EC5757] rounded-full text-white font-bold"
          onClick={handleToggleDeleteInvoiceForm}
        >
          Delete
        </button>
        <button className="hidden md:block  py-3 bg-[#7C5DFA] rounded-full text-white font-bold">
          Mark as Paid
        </button>
      </div>
    </div>
  )
}

function TitleAndAdress() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  return (
    <section className="invoice-title-and-adress grid grid-cols-1 md:grid-cols-2 w-full gap-5 px-2 dark:bg-[#252945]">
      <div className="invoice-num-and-name">
        <h1 className="font-bold  dark:text-white">#{activeInvoice.id}</h1>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.description}
        </p>
      </div>
      <div className="adress-bill-from flex flex-col md:items-end">
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.street}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.city}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.postCode}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.country}
        </p>
      </div>
    </section>
  )
}

function InvoiceInfos() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  return (
    <section className="grid grid-cols-2 pt-4 gap-2 md:grid-cols-3 px-2 dark:bg-[#252945]">
      <div className="invoice-date flex flex-col gap-2">
        <p className="text-sm font-bold text-medium-gray">Invoice Date</p>
        <h1 className="font-bold dark:text-white">{activeInvoice.createdAt}</h1>
      </div>

      <div className="bill-to flex flex-col ">
        <p className="text-sm font-bold text-medium-gray">Bill to</p>
        <h1 className="font-bold  dark:text-white">
          {activeInvoice.clientName}
        </h1>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.street}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.city}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.postCode}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.country}
        </p>
      </div>
      <div className="payment-due flex flex-col gap-2 col-span-2 md:col-span-1 md:order-4">
        <p className="text-sm font-bold text-medium-gray">Payment Due</p>
        <h1 className="font-bold  dark:text-white">
          {activeInvoice.paymentDue}
        </h1>
      </div>
      <div className="sent-to flex flex-col gap-2">
        <p className="text-sm font-bold text-medium-gray">Sent to</p>
        <h1 className="font-bold  dark:text-white">
          {activeInvoice.clientEmail}
        </h1>
      </div>
    </section>
  )
}

function Item() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  return (
    <>
      {activeInvoice &&
        activeInvoice.items.map((item, index) => (
          <>
            <div className="flex flex-col gap-2 " key={index}>
              <h1 className="font-bold dark:text-white">{item.name}</h1>
              <p className="font-bold text-medium-gray text-sm md:hidden">
                {item.quantity} x € {item.price}
              </p>
            </div>
            <div className="quantity hidden md:flex justify-center">
              <h1 className="font-bold text-medium-gray text-lg">
                {item.quantity}
              </h1>
            </div>
            <div className="price hidden md:block ">
              <h1 className="font-bold text-medium-gray text-lg ">
                € {item.price}
              </h1>
            </div>
            <div className="flex justify-end total">
              <h1 className="font-bold dark:text-white">
                € {item.quantity * item.price}
              </h1>
            </div>
          </>
        ))}
    </>
  )
}

function TotalBox() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const grandTotal = activeInvoice
    ? activeInvoice.items.reduce((sum, item) => sum + item.total, 0)
    : 0

  return (
    <section className="total-box min-h-[80px] bg-[#1E2139] rounded-b-xl dark:bg-black">
      <div className="total-content py-10 px-10 grid grid-cols-2 text-white ">
        <div className="total-title">
          <h1 className="font-semibold">Grand Total</h1>
        </div>
        <div className="total-sum flex justify-end  font-bold">
          <h1 className="text-xl">€ {grandTotal}</h1>
        </div>
      </div>
    </section>
  )
}
