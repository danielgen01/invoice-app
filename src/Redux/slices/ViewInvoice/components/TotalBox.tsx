import React from "react"
import { RootState } from "../../../rootReducer"
import { useAppSelector } from "../../../store"

export function TotalBox() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const grandTotal = activeInvoice
    ? activeInvoice.items.reduce((sum, item) => sum + item.total, 0)
    : 0

  return (
    <section className="total-box min-h-[80px] bg-[#1E2139] rounded-b-xl dark:bg-black">
      <div className="total-content py-10 px-10 grid grid-cols-2 text-white ">
        <div className="total-title">
          <h1 className="font-semibold">Grand Total</h1>
        </div>
        <div className="total-sum flex justify-end  font-bold">
          <h1 className="text-xl">€ {grandTotal}</h1>
        </div>
      </div>
    </section>
  )
}
