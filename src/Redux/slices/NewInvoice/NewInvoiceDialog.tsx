import { useState } from "react"
import iconplus from "../../../../public/assets/icon-plus.svg"
import { RootState } from "../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../store"
import { toggleNewInvoiceForm } from "./NewInvoiceSlice"
import { createNewInvoice } from "../Data/DataSlice"
import { InvoiceType } from "../Data/DataSlice"
import BillFromForm from "./components/BillFromForm"
import BillToForm from "./components/BillToForm"
import InvoiceInfo from "./components/InvoiceInfoForm"
import GoBackButton from "./components/GoBackButton"
import { FooterButtons } from "./components/FooterButtons"
import { ItemList } from "./components/ItemList"

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

  const handleAddInvoice = () => {
    if (isAnyFieldEmpty()) {
      alert("Please fill in all fields.")
      return
    }

    const invoiceDate = new Date(invoiceInfoData.date)
    const paymentDueDate = new Date(invoiceDate)
    paymentDueDate.setDate(invoiceDate.getDate() + invoiceInfoData.paymentTerms)

    const newInvoice: InvoiceType = {
      id: Math.floor(Math.random() * 1_00_00).toString(), // Generieren Sie hier eine eindeutige ID für die Rechnung
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
      items: itemForms,
      total: itemForms.reduce(
        (acc: any, item: { total: any }) => acc + item.total,
        0
      ),
    }

    dispatch(createNewInvoice(newInvoice))
    handleToggleNewInvoiceForm()
  }

  const isValidDate = (date: any) => {
    return date instanceof Date && !isNaN(date.getTime())
  }

  // ...

  // save as draft
  const handleSaveAsDraft = () => {
    const invoiceDate = new Date(invoiceInfoData.date)
    const paymentDueDate = new Date(invoiceDate)
    paymentDueDate.setDate(invoiceDate.getDate() + invoiceInfoData.paymentTerms)

    const newInvoice: Partial<InvoiceType> = {
      id: Math.floor(Math.random() * 1_00_00).toString(),
      createdAt: isValidDate(invoiceDate)
        ? invoiceDate.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      paymentDue: isValidDate(paymentDueDate)
        ? paymentDueDate.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      paymentTerms: invoiceInfoData.paymentTerms || 0,
      clientName: billToData.clientName || "",
      clientEmail: billToData.clientEmail || "",
      description: invoiceInfoData.projectDescription || "",
      status: "draft",
      senderAddress: {
        street: billFromData.street || "",
        city: billFromData.city || "",
        postCode: billFromData.postCode || "",
        country: billFromData.country || "",
      },
      clientAddress: {
        street: billToData.street || "",
        city: billToData.city || "",
        postCode: billToData.postCode || "",
        country: billToData.country || "",
      },
      items: itemForms || [],
      total:
        itemForms.reduce(
          (acc: any, item: { total: any }) => acc + item.total,
          0
        ) || 0,
    }

    dispatch(createNewInvoice(newInvoice as InvoiceType))
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
      <section
        role="dialog"
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
        <ItemList
          removeItem={removeItem}
          setItemForms={setItemForms}
          addItem={addItem}
          iconplus={iconplus}
          itemForms={itemForms}
        />

        <FooterButtons
          handleAddInvoice={handleAddInvoice}
          handleToggleNewInvoiceForm={handleToggleNewInvoiceForm}
          handleSaveAsDraft={handleSaveAsDraft}
        />
      </section>
    </>
  )
}

export default NewInvoiceDialog
