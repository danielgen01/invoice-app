import React from "react"
import { Listbox } from "@headlessui/react"
import arrowDown from "../../../../../public/assets/icon-arrow-down.svg"
import { useState } from "react"

type InvoiceInfoProps = {
  activeInvoice: any
  invoiceInfoData: any
  setInvoiceInfoData: any
}

export const InvoiceInfo: React.FC<InvoiceInfoProps> = ({
  activeInvoice,
  invoiceInfoData,
  setInvoiceInfoData,
}) => {
  const paymentTermOptions = [
    {
      label: "Next 1 day",
      value: 1,
    },
    {
      label: "Next 7 days",
      value: 7,
    },
    {
      label: "Next 14 days",
      value: 14,
    },
    {
      label: "Next 30 days",
      value: 30,
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof invoiceInfoData
  ) => {
    setInvoiceInfoData({ ...invoiceInfoData, [field]: e.target.value })
    console.log(invoiceInfoData)
  }

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
            className="dark:bg-[#1E2139] font-bold h-12
              xl:h-10 rounded-md border-medium-gray/50 border-2
               px-4 outline-none focus:border-[#7C5DFA]"
            defaultValue={activeInvoice.createdAt}
            onChange={(e) => handleInputChange(e, "date")}
          />
        </div>
        <div className="payment-terms flex flex-col">
          <label
            htmlFor="paymentterms"
            className="text-medium-gray font-bold text-sm"
          >
            Payment Terms
          </label>
          <Listbox
            value={activeInvoice.paymentTerms}
            onChange={(value) =>
              setInvoiceInfoData({ ...invoiceInfoData, paymentTerms: value })
            }
          >
            <Listbox.Button
              className="dark:bg-[#1E2139] font-bold h-12 xl:h-10 rounded-md border-medium-gray/50
   border-2 px-4 outline-none flex items-center justify-between focus:border-[#7C5DFA]"
            >
              {paymentTermOptions.find(
                (option) => option.value === activeInvoice.paymentTerms
              )?.label || "Choose an option"}
              <img src={arrowDown} />
            </Listbox.Button>
            <Listbox.Options
              className="absolute w-auto 
  mt-20 bg-white dark:bg-[#1E2139]
   rounded-md shadow-lg max-h-60 overflow-auto float-right"
            >
              {paymentTermOptions.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  value={option.value}
                  className={({ active }) => `${
                    active ? "bg-medium-gray/50 dark:bg-opacity-20" : ""
                  }
     hover:bg-medium-gray/50 dark:hover:bg-opacity-20
     px-4 py-2 font-bold text-sm hover:text-[#7C5DFA] hover:cursor-pointer`}
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
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
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 
            outline-none focus:border-[#7C5DFA]"
            defaultValue={activeInvoice.description}
            onChange={(e) => handleInputChange(e, "projectDescription")}
          />
        </div>
      </form>
    </>
  )
}
