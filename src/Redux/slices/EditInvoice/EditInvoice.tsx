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
import { Listbox } from "@headlessui/react"
import {
  updateActiveInvoice,
  resetActiveInvoice,
  setActiveInvoice,
} from "../Data/DataSlice"
import { useState } from "react"
import { InvoiceType } from "../Data/DataSlice"

const EditInvoiceDialog = () => {
  const dispatch = useAppDispatch()

  const isEditInvoiceFormOpen = useAppSelector(
    (state: RootState) => state.editInvoice.isEditInvoiceFormOpen
  )

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const data = useAppSelector(
    (state: RootState) => state.data.Data
  )

  // States

  const [itemForms, setItemForms] = useState<any>(activeInvoice.items)

  const [billFromData, setBillFromData] = useState({
    street: activeInvoice.senderAddress.street,
    city: activeInvoice.senderAddress.city,
    postCode: activeInvoice.senderAddress.postCode,
    country: activeInvoice.senderAddress.country,
  })

  const [billToData, setBillToData] = useState({
    clientName: activeInvoice.clientName,
    clientEmail: activeInvoice.clientEmail,
    street: activeInvoice.clientAddress.street,
    city: activeInvoice.clientAddress.city,
    postCode: activeInvoice.clientAddress.postCode,
    country: activeInvoice.clientAddress.country,
  })

  const [invoiceInfoData, setInvoiceInfoData] = useState({
    date: activeInvoice.createdAt,
    paymentTerms: activeInvoice.paymentTerms,
    projectDescription: activeInvoice.description,
  })

  const handleToggleEditInvoiceForm = () => {
    dispatch(toggleEditInvoiceForm())
  }

  const addItem = () => {
    setItemForms([...itemForms, { id: Math.floor(Math.random() * 1_000_000) }
    ])
  }

  const removeItem = (id: number) => {
    setItemForms(itemForms.filter((item: any) => item.id !== id))
  }

  const updateItem = (id: number, updatedItem: any) => {
    setItemForms(itemForms.map((item: any) => (item.id === id ? updatedItem : item)))
  }
  

  const isAnyFieldEmpty = () => {
    const checkEmptyFields = (obj: object) => {
      return Object.values(obj).some(
        (value: any) => value === "" || value === 0
      )
    }

    const billFromDataEmpty = checkEmptyFields(billFromData)
    const billToDataEmpty = checkEmptyFields(billToData)
    const invoiceInfoDataEmpty = checkEmptyFields(invoiceInfoData)

    return billFromDataEmpty || billToDataEmpty || invoiceInfoDataEmpty
  }

  const handleUpdateInvoice = () => {
    // if (isAnyFieldEmpty()) {
    //   alert("Please fill in all fields.")
    //   return
    // }

    const invoiceDate = new Date(invoiceInfoData.date)
    const paymentDueDate = new Date(invoiceDate)
    paymentDueDate.setDate(invoiceDate.getDate() + invoiceInfoData.paymentTerms)

    const updatedItems = itemForms.map((item: any) => {
      const price = parseFloat(item.price) || 0
      const quantity = parseFloat(item.quantity) || 0
      const total = price * quantity
      const name = item.name
      return { ...item, total, name, quantity }
    })

    const newInvoice: any = {
      id: Math.floor(Math.random() * 1_00_00).toString(),
      createdAt: invoiceInfoData.date,
      paymentDue: paymentDueDate.toISOString().split("T")[0],
      paymentTerms: invoiceInfoData.paymentTerms,
      clientName: billToData.clientName,
      clientEmail: billToData.clientEmail,
      description: invoiceInfoData.projectDescription,
      status: "pending",
      senderAddress: {
        street: billFromData.street,
        city: billFromData.city,
        postCode: billFromData.postCode,
        country: billFromData.country,
      },
      clientAddress: {
        street: billToData.street,
        city: billToData.city,
        postCode: billToData.postCode,
        country: billToData.country,
      },
      items: updatedItems,
      total: updatedItems.reduce(
        (acc: any, item: { total: any }) => acc + item.total,
        0
      ),
    }

    dispatch(updateActiveInvoice(newInvoice))
    dispatch(resetActiveInvoice())
    dispatch(setActiveInvoice(newInvoice))
    handleToggleEditInvoiceForm()
    console.log(data)
  }

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
          bg-[#DFE3FA] py-3 rounded-full dark:bg-[#1E2139]"
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
              className="text-[#9277FF] font-bold bg-[#DFE3FA] px-5 py-3 rounded-full dark:text-white dark:bg-[#252945]"
              onClick={handleToggleEditInvoiceForm}
            >
              Cancel
            </button>

            <button
              className="text-white font-bold bg-[#7C5DFA] px-5 py-3 rounded-full"
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
