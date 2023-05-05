import React from "react"
import { BsCircleFill } from "react-icons/bs"
import { RootState } from "../../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../../store"
import { toggleEditInvoiceForm } from "../../EditInvoice/EditInvoiceSlice"
import { toggleDeleteInvoiceForm } from "../../DeleteDialog/DeleteDialogSlice"

export const StatusBox = () => {
  const dispatch = useAppDispatch()

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const changeStatusToPaid = () => {
    activeInvoice.status = "Paid"
    console.log(activeInvoice.status)
  }

  const handleToggleEditInvoiceForm = () => {
    dispatch(toggleEditInvoiceForm())
  }

  const handleToggleDeleteInvoiceForm = () => {
    dispatch(toggleDeleteInvoiceForm())
  }

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Pending":
        return { bg: "bg-orange-500", text: "text-orange-900" }
      case "Paid":
        return { bg: "bg-green-500", text: "text-green-900" }
      case "Draft":
        return { bg: "bg-white", text: "text-black" }
      default:
        return { bg: "bg-gray-500", text: "text-gray-900" }
    }
  }

  const { bg: statusBgColor, text: statusTextColor } = getStatusClasses(
    activeInvoice.status
  )

  return (
    <div className="status-box h-24 bg-white dark:bg-[#252945] shadow-md mt-5 rounded-xl">
      <div className="status-box-content px-2 py-7  grid grid-cols-2 md:grid-cols-5 md:gap-2">
        <h1 className="font-bold text-medium-gray capitalize">
          {activeInvoice.status}
        </h1>
        <div
          className={`status-box flex gap-4 items-center justify-center w-[80%] py-2 rounded-md ${statusBgColor} ${statusTextColor}`}
        >
          <BsCircleFill className="text-sm" />
          <p className="font-bold text-sm capitalize">{activeInvoice.status}</p>
        </div>

        <button
          className="hidden md:block  py-3 bg-[#F8F8FB] rounded-full text-[#9277FF] font-bold"
          onClick={handleToggleEditInvoiceForm}
        >
          Edit
        </button>
        <button
          className="hidden md:block  py-3 bg-[#EC5757] rounded-full text-white font-bold hover:bg-[rgb(255,151,151)]"
          onClick={handleToggleDeleteInvoiceForm}
        >
          Delete
        </button>
        <button
          className="hidden md:block  py-3 bg-[#7C5DFA] 
        rounded-full text-white font-bold hover:bg-[#9277FF]"
          onClick={changeStatusToPaid}
        >
          Mark as Paid
        </button>
      </div>
    </div>
  )
}
