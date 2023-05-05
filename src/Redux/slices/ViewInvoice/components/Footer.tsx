import React from "react"

type FooterProps = {
  handleToggleEditInvoiceForm: () => void
  handleToggleDeleteInvoiceForm: () => void
  changeStatusToPaid: () => void
}
export const Footer: React.FC<FooterProps> = ({
  handleToggleEditInvoiceForm,
  handleToggleDeleteInvoiceForm,
  changeStatusToPaid,
}) => {
  return (
    <footer className="block md:hidden bg-white  mt-20 dark:bg-[#1E2139]">
      <div className="footer-content px-5 py-5 flex justify-between items-center">
        <button
          className="md:hidden  w-20 h-10 bg-[#F8F8FB] rounded-full text-[#9277FF] font-bold dark:bg-[#252945] dark:text-medium-gray"
          onClick={handleToggleEditInvoiceForm}
        >
          Edit
        </button>
        <button
          className="md:hidden  w-20 h-12 bg-[#EC5757] rounded-full text-white font-bold hover:bg-[rgb(255,151,151)]"
          onClick={handleToggleDeleteInvoiceForm}
        >
          Delete
        </button>
        <button
          className="md:hidden w-32 h-12  bg-[#7C5DFA] rounded-full text-white font-bold
             hover:bg-[#9277FF]"
          onClick={changeStatusToPaid}
        >
          Mark as Paid
        </button>
      </div>
    </footer>
  )
}
