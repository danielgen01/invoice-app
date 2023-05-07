import React, { useEffect } from "react"
import InvoiceRow from "../../../Reusable/InvoiceRow"
import { RootState } from "../../../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../../../Redux/store"
import { resetFilter } from "../../../../Redux/slices/Data/DataSlice"

const InvoiceList = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state: RootState) => state.data.Data)

  const filteredData = useAppSelector(
    (state: RootState) => state.data.filteredData
  )
  useEffect(() => {
    dispatch(resetFilter())
  }, [data, dispatch])

  console.log(data)

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
