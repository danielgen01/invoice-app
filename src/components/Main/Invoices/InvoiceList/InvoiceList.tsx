import React from "react"
import InvoiceRow from "../../../Reusable/InvoiceRow"

const InvoiceList = () => {
  return (
    <section className="invoice-list rows flex flex-col items-center mt-10 gap-6">
        <InvoiceRow />
        <InvoiceRow />

        <InvoiceRow />

        <InvoiceRow />
        <InvoiceRow />
        <InvoiceRow />
        <InvoiceRow />
        <InvoiceRow />
        <InvoiceRow />

    
    </section>
  )
}

export default InvoiceList
