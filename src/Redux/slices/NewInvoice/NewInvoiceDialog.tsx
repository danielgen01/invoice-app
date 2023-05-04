import React, { useState } from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import arrowDown from "../../../../public/assets/icon-arrow-down.svg"
import deleteicon from "../../../../public/assets/icon-delete.svg"
import iconplus from "../../../../public/assets/icon-plus.svg"
import { RootState } from "../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../store"
import { toggleNewInvoiceForm } from "./NewInvoiceSlice"
import { createNewInvoice } from "../Data/DataSlice"
import { InvoiceType } from "../Data/DataSlice"
import { Listbox } from "@headlessui/react"

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

        <BillFromForm
          billFromData={billFromData}
          setBillFromData={setBillFromData}
        />
        <BillToForm billToData={billToData} setBillToData={setBillToData} />
        <InvoiceInfo
          invoiceInfoData={invoiceInfoData}
          setInvoiceInfoData={setInvoiceInfoData}
        />
        <section className="flex flex-col gap-2 Itemlist overflow-y-scroll h-60">
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

        <div className="bg-white h-20 dark:bg-[#1E2139] mt-10 md:-mt-5">
          <div className="footer-content-buttons flex items-center  justify-between w-full h-full px-4">
            <button className="text-[#9277FF] font-bold bg-[#DFE3FA] w-20 py-3 rounded-full dark:text-white dark:bg-[#252945]">
              Discard
            </button>
            <button
              className="text-medium-gray font-bold bg-[#252945] w-28 h-14
             rounded-full dark:bg-[#888EB0] dark:text-white"
            >
              Save as Draft
            </button>
            <button
              className="text-white font-bold bg-[#7C5DFA] w-28 h-14 rounded-full"
              onClick={handleAddInvoice}
            >
              Save & Send
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default NewInvoiceDialog

type BillFromProps = {
  billFromData: any
  setBillFromData: any
}

const BillFromForm: React.FC<BillFromProps> = ({
  billFromData,
  setBillFromData,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof billFromData
  ) => {
    setBillFromData({ ...billFromData, [field]: e.target.value })
    console.log(billFromData)
  }

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
          value={billFromData.street}
          onChange={(e) => handleInputChange(e, "street")}
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
              value={billFromData.city}
              onChange={(e) => handleInputChange(e, "city")}
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
              value={billFromData.postCode}
              onChange={(e) => handleInputChange(e, "postCode")}
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
              value={billFromData.country}
              onChange={(e) => handleInputChange(e, "country")}
            />
          </div>
        </div>
      </form>
    </>
  )
}

type BillToProps = {
  billToData: any
  setBillToData: any
}

const BillToForm: React.FC<BillToProps> = ({ billToData, setBillToData }) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof billToData
  ) => {
    setBillToData({ ...billToData, [field]: e.target.value })
    console.log(billToData)
  }
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
            value={billToData.clientName}
            onChange={(e) => handleInputChange(e, "clientName")}
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
            value={billToData.clientEmail}
            onChange={(e) => handleInputChange(e, "clientEmail")}
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
            value={billToData.street}
            onChange={(e) => handleInputChange(e, "street")}
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
              value={billToData.city}
              onChange={(e) => handleInputChange(e, "city")}
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
              value={billToData.postCode}
              onChange={(e) => handleInputChange(e, "postCode")}
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
              value={billToData.country}
              onChange={(e) => handleInputChange(e, "country")}
            />
          </div>
        </div>
      </form>
    </>
  )
}

type InvoiceInfoProps = {
  invoiceInfoData: any
  setInvoiceInfoData: any
}

const InvoiceInfo: React.FC<InvoiceInfoProps> = ({
  invoiceInfoData,
  setInvoiceInfoData,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof invoiceInfoData
  ) => {
    setInvoiceInfoData({ ...invoiceInfoData, [field]: e.target.value })
    console.log(invoiceInfoData)
  }

  const paymentTermOptions = [
    { label: "Next 1 day", value: 1 },
    { label: "Next 7 days", value: 7 },
    { label: "Next 14 days", value: 14 },
    { label: "Next 30 days", value: 30 },
  ]

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
            value={invoiceInfoData.date}
            onChange={(e) => handleInputChange(e, "date")}
          />
        </div>
        <div className="payment-terms flex flex-col">
          <label
            htmlFor="paymentterms"
            className="text-medium-gray font-bold text-sm"
          >
            Payment Terms
          </label>
          <Listbox
            value={invoiceInfoData.paymentTerms}
            onChange={(value) =>
              setInvoiceInfoData({ ...invoiceInfoData, paymentTerms: value })
            }
          >
            <Listbox.Button
              className="dark:bg-[#1E2139] font-bold h-12 xl:h-10 rounded-md border-medium-gray/50
   border-2 px-4 outline-none flex items-center justify-between "
            >
              {paymentTermOptions.find(
                (option) => option.value === invoiceInfoData.paymentTerms
              )?.label || "Choose an option"}
              <img src={arrowDown} />
            </Listbox.Button>
            <Listbox.Options
              className="absolute w-auto 
  mt-20 bg-white dark:bg-[#1E2139]
   rounded-md shadow-lg max-h-60 overflow-auto float-right"
            >
              {paymentTermOptions.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  value={option.value}
                  className={({ active }) =>
                    `${active ? "bg-medium-gray/50 dark:bg-opacity-20" : ""}
     hover:bg-medium-gray/50 dark:hover:bg-opacity-20
     px-4 py-2 font-bold text-sm hover:text-[#7C5DFA] hover:cursor-pointer`
                  }
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
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
            value={invoiceInfoData.projectDescription}
            onChange={(e) => handleInputChange(e, "projectDescription")}
          />
        </div>
      </form>
    </>
  )
}

type itemNameFormProps = {
  id: number
  removeItem: (id: number) => void
  itemData: any
  setItemData: any
}

const ItemNameForm: React.FC<itemNameFormProps> = ({
  id,
  removeItem,
  itemData,
  setItemData,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof itemData
  ) => {
    setItemData({ ...itemData, [field]: e.target.value })
  }

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
          value={itemData.name}
          onChange={(e) => handleInputChange(e, "name")}
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
          value={itemData.quantity}
          onChange={(e) => handleInputChange(e, "quantity")}
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
          value={itemData.priuce}
          onChange={(e) => handleInputChange(e, "price")}
        />
      </div>
      <div className="total flex flex-col  gap-5">
        <label htmlFor="total" className="text-medium-gray font-bold text-sm">
          Total
        </label>
        <p className="font-bold text-medium-gray">
          € {itemData.quantity * itemData.price}
        </p>
      </div>
      <button
        className="delete ml-auto md:ml-0 mt-6"
        onClick={() => removeItem(id)}
      >
        <img src={deleteicon} alt="delete" className="w-4 " />
      </button>
    </form>
  )
}
