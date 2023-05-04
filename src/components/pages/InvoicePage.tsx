import React from "react"
import { useParams } from "react-router-dom"
import ViewInvoice from "../../Redux/slices/ViewInvoice/ViewInvoice"

const ViewInvoicePage: React.FC = () => {
  const { invoiceId } = useParams<{ invoiceId: string }>()

  return <ViewInvoice invoiceId={invoiceId} />
}

export default ViewInvoicePage
