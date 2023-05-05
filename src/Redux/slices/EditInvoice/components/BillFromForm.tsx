import React from "react"

type BillFromProps = {
  activeInvoice: any
}

export const BillFromForm: React.FC<BillFromProps> = 
({ activeInvoice }) => {
  return (
    <>
      <h2 className="font-bold text-[#7C5DFA] ">Bill from </h2>
      <form className="flex-col flex gap-5 xl:gap-0 mt-4 ">
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
          className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 
          rounded-md border-medium-gray/50 border-2 px-4
           outline-none focus:border-[#7C5DFA]"
           defaultValue={activeInvoice.senderAddress.street}
        />
        <div className="city-and-postcode grid grid-cols-2 md:grid-cols-3 items-center justify-between w-full">
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
              className="font-bold h-12  xl:h-10 rounded-md
               border-medium-gray/50 border-2 w-40 outline-none
                dark:bg-[#1E2139] px-2 focus:border-[#7C5DFA]"
              defaultValue={activeInvoice.senderAddress.city}
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
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40
               outline-none dark:bg-[#1E2139] px-2 focus:border-[#7C5DFA]"
              defaultValue={activeInvoice.senderAddress.postCode}
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
              className="dark:bg-[#1E2139] font-bold h-12  xl:h-10  px-2 rounded-md border-medium-gray/50 border-2
                outline-none w-full md:w-auto focus:border-[#7C5DFA]"
              defaultValue={activeInvoice.senderAddress.country}
            />
          </div>
        </div>
      </form>
    </>
  )
}
