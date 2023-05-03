import React from "react"

type props = {
  invoiceId: string
  paymentDue: string
  totalAmount: number
  clientName: string
  status: string
}

const InvoiceRow: React.FC<props> = ({
  invoiceId,
  paymentDue,
  totalAmount,
  clientName,
  status,
}) => {

  let batchColor: string

  switch (status) {
    case "paid":
      batchColor = "green-500"
      break
    case "pending":
      batchColor = "orange-500"
      break
    case "draft":
      batchColor = "white"
      break
    default:
      batchColor = "gray-500"
  }

  return (
    <>
      <div className="row h-40 bg-white shadow-lg rounded-lg dark:bg-[#1E2139]  w-[90%]">
        <div className="content px-5 py-5 grid grid-cols-2 justify-between w-full">
          {/* FIRST GRID COL */}
          <section className="first-grid-item flex flex-col gap-5">
            <h1 className="font-bold uppercase dark:text-white">
              <span className="text-[#7e88C3]">#</span>
              {invoiceId}
            </h1>
            <p className="text-medium-gray font-bold whitespace-nowrap text-sm">
              {paymentDue}
            </p>
            <h2 className="font-bold dark:text-white">€ {totalAmount}</h2>
          </section>
          {/* SECOND GRID COL */}
          <section className="second-grid-item flex flex-col items-end gap-10 ">
            <p className="text-medium-gray font-bold ">{clientName}</p>
            <div
              className="status flex items-center
             bg-green-500/10 w-28 justify-center py-4 rounded-xl gap-2"
            >
              <div className={`status-batch w-3 h-3 bg-${batchColor} rounded-full`}></div>
              <h1 className={`text-${batchColor} font-bold`}>{status}</h1>
              
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default InvoiceRow
