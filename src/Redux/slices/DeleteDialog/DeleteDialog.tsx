import React from "react"
import { RootState } from "../../rootReducer"
import { useAppDispatch, useAppSelector } from "../../store"
import { toggleDeleteInvoiceForm } from "./DeleteDialogSlice"
import { deleteInvoice } from "../Data/DataSlice"
import { useNavigate } from "react-router-dom"

const DeleteDialog: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isDeleteFormOpen = useAppSelector(
    (state: RootState) => state.deleteInvoice.isDeleteInvoiceFormOpen
  )

  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  const handleToggleDeleteInvoiceForm = () => {
    dispatch(toggleDeleteInvoiceForm())
  }

  const handleDeleteInvoiceClick = () => {
    dispatch(deleteInvoice(activeInvoice.id))
    handleToggleDeleteInvoiceForm()
    navigate("/") 
  }

  return (
    <>
      <div
        className="overlay fixed top-0 left-0 h-screen w-screen
     bg-black/60 "
        style={{ display: isDeleteFormOpen ? "block" : "none" }}
      ></div>
      <div
        className=" bg-white dark:bg-[#252945]
    w-72 md:w-96 xl:w-[25%] h-52 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
        style={{ display: isDeleteFormOpen ? "block" : "none" }}
      >
        <div className="dialog-content py-8 px-5 w-full">
          <h1 className="font-bold text-2xl dark:text-white">
            Confirm Deletion
          </h1>
          <p className="text-medium-gray mt-2">
            Are you sure you want to dele invoice ""? This action cannot be
            undone.
          </p>
          <div
            className="buttons gap-10 flex flex-row xl:mt-5
             pl-auto w-full justify-end"
          >
            <button
              className="bg-[#F8F8FB] px-6 py-3 rounded-full
              font-bold text-[#9277FF] dark:bg-[#1E2139] dark:text-[#DFE3FA]"
              onClick={handleToggleDeleteInvoiceForm}
            >
              Cancel
            </button>
            <button
              className="bg-[#EC5757] px-6 py-3 rounded-full
               font-bold text-white"
              onClick={handleDeleteInvoiceClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteDialog
