import React from "react"
import { RootState } from "../../../rootReducer"
import { useAppSelector } from "../../../store"

export function InvoiceInfos() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  return (
    <section className="grid grid-cols-2 pt-4 gap-2 md:grid-cols-3 px-2 dark:bg-[#252945]">
      <div className="invoice-date flex flex-col gap-2">
        <p className="text-sm font-bold text-medium-gray">Invoice Date</p>
        <h1 className="font-bold dark:text-white">{activeInvoice.createdAt}</h1>
      </div>

      <div className="bill-to flex flex-col ">
        <p className="text-sm font-bold text-medium-gray">Bill to</p>
        <h1 className="font-bold  dark:text-white">
          {activeInvoice.clientName}
        </h1>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.street}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.city}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.postCode}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.clientAddress.country}
        </p>
      </div>
      <div className="payment-due flex flex-col gap-2 col-span-2 md:col-span-1 md:order-4">
        <p className="text-sm font-bold text-medium-gray">Payment Due</p>
        <h1 className="font-bold  dark:text-white">
          {activeInvoice.paymentDue}
        </h1>
      </div>
      <div className="sent-to flex flex-col gap-2">
        <p className="text-sm font-bold text-medium-gray">Sent to</p>
        <h1 className="font-bold  dark:text-white">
          {activeInvoice.clientEmail}
        </h1>
      </div>
    </section>
  )
}
