import React from "react"
import { emptyInvoice } from "../../Data/DataSlice"

type BillToProps = {
  activeInvoice: any
}

export const BillToForm: React.FC<BillToProps> = ({ activeInvoice }) => {
  return (
    <>
      <h2 className="font-bold text-[#7C5DFA]">Bill To </h2>

      <form className="gap-5 mt-4 flex flex-col xl:gap-0">
        <div className="client-name flex flex-col">
          <label
            htmlFor="clientsName"
            className="text-medium-gray font-bold text-sm"
          >
            Client's Name
          </label>
          <input
            type="text"
            name="clientsName"
            id="clientsName"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md
             border-medium-gray/50 border-2 px-4 outline-none"
             defaultValue={activeInvoice.clientName}

          />
        </div>
        <div className="client-mail flex flex-col">
          <label
            htmlFor="clientsEmail"
            className="text-medium-gray font-bold text-sm"
          >
            Client's Email
          </label>
          <input
            type="text"
            name="clientsEmail"
            id="clientsEmail"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
            defaultValue={activeInvoice.clientEmail}

          />
        </div>
        <div className="client-adress flex flex-col">
          <label
            htmlFor="street-adress"
            className="text-medium-gray font-bold text-sm"
          >
            Street Adress
          </label>
          <input
            type="text"
            name="street-adress"
            id="street-adress"
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
            defaultValue={activeInvoice.clientAddress.street}

          />
        </div>

        <div className="city-and-postcode  grid grid-cols-2 md:grid-cols-3 items-center justify-between w-full">
          <div className="city flex flex-col gap-2">
            <label
              htmlFor="city"
              className="text-medium-gray font-bold text-sm"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50
               border-2 w-40 outline-none dark:bg-[#1E2139] px-2"
              defaultValue={activeInvoice.clientAddress.city}

            />
          </div>

          <div className="postcode flex flex-col gap-2">
            <label
              htmlFor="postcode"
              className="text-medium-gray font-bold text-sm"
            >
              Post Code
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="font-bold h-12  xl:h-10 rounded-md
               border-medium-gray/50 border-2 w-40 outline-none 
               dark:bg-[#1E2139] px-2"
              defaultValue={activeInvoice.clientAddress.postCode}

            />
          </div>
          <div className="country flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-medium-gray font-bold text-sm"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="dark:bg-[#1E2139] font-bold h-12 
               xl:h-10 rounded-md border-medium-gray/50 border-2
                outline-none px-2"
              defaultValue={activeInvoice.clientAddress.country}

            />
          </div>
        </div>
      </form>
    </>
  )
}
