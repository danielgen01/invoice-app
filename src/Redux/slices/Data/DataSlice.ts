import { createSlice } from "@reduxjs/toolkit"
import Data from "./data.json"

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    Data: Data,
  },
  reducers: {
    // Define your reducers here
  },
  // Optional: Add extraReducers for handling actions from other slices
  // extraReducers: (builder) => {
  //   builder.addCase(someOtherAction, (state, action) => {
  //     // Do something with the state and action
  //   });
  // },
})

export const { actions: yourActions, reducer: yourReducer } = dataSlice

// Export actions for use in components
// export const { yourAction1, yourAction2 } = yourActions;
