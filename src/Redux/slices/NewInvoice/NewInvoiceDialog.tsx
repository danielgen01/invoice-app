import { itemNameFormProps } from "./ItemNameForm"
import { InvoiceInfoProps } from "./InvoiceInfoForm"
import { BillToProps } from "./BillToForm"
import React, { useState } from "react"
import deleteicon from "../../../../public/assets/icon-delete.svg"
import iconplus from "../../../../public/assets/icon-plus.svg"
import { RootState } from "../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../store"
import { toggleNewInvoiceForm } from "./NewInvoiceSlice"
import { createNewInvoice } from "../Data/DataSlice"
import { InvoiceType } from "../Data/DataSlice"
import BillFromForm from "./BillFromForm"
import BillToForm from "./BillToForm"
import InvoiceInfo from "./InvoiceInfoForm"
import ItemNameForm from "./ItemNameForm"
import GoBackButton from "./GoBackButton"
import { FooterButtons } from "./FooterButtons"

const NewInvoiceDialog = () => {
  const dispatch = useAppDispatch()

  // global States

  const isNewInvoiceFormOpen = useAppSelector(
    (state: RootState) => state.newInvoice.isNewInvoiceFormOpen
  )

  // States

  const [itemForms, setItemForms] = useState<any>([
    {
      id: "",
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ])

  const [billFromData, setBillFromData] = useState({
    street: "",
    city: "",
    postCode: "",
    country: "",
  })

  const [billToData, setBillToData] = useState({
    clientName: "",
    clientEmail: "",
    street: "",
    city: "",
    postCode: "",
    country: "",
  })

  const [invoiceInfoData, setInvoiceInfoData] = useState({
    date: "",
    paymentTerms: 0,
    projectDescription: "",
  })

  // Functions

  const handleToggleNewInvoiceForm = () => {
    dispatch(toggleNewInvoiceForm())
  }

  const addItem = () => {
    setItemForms([...itemForms, { id: new Date().getTime() }])
  }

  const removeItem = (id: number) => {
    setItemForms(itemForms.filter((item: any) => item.id !== id))
  }

  const handleAddInvoice = () => {
    const newInvoice: InvoiceType = {
      id: Math.floor(Math.random() * 1_00_00).toString(), // Generieren Sie hier eine eindeutige ID für die Rechnung
      createdAt: invoiceInfoData.date,
      paymentDue: invoiceInfoData.date + invoiceInfoData.paymentTerms,
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
      items: itemForms,
      total: itemForms.reduce(
        (acc: any, item: { total: any }) => acc + item.total,
        0
      ),
    }

    dispatch(createNewInvoice(newInvoice))
    handleToggleNewInvoiceForm()
  }

  return (
    <>
      <div
        className="overlay background fixed top-0 left-0 bg-black/50 
         dark:bg-black/20 w-screen h-screen  md:block cursor-pointer"
        style={{ display: isNewInvoiceFormOpen ? "block" : "none" }}
        onClick={handleToggleNewInvoiceForm}
      ></div>
      <dialog
        className=" New Invoice Modal px-5  py-5  flex flex-col gap-6
         bg-[#F8F8FB]
       dark:bg-[#0C0E16] dark:text-white 
        md:w-[80%] absolute top-0 md:px-10
         xl:w-[30%] xl:ml-20 xl:max-h-screen xl:gap-0 xl:py-0 
          "
        style={{ display: isNewInvoiceFormOpen ? "block" : "none" }}
      >
        <GoBackButton handleToggleNewInvoiceForm={handleToggleNewInvoiceForm} />

        <BillFromForm
          billFromData={billFromData}
          setBillFromData={setBillFromData}
        />
        <BillToForm billToData={billToData} setBillToData={setBillToData} />
        <InvoiceInfo
          invoiceInfoData={invoiceInfoData}
          setInvoiceInfoData={setInvoiceInfoData}
        />
        <section
          className="flex flex-col gap-2 Itemlist 
        overflow-y-scroll h-60"
        >
          <h1 className="font-bold text-medium-gray text-xl ">Item List</h1>

          {itemForms.map((item: any) => (
            <ItemNameForm
              key={item.id}
              id={item.id}
              removeItem={removeItem}
              itemData={item}
              setItemData={(updatedItemData: any) =>
                setItemForms(
                  itemForms.map((itemForm: any) =>
                    itemForm.id === item.id ? updatedItemData : itemForm
                  )
                )
              }
            />
          ))}
          <button
            className="flex items-center justify-center gap-2 bg-[#DFE3FA] py-3 rounded-full dark:bg-[#1E2139]"
            onClick={addItem}
          >
            <img src={iconplus} alt="add" />
            <span className="font-bold text-[#9277FF] dark:text-white">
              Add new Item
            </span>
          </button>
        </section>

        <FooterButtons handleAddInvoice={handleAddInvoice} />
      </dialog>
    </>
  )
}

export default NewInvoiceDialog
