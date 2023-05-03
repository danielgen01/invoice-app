import React from "react"
import arrowRight from "../../../public/assets/icon-arrow-right.svg"

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
      batchColor = "gray-500"
      break
    default:
      batchColor = "gray-500"
  }

  return (
    <>
      <div className="row h-40 bg-white shadow-md rounded-lg dark:bg-[#1E2139]  w-[90%] xl:h-20">
        <div className="content px-5 py-5 grid grid-cols-2 justify-between w-full xl:items-center">
          {/* FIRST GRID COL */}
          <section className="first-grid-item flex flex-col gap-5 xl:flex-row xl:items-center   xl:gap-28 2xl:gap-32 ">
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
          <section className="second-grid-item flex flex-col items-end gap-10 xl:flex-row xl:items-center xl:justify-end">
            <p className="text-medium-gray font-bold ">{clientName}</p>
            <div
              className="status flex items-center
             bg-green-500/10 w-28 justify-center py-4 rounded-xl gap-2"
            >
              <div className={`status-batch w-3 h-3 bg-${batchColor} rounded-full`}></div>
              <h1 className={`text-${batchColor} font-bold`}>{status}</h1>
            </div>
            <img src={arrowRight} alt="" className="hidden xl:block w-4 "/>
          </section>
        </div>
      </div>
    </>
  )
}

export default InvoiceRow
