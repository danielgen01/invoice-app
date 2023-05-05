export type BillToProps = {
  billToData: any
  setBillToData: any
}
export const BillToForm: React.FC<BillToProps> = ({
  billToData,
  setBillToData,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof billToData
  ) => {
    setBillToData({ ...billToData, [field]: e.target.value })
    console.log(billToData)
  }

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
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50
             border-2 px-4 outline-none focus:border-[#7C5DFA]"
            value={billToData.clientName}
            onChange={(e) => handleInputChange(e, "clientName")}
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
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4
             outline-none focus:border-[#7C5DFA]"
            value={billToData.clientEmail}
            onChange={(e) => handleInputChange(e, "clientEmail")}
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
            className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50
             border-2 px-4 outline-none focus:border-[#7C5DFA]"
            value={billToData.street}
            onChange={(e) => handleInputChange(e, "street")}
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
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40 outline-none 
              dark:bg-[#1E2139] focus:border-[#7C5DFA]"
              value={billToData.city}
              onChange={(e) => handleInputChange(e, "city")}
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
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40 outline-none
               dark:bg-[#1E2139] focus:border-[#7C5DFA]"
              value={billToData.postCode}
              onChange={(e) => handleInputChange(e, "postCode")}
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
              className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50
               border-2 outline-none focus:border-[#7C5DFA]"
              value={billToData.country}
              onChange={(e) => handleInputChange(e, "country")}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default BillToForm
