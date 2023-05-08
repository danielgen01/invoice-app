import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import iconplus from "../../../../public/assets/icon-plus.svg"
import { ItemNameForm } from "./components/ItemNameForm"
import { InvoiceInfo } from "./components/InvoiceInfo"
import { BillToForm } from "./components/BillToForm"
import { BillFromForm } from "./components/BillFromForm"
import { useEditInvoice } from "./useEditInvoice"

const EditInvoiceDialog = () => {
  const {
    billFromData,
    setBillFromData,
    billToData,
    setBillToData,
    invoiceInfoData,
    setInvoiceInfoData,
    handleToggleEditInvoiceForm,
    handleUpdateInvoice,
    addItem,
    removeItem,
    updateItem,
    isAnyFieldEmpty,
    isEditInvoiceFormOpen,
    activeInvoice,
    itemForms,
  } = useEditInvoice()

  return (
    <>
      <div
        className="overlay background fixed top-0 left-0 bg-black/50 w-screen h-screen  md:block cursor-pointer"
        onClick={handleToggleEditInvoiceForm}
        style={{ display: isEditInvoiceFormOpen ? "block" : "none" }}
      ></div>
      <dialog
        className=" New Invoice Modal px-5  py-5  flex flex-col gap-6 bg-white
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
          Edit #{activeInvoice.id}
        </h1>

        <BillFromForm
          activeInvoice={activeInvoice}
          billFromData={billFromData}
          setBillFromData={setBillFromData}
        />
        <BillToForm
          activeInvoice={activeInvoice}
          billToData={billToData}
          setBillToData={setBillToData}
        />
        <InvoiceInfo
          activeInvoice={activeInvoice}
          invoiceInfoData={invoiceInfoData}
          setInvoiceInfoData={setInvoiceInfoData}
        />

        <section className="flex flex-col gap-2 Itemlist overflow-y-scroll h-60">
          <h1 className="font-bold text-medium-gray text-xl ">Item List</h1>
          {itemForms.map((item: any, index: number) => (
            <>
              <ItemNameForm
                id={item.id}
                defaultValueName={item.name}
                defaultValueQuantity={item.quantity}
                defaultValuePrice={item.price}
                defaultValueTotal={item.total}
                removeItem={removeItem}
                updateItem={updateItem}
              />
            </>
          ))}
          <button
            className="flex items-center justify-center gap-2 
          hover:bg-[#DFE3FA] bg-[#F8F8FB] py-3 rounded-full dark:bg-[#1E2139]"
            onClick={addItem}
          >
            <img src={iconplus} alt="add" />
            <span className="font-bold text-[#9277FF] dark:text-white">
              Add new Item
            </span>
          </button>
        </section>

        <div className="bg-white h-14 dark:bg-[#1E2139]">
          <div className="footer-content-buttons flex items-center gap-2 w-full h-full px-4 justify-end">
            <button
              className="text-[#9277FF] font-bold bg-[#DFE3FA] px-5 py-3 rounded-full
               dark:text-white dark:bg-[#252945] hover:bg-[#F8F8FB]"
              onClick={handleToggleEditInvoiceForm}
            >
              Cancel
            </button>

            <button
              className="text-white font-bold bg-[#7C5DFA] px-5 py-3 rounded-full hover:bg-[#9277FF]"
              onClick={handleUpdateInvoice}
            >
              Save Changes
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default EditInvoiceDialog
