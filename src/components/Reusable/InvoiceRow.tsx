import React from "react"
import arrowRight from "../../../public/assets/icon-arrow-right.svg"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { Link } from "react-router-dom"
import { BsCircleFill } from "react-icons/bs"
import {
  setActiveInvoice,
} from "../../Redux/slices/Data/DataSlice"
import { RootState } from "../../Redux/rootReducer"

type props = {
  invoiceId: string
  paymentDue: string
  totalAmount: number
  clientName: string
  status: string
}

const getBatchColorClass = (status: string) => {
  switch (status) {
    case "paid":
      return "text-green-500"
    case "pending":
      return "text-orange-500"
    case "draft":
      return "text-black dark:text-white"
    default:
      return "text-gray-500/90"
  }
}

const InvoiceRow: React.FC<props> = ({
  invoiceId,
  paymentDue,
  totalAmount,
  clientName,
  status,
}) => {
  const data = useAppSelector((state: RootState) => state.data.Data)
  const dispatch = useAppDispatch()

  const batchColorClass = getBatchColorClass(status)



  const handleSetActiveInvoice = (invoiceId: any) => {
    const invoice = data.find((invoice) => invoice.id === invoiceId)
    if (invoice) {
      dispatch(setActiveInvoice(invoice))
    }
  }

  

  return (
    <Link
      to={`/invoice/${invoiceId}`}
      onClick={() => handleSetActiveInvoice(invoiceId)}
    >
      <div
        className="row h-40  bg-white shadow-md rounded-lg
       dark:bg-[#1E2139]  w-[300px] md:w-[800px] xl:w-[900px] 
       md:h-20 cursor-pointer  lg:hover:border-[#7C5DFA]
        lg:hover:border-2"
      >
        <div className="content px-5 py-5 grid grid-cols-2 justify-between w-full md:items-center">
          {/* FIRST GRID COL */}
          <section className="first-grid-item flex flex-col gap-5 md:flex-row md:items-center md:gap-20  xl:gap-28 2xl:gap-32 ">
            <h1 className="font-bold uppercase dark:text-white">
              <span className="text-[#7e88C3]">#</span>
              {invoiceId}
            </h1>
            <p className="text-medium-gray font-bold whitespace-nowrap text-sm">
              {paymentDue}
            </p>
            <h2 className="font-bold dark:text-white whitespace-nowrap">
              € {totalAmount}
            </h2>
          </section>
          {/* SECOND GRID COL */}
          <section className="second-grid-item flex flex-col items-end gap-10 md:flex-row md:items-center md:justify-end">
            <p className="text-medium-gray font-bold  whitespace-nowrap">
              {clientName}
            </p>
            <div
              className={`status flex items-center
  bg-green-500/10 w-28 justify-center py-4 rounded-xl gap-2`}
            >
              <BsCircleFill className={`text-sm ${batchColorClass}`} />
              <h1 className={`${batchColorClass} font-bold capitalize`}>
                {status}
              </h1>
            </div>

            <img src={arrowRight} alt="" className="hidden xl:block w-4 " />
          </section>
        </div>
      </div>
    </Link>
  )
}

export default InvoiceRow
