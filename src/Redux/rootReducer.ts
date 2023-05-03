import { combineReducers } from "@reduxjs/toolkit"
import dataSlice from "../Redux/slices/Data/DataSlice"
import newInvoiceSlice from "../Redux/slices/NewInvoice/NewInvoiceSlice"


const rootReducer = combineReducers({
data:dataSlice,
newInvoice:newInvoiceSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer