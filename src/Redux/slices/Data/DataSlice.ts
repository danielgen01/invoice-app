import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import Data from "./data.json"

export type InvoiceType = {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: string
  senderAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  clientAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  items: Array<{
    name: string
    quantity: number
    price: number
    total: number
  }>
  total: number
}

export const emptyInvoice: InvoiceType = {
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 0,
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
}

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    Data: Data,
    activeInvoice: emptyInvoice,
  },
  reducers: {
    setActiveInvoice: (state, action) => {
      state.activeInvoice = action.payload
    },
    resetActiveInvoice: (state) => {
      state.activeInvoice = emptyInvoice
    },
    createNewInvoice: (state, action: PayloadAction<InvoiceType>) => {
      state.Data.push(action.payload)
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.Data = state.Data.filter((invoice) => invoice.id !== action.payload)
    },
    
  },
})

// Export
// Export reducer directly
export default dataSlice.reducer

// Export actions for use in components
export const {
  setActiveInvoice,
  resetActiveInvoice,
  createNewInvoice,
  deleteInvoice,
} = dataSlice.actions
