import React from "react"
import InvoiceRow from "../../../Reusable/InvoiceRow"
import { RootState } from "../../../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../../../Redux/store"

const InvoiceList = () => {
  const data = useAppSelector((state: RootState) => state.data.Data)

  console.log(data)

  return (
    <section className="invoice-list rows flex flex-col items-center mt-10 gap-6">
      {data.map((invoice) => (
        <InvoiceRow key={invoice.id}
         invoiceId={invoice.id}
         paymentDue={invoice.paymentDue}
         totalAmount={invoice.total}
         clientName={invoice.clientName}
         status={invoice.status}
         />
      ))}
    </section>
  )
}

export default InvoiceList
