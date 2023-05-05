import React from "react"

type ButtonsProps = {
  handleAddInvoice: () => void
  handleToggleNewInvoiceForm: () => void
}
export const FooterButtons: React.FC<ButtonsProps> = ({
  handleAddInvoice,
  handleToggleNewInvoiceForm,
}) => {
  return (
    <div className="bg-white h-20 dark:bg-[#1E2139] mt-10 md:-mt-5">
      <div className="footer-content-buttons flex items-center  justify-between w-full h-full px-4">
        <button
          className="text-[#9277FF] font-bold bg-[#DFE3FA] w-20 py-3 rounded-full dark:text-white dark:bg-[#252945]"
          onClick={handleToggleNewInvoiceForm}
        >
          Discard
        </button>
        <button
          className="text-medium-gray font-bold bg-[#252945] w-28 h-14
             rounded-full dark:bg-[#888EB0] dark:text-white"
        >
          Save as Draft
        </button>
        <button
          className="text-white font-bold bg-[#7C5DFA] w-28 h-14 rounded-full hover:bg-[#9277FF]"
          onClick={handleAddInvoice}
        >
          Save & Send
        </button>
      </div>
    </div>
  )
}
export default FooterButtons
