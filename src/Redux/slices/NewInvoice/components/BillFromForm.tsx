
type BillFromProps = {
  billFromData: any
  setBillFromData: any
}

const BillFromForm: React.FC<BillFromProps> = ({
  billFromData,
  setBillFromData,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof billFromData
  ) => {
    setBillFromData({ ...billFromData, [field]: e.target.value })
    console.log(billFromData)
  }

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
          className="dark:bg-[#1E2139] font-bold h-12  
           rounded-md border-medium-gray/50 border-2 px-4 outline-none xl:h-10 focus:border-[#7C5DFA]"
          value={billFromData.street}
          onChange={(e) => handleInputChange(e, "street")}
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
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-40 outline-none
               dark:bg-[#252945] focus:border-[#7C5DFA]"
              value={billFromData.city}
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
              className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2
               w-40 outline-none dark:bg-[#252945] focus:border-[#7C5DFA]"
              value={billFromData.postCode}
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
              className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 
               outline-none w-full md:w-auto focus:border-[#7C5DFA]"
              value={billFromData.country}
              onChange={(e) => handleInputChange(e, "country")}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default BillFromForm
  