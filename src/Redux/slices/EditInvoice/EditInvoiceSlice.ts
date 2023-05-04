import { createSlice } from "@reduxjs/toolkit"

interface editInvoiceFormState {
  isEditInvoiceFormOpen: boolean
}

const initialState: editInvoiceFormState = {
  isEditInvoiceFormOpen: false,
}

const editInvoiceForm = createSlice({
  name: "editInvoiceForm",
  initialState,
  reducers: {
    toggleEditInvoiceForm: (state) => {
      state.isEditInvoiceFormOpen = !state.isEditInvoiceFormOpen
    },
  },
})

export const { toggleEditInvoiceForm } = editInvoiceForm.actions

export default editInvoiceForm.reducer
