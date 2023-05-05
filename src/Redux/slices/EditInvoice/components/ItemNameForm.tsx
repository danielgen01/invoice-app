import React from "react"
import deleteicon from "../../../../../public/assets/icon-delete.svg"

type ItemNameProps = {
  defaultValueName: string
  defaultValueQuantity: number
  defaultValuePrice: number
  defaultValueTotal: number
}
export const ItemNameForm: React.FC<ItemNameProps> = ({
  defaultValueName,
  defaultValueQuantity,
  defaultValuePrice,
  defaultValueTotal,
}) => {
  return (
    <form className="grid items-center gap-5   grid-cols-2  md:grid-cols-5 ">
      <div className="item-name flex flex-col col-span-4 md:col-span-1">
        <label
          htmlFor="item-name"
          className="text-medium-gray font-bold text-sm mt-6"
        >
          Item Name
        </label>
        <input
          type="text"
          name="item-name"
          id="item-name"
          className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
          defaultValue={defaultValueName}
        />
      </div>

      <div className="quantity flex flex-col mt-5">
        <label
          htmlFor="quantity"
          className="text-medium-gray font-bold text-sm"
        >
          Qty.
        </label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-20 outline-none dark:bg-[#1E2139]"
          defaultValue={defaultValueQuantity}
        />
      </div>

      <div className="price flex flex-col mt-4">
        <label htmlFor="price" className="text-medium-gray font-bold text-sm">
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-20 outline-none dark:bg-[#1E2139]"
          defaultValue={defaultValuePrice}
        />
      </div>
      <div className="total flex flex-col  gap-5">
        <label htmlFor="total" className="text-medium-gray font-bold text-sm">
          Total
        </label>
        <p className="font-bold text-medium-gray">{defaultValueTotal}</p>
      </div>
      <div className="delete ml-auto md:ml-0 mt-6">
        <img src={deleteicon} alt="delete" className="w-4 " />
      </div>
    </form>
  )
}
