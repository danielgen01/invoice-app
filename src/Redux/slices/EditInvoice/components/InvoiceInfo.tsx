import React from "react"

export function InvoiceInfo() {
  return (
    <>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        <div className="invoice-date flex flex-col">
          <label
            htmlFor="Invoicedate"
            className="text-medium-gray font-bold text-sm"
          >
            Invoice Date
          </label>
          <input
            type="date"
            name="Invoicedate"
            id="Invoicedate"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
        <div className="payment-terms flex flex-col">
          <label
            htmlFor="paymentterms"
            className="text-medium-gray font-bold text-sm"
          >
            Payment Terms
          </label>
          <input
            type="text"
            name="paymentterms"
            id="paymentterms"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
        <div className="project-description flex flex-col">
          <label
            htmlFor="projectdescription"
            className="text-medium-gray font-bold text-sm"
          >
            Project Description
          </label>
          <input
            type="text"
            name="projectdescription"
            id="projectdescription"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          />
        </div>
      </form>
    </>
  )
}
