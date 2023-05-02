import React from "react"
import InvoiceRow from "../../../Reusable/InvoiceRow"
import { RootState } from "../../../../Redux/rootReducer"
import { useAppDispatch,useAppSelector } from "../../../../Redux/store"

const InvoiceList = () => {

    const data = useAppSelector((state: RootState) => state.data);

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
