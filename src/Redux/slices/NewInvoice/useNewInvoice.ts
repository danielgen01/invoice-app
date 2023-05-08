import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { createNewInvoice } from "../Data/DataSlice"
import { toggleNewInvoiceForm } from "./NewInvoiceSlice"
import { InvoiceType } from "../Data/DataSlice"

export const useNewInvoice = () => {
  const dispatch = useAppDispatch()

//   states
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

    const updatedItemForms = itemForms.map((item: any) => {
      return {
        ...item,
        total: item.quantity * item.price,
      }
    })

    const invoiceDate = new Date(invoiceInfoData.date)
    const paymentDueDate = new Date(invoiceDate)
    paymentDueDate.setDate(invoiceDate.getDate() + invoiceInfoData.paymentTerms)

    const newInvoice: InvoiceType = {
      id: Math.floor(Math.random() * 1_00_00).toString(), // Generieren Sie hier eine eindeutige ID für die Rechnung
      createdAt: isValidDate(invoiceDate)
        ? invoiceDate.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      paymentDue: isValidDate(invoiceDate)
        ? invoiceDate.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
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
      items: updatedItemForms,
      total: updatedItemForms.reduce(
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

  // save as draft
  const handleSaveAsDraft = () => {
    const updatedItemForms = itemForms.map((item: any) => {
      return {
        ...item,
        total: item.quantity * item.price,
      }
    })

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
      items: updatedItemForms,
      total: updatedItemForms.reduce(
        (acc: any, item: { total: any }) => acc + item.total,
        0
      ),
    }

    dispatch(createNewInvoice(newInvoice as InvoiceType))
    handleToggleNewInvoiceForm()
  }

  return {
    billFromData,
    setBillFromData,
    billToData,
    setBillToData,
    invoiceInfoData,
    setInvoiceInfoData,
    itemForms,
    setItemForms,
    addItem,
    removeItem,
    handleAddInvoice,
    handleSaveAsDraft,
    handleToggleNewInvoiceForm
  }
}
