import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import { RootState } from "../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../store"
import { useNavigate } from "react-router-dom"
import { toggleEditInvoiceForm } from "../EditInvoice/EditInvoiceSlice"
import { toggleDeleteInvoiceForm } from "../DeleteDialog/DeleteDialogSlice"
import { resetActiveInvoice } from "../Data/DataSlice"
import { updateActiveInvoiceStatus } from "../Data/DataSlice"
import { useEffect } from "react"
import { StatusBox } from "./components/StatusBox"
import { TitleAndAdress } from "./components/TitleAndAdress"
import { InvoiceInfos } from "./components/InvoiceInfos"
import { Item } from "./components/Item"
import { Footer } from "./components/Footer"
import { TotalBox } from "./components/TotalBox"

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

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const handleToggleEditInvoiceForm = () => {
    dispatch(toggleEditInvoiceForm())
  }

  const handleToggleDeleteInvoiceForm = () => {
    dispatch(toggleDeleteInvoiceForm())
  }

  const changeStatusToPaid = () => {
    dispatch(updateActiveInvoiceStatus("paid"))
  }

  useEffect(() => {
    console.log(activeInvoice.status)
  }, [activeInvoice])

  // prevent from showing scrolled content when user clicks on an invoice
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="overlay"> </div>
      <body className="content px-5 py-5 xl:px-72 lg:py-10">
        <button
          className="go-back-button flex items-center gap-5 "
          onClick={handleGoBack}
        >
          <img src={arrowleft} alt="goback" className="w-2" />
          <h1 className="font-bold dark:text-white">Go back</h1>
        </button>
        <StatusBox />
        <div className="invoice-box bg-white   mt-5 shadow-md rounded-xl dark:bg-[#252945]">
          <main className="invoice-details-content md:py-10">
            <TitleAndAdress />
            <InvoiceInfos />
            <section
              className="price-overview bg-[#F8F8FB]
             dark:bg-[#252945] w-full min-h-[300px] mt-4 rounded-xl"
            >
              <div
                className="headline hidden md:grid md:grid-cols-4 px-5
               dark:bg-[#252945] "
              >
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
          </main>
        </div>
        <Footer
          handleToggleEditInvoiceForm={handleToggleEditInvoiceForm}
          handleToggleDeleteInvoiceForm={handleToggleDeleteInvoiceForm}
          changeStatusToPaid={changeStatusToPaid}
        />
      </body>
    </>
  )
}

export default ViewInvoice
