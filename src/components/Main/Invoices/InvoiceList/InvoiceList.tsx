import React from "react"
import InvoiceRow from "../../../Reusable/InvoiceRow"
import { RootState } from "../../../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../../../Redux/store"

const InvoiceList = () => {
  const filteredData = useAppSelector(
    (state: RootState) => state.data.filteredData
  )

  return (
    <section className="invoice-list rows flex flex-col items-center mt-10 gap-6">
      {filteredData.map((invoice) => (
        <InvoiceRow
          key={invoice.id}
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
