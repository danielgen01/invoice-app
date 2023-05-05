import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import iconplus from "../../../../public/assets/icon-plus.svg"
import { toggleEditInvoiceForm } from "./EditInvoiceSlice"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { ItemNameForm } from "./components/ItemNameForm"
import { InvoiceInfo } from "./components/InvoiceInfo"
import { BillToForm } from "./components/BillToForm"
import { BillFromForm } from "./components/BillFromForm"

const EditInvoiceDialog = () => {
  
  const dispatch = useAppDispatch()

  const handleToggleEditInvoiceForm = () => {
    dispatch(toggleEditInvoiceForm())
  }

  const isEditInvoiceFormOpen = useAppSelector(
    (state: RootState) => state.editInvoice.isEditInvoiceFormOpen
  )

  return (
    <>
      <div
        className="overlay background fixed top-0 left-0 bg-black/50 w-screen h-screen  md:block cursor-pointer"
        onClick={handleToggleEditInvoiceForm}
        style={{ display: isEditInvoiceFormOpen ? "block" : "none" }}
      ></div>
      <dialog
        className=" New Invoice Modal px-5  py-5  flex flex-col gap-6 bg-[#F8F8FB]
       dark:bg-[#0C0E16] dark:text-white 
        md:w-[80%] absolute top-0 md:px-10
         xl:w-[30%] xl:ml-20 xl:max-h-screen xl:gap-0 xl:py-0  
          "
        style={{ display: isEditInvoiceFormOpen ? "block" : "none" }}
      >
        <button
          className="go-back-button flex items-center gap-5 md:hidden "
          onClick={handleToggleEditInvoiceForm}
        >
          <img src={arrowleft} alt="goback" className="w-2" />
          <h1 className="font-bold">Go back</h1>
        </button>
        <h1 className="mt-5 font-bold text-2xl New-invoice-headline">
          Edit #....
        </h1>

        <BillFromForm />
        <BillToForm />
        <InvoiceInfo />
        <section className="flex flex-col gap-2 Itemlist overflow-y-scroll h-60">
          <h1 className="font-bold text-medium-gray text-xl ">Item List</h1>

          <ItemNameForm />
          <ItemNameForm />
          <button className="flex items-center justify-center gap-2 bg-[#DFE3FA] py-3 rounded-full dark:bg-[#1E2139]">
            <img src={iconplus} alt="add" />
            <span className="font-bold text-[#9277FF] dark:text-white">
              Add new Item
            </span>
          </button>
        </section>

        <div className="bg-white h-14 dark:bg-[#1E2139]">
          <div className="footer-content-buttons flex items-center gap-2 w-full h-full px-4 justify-end">
            <button
              className="text-[#9277FF] font-bold bg-[#DFE3FA] px-5 py-3 rounded-full dark:text-white dark:bg-[#252945]"
              onClick={handleToggleEditInvoiceForm}
            >
              Cancel
            </button>

            <button className="text-white font-bold bg-[#7C5DFA] px-5 py-3 rounded-full">
              Save Changes
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default EditInvoiceDialog
