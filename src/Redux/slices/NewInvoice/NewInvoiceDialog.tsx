import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import deleteicon from "../../../../public/assets/icon-delete.svg"
import iconplus from "../../../../public/assets/icon-plus.svg"
import { RootState } from "../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../store"
import { toggleNewInvoiceForm } from "./NewInvoiceSlice"

const NewInvoiceDialog = () => {
  const dispatch = useAppDispatch()

  const isNewInvoiceFormOpen = useAppSelector(
    (state: RootState) => state.newInvoice.isNewInvoiceFormOpen
  )

  const handleToggleNewInvoiceForm = () => {
    dispatch(toggleNewInvoiceForm())
  }
  return (
    <>
      <div
        className="overlay background fixed top-0 left-0 bg-black/50  dark:bg-black/20 w-screen h-screen  md:block cursor-pointer"
        style={{ display: isNewInvoiceFormOpen ? "block" : "none" }}
        onClick={handleToggleNewInvoiceForm}
      ></div>
      <dialog
        className=" New Invoice Modal px-5  py-5  flex flex-col gap-6 bg-[#F8F8FB]
       dark:bg-[#0C0E16] dark:text-white 
        md:w-[80%] absolute top-0 md:px-10
         xl:w-[30%] xl:ml-20 xl:max-h-screen xl:gap-0 xl:py-0 
          "
        style={{ display: isNewInvoiceFormOpen ? "block" : "none" }}
      >
        <button
          className="go-back-button flex items-center gap-5 md:hidden "
          onClick={handleToggleNewInvoiceForm}
        >
          <img src={arrowleft} alt="goback" className="w-2" />
          <h1 className="font-bold">Go back</h1>
        </button>
        <h1 className="mt-5 font-bold text-2xl New-invoice-headline">
          New Invoice
        </h1>

        <BillFromForm />
        <BillToForm />
        <InvoiceInfo />
        <section className="flex flex-col gap-2 Itemlist overflow-y-scroll h-60">
          <h1 className="font-bold text-medium-gray text-xl ">Item List</h1>

          <ItemNameForm />
          {/* <ItemNameForm /> */}
          <button className="flex items-center justify-center gap-2 bg-[#DFE3FA] py-3 rounded-full dark:bg-[#1E2139]">
            <img src={iconplus} alt="add" />
            <span className="font-bold text-[#9277FF] dark:text-white">
              Add new Item
            </span>
          </button>
        </section>

        <div className="bg-white h-20 dark:bg-[#1E2139] mt-10 md:-mt-5">
          <div className="footer-content-buttons flex items-center  justify-between w-full h-full px-4">
            <button className="text-[#9277FF] font-bold bg-[#DFE3FA] px-5 py-3 rounded-full dark:text-white dark:bg-[#252945]">
              Discard
            </button>
            <button className="text-medium-gray font-bold bg-[#252945] px-5 py-3 rounded-full dark:bg-[#888EB0] dark:text-white">
              Save as Draft
            </button>
            <button className="text-white font-bold bg-[#7C5DFA] px-5 py-3 rounded-full">
              Save & Send
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default NewInvoiceDialog

function BillFromForm() {
  return (
    <>
      <h2 className="font-bold text-[#7C5DFA] ">Bill from </h2>
      <form className="flex-col flex gap-5 xl:gap-0 mt-4 ">
        <label
          htmlFor="street-adress"
          className="text-medium-gray font-bold text-sm"
        >
          Street Adress
        </label>
        <input
          type="text"
          name="street-adress"
          id="street-adress"
          className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none xl:h-10"
        />
        <div className="city-and-postcode grid grid-cols-2 md:grid-cols-3 items-center justify-between w-full">
          <div className="city flex flex-col gap-2">
            <label
              htmlFor="city"
              className="text-medium-gray font-bold text-sm"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40 outline-none dark:bg-[#1E2139]"
            />
          </div>

          <div className="postcode flex flex-col gap-2">
            <label
              htmlFor="postcode"
              className="text-medium-gray font-bold text-sm"
            >
              Post Code
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40 outline-none dark:bg-[#1E2139]"
            />
          </div>
          <div className="country flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-medium-gray font-bold text-sm"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2  outline-none w-full md:w-auto"
            />
          </div>
        </div>
      </form>
    </>
  )
}

function BillToForm() {
  return (
    <>
      <h2 className="font-bold text-[#7C5DFA]">Bill To </h2>

      <form className="gap-5 mt-4 flex flex-col xl:gap-0">
        <div className="client-name flex flex-col">
          <label
            htmlFor="clientsName"
            className="text-medium-gray font-bold text-sm"
          >
            Client's Name
          </label>
          <input
            type="text"
            name="clientsName"
            id="clientsName"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
        <div className="client-mail flex flex-col">
          <label
            htmlFor="clientsEmail"
            className="text-medium-gray font-bold text-sm"
          >
            Client's Email
          </label>
          <input
            type="text"
            name="clientsEmail"
            id="clientsEmail"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
        <div className="client-adress flex flex-col">
          <label
            htmlFor="street-adress"
            className="text-medium-gray font-bold text-sm"
          >
            Street Adress
          </label>
          <input
            type="text"
            name="street-adress"
            id="street-adress"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>

        <div className="city-and-postcode  grid grid-cols-2 md:grid-cols-3 items-center justify-between w-full">
          <div className="city flex flex-col gap-2">
            <label
              htmlFor="city"
              className="text-medium-gray font-bold text-sm"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40 outline-none dark:bg-[#1E2139]"
            />
          </div>

          <div className="postcode flex flex-col gap-2">
            <label
              htmlFor="postcode"
              className="text-medium-gray font-bold text-sm"
            >
              Post Code
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40 outline-none dark:bg-[#1E2139]"
            />
          </div>
          <div className="country flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-medium-gray font-bold text-sm"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 outline-none"
            />
          </div>
        </div>
      </form>
    </>
  )
}

function InvoiceInfo() {
  return (
    <>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        <div className="invoice-date flex flex-col">
          <label
            htmlFor="Invoicedate"
            className="text-medium-gray font-bold text-sm"
          >
            Invoice Date
          </label>
          <input
            type="date"
            name="Invoicedate"
            id="Invoicedate"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
        <div className="payment-terms flex flex-col">
          <label
            htmlFor="paymentterms"
            className="text-medium-gray font-bold text-sm"
          >
            Payment Terms
          </label>
          <input
            type="text"
            name="paymentterms"
            id="paymentterms"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
        <div className="project-description flex flex-col">
          <label
            htmlFor="projectdescription"
            className="text-medium-gray font-bold text-sm"
          >
            Project Description
          </label>
          <input
            type="text"
            name="projectdescription"
            id="projectdescription"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
      </form>
    </>
  )
}

function ItemNameForm() {
  return (
    <form className="grid items-center gap-5   grid-cols-2  md:grid-cols-5 ">
      <div className="item-name flex flex-col col-span-4 md:col-span-1">
        <label
          htmlFor="item-name"
          className="text-medium-gray font-bold text-sm mt-6"
        >
          Item Name
        </label>
        <input
          type="text"
          name="item-name"
          id="item-name"
          className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
      </div>

      <div className="quantity flex flex-col mt-5">
        <label
          htmlFor="quantity"
          className="text-medium-gray font-bold text-sm"
        >
          Qty.
        </label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-20 outline-none dark:bg-[#1E2139]"
        />
      </div>

      <div className="price flex flex-col mt-4">
        <label htmlFor="price" className="text-medium-gray font-bold text-sm">
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-20 outline-none dark:bg-[#1E2139]"
        />
      </div>
      <div className="total flex flex-col  gap-5">
        <label htmlFor="total" className="text-medium-gray font-bold text-sm">
          Total
        </label>
        <p className="font-bold text-medium-gray">200.00</p>
      </div>
      <div className="delete ml-auto md:ml-0 mt-6">
        <img src={deleteicon} alt="delete" className="w-4 " />
      </div>
    </form>
  )
}
