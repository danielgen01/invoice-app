import { combineReducers } from "@reduxjs/toolkit"
import dataSlice from "../Redux/slices/Data/DataSlice"
import newInvoiceSlice from "../Redux/slices/NewInvoice/NewInvoiceSlice"
import editInvoiceSlice from "../Redux/slices/EditInvoice/EditInvoiceSlice"
import deleteInvoiceSlice from "../Redux/slices/DeleteDialog/DeleteDialogSlice"


const rootReducer = combineReducers({
data:dataSlice,
newInvoice:newInvoiceSlice,
editInvoice:editInvoiceSlice,
deleteInvoice:deleteInvoiceSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer