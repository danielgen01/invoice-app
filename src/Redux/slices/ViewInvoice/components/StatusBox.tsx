import { BsCircleFill } from "react-icons/bs"
import { RootState } from "../../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../../store"
import { toggleEditInvoiceForm } from "../../EditInvoice/EditInvoiceSlice"
import { toggleDeleteInvoiceForm } from "../../DeleteDialog/DeleteDialogSlice"
import { updateActiveInvoiceStatus } from "../../Data/DataSlice"

export const StatusBox = () => {
  const dispatch = useAppDispatch()

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const changeStatusToPaid = () => {
    dispatch(updateActiveInvoiceStatus("paid"))
  }

  const handleToggleEditInvoiceForm = () => {
    dispatch(toggleEditInvoiceForm())
  }

  const handleToggleDeleteInvoiceForm = () => {
    dispatch(toggleDeleteInvoiceForm())
  }

  const getStatusClasses = (status: string) => {
    const lowerCaseStatus = status.toLowerCase()
    switch (lowerCaseStatus) {
      case "pending":
        return { bg: "bg-orange-100", text: "text-orange-500" }
      case "paid":
        return { bg: "bg-green-100", text: "text-green-500" }
      case "draft":
        return { bg: "bg-white", text: "text-black" }
      default:
        return { bg: "bg-gray-100", text: "text-gray-500" }
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
          className={`status-box flex gap-4 items-center justify-center w-[80%] py-2 rounded-md ${statusBgColor}`}
        >
          <BsCircleFill className={`text-sm ${statusTextColor}`} />
          <p className={`font-bold text-sm capitalize ${statusTextColor}`}>
            {activeInvoice.status}
          </p>
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
