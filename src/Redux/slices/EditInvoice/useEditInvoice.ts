import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import {
  updateActiveInvoice,
  // updateActiveInvoiceStatus,
} from "../Data/DataSlice"
import { toggleEditInvoiceForm } from "./EditInvoiceSlice"
import { setActiveInvoice, resetActiveInvoice } from "../Data/DataSlice"

export const useEditInvoice = () => {
  const dispatch = useAppDispatch()

  // States

  const isEditInvoiceFormOpen = useAppSelector(
    (state: RootState) => state.editInvoice.isEditInvoiceFormOpen
  )

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const data = useAppSelector((state: RootState) => state.data.Data)

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
    setItemForms([...itemForms, { id: Math.floor(Math.random() * 1_000_000) }])
  }

  const removeItem = (id: number) => {
    setItemForms(itemForms.filter((item: any) => item.id !== id))
  }

  const updateItem = (id: number, updatedItem: any) => {
    setItemForms(
      itemForms.map((item: any) => (item.id === id ? updatedItem : item))
    )
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

  return {
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
  }
}
