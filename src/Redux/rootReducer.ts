import { combineReducers } from "@reduxjs/toolkit"
import dataSlice from "../Redux/slices/Data/DataSlice"


const rootReducer = combineReducers({
data:dataSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer