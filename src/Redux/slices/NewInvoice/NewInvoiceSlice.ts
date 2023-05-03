import { createSlice } from "@reduxjs/toolkit"

interface newInvoiceFormState {
  isNewInvoiceFormOpen: boolean
}

const initialState: newInvoiceFormState = {
  isNewInvoiceFormOpen: false,
}

const newInvoiceForm = createSlice({
  name: "newInvoiceForm",
  initialState,
  reducers: {
    toggleNewInvoiceForm: (state) => {
      state.isNewInvoiceFormOpen = !state.isNewInvoiceFormOpen
    },
  },
})

export const { toggleNewInvoiceForm } = newInvoiceForm.actions

export default newInvoiceForm.reducer