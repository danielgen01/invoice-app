import { createSlice } from "@reduxjs/toolkit"

interface deleteInvoiceState {
  isDeleteInvoiceFormOpen: boolean
}

const initialState: deleteInvoiceState = {
  isDeleteInvoiceFormOpen: false,
}

const deleteInvoiceForm = createSlice({
  name: "deleteInvoiceForm",
  initialState,
  reducers: {
    toggleDeleteInvoiceForm: (state) => {
      state.isDeleteInvoiceFormOpen = !state.isDeleteInvoiceFormOpen
    },
  },
})

export const { toggleDeleteInvoiceForm } = deleteInvoiceForm.actions

export default deleteInvoiceForm.reducer
