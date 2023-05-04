import { combineReducers } from "@reduxjs/toolkit"
import dataSlice from "../Redux/slices/Data/DataSlice"
import newInvoiceSlice from "../Redux/slices/NewInvoice/NewInvoiceSlice"
import editInvoiceSlice from "../Redux/slices/EditInvoice/EditInvoiceSlice"


const rootReducer = combineReducers({
data:dataSlice,
newInvoice:newInvoiceSlice,
editInvoice:editInvoiceSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer