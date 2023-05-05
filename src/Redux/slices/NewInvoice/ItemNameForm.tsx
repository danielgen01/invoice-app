import deleteicon from "../../../../public/assets/icon-delete.svg"

export type itemNameFormProps = {
  id: number
  removeItem: (id: number) => void
  itemData: any
  setItemData: any
}
export const ItemNameForm: React.FC<itemNameFormProps> = ({
  id,
  removeItem,
  itemData,
  setItemData,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof itemData
  ) => {
    setItemData({ ...itemData, [field]: e.target.value })
  }

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
          className="dark:bg-[#1E2139] font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2
           px-4 outline-none focus:border-[#7C5DFA]"
          value={itemData.name}
          onChange={(e) => handleInputChange(e, "name")}
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
          className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-20 outline-none
           dark:bg-[#1E2139] focus:border-[#7C5DFA]"
          value={itemData.quantity}
          onChange={(e) => handleInputChange(e, "quantity")}
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
          className="font-bold h-12  xl:h-10 rounded-md border-medium-gray/50 border-2 w-20 outline-none 
          dark:bg-[#1E2139] focus:border-[#7C5DFA]"
          value={itemData.priuce}
          onChange={(e) => handleInputChange(e, "price")}
        />
      </div>
      <div className="total flex flex-col  gap-5">
        <label htmlFor="total" className="text-medium-gray font-bold text-sm">
          Total
        </label>
        <p className="font-bold text-medium-gray">
          € {itemData.quantity * itemData.price}
        </p>
      </div>
      <button
        className="delete ml-auto md:ml-0 mt-6"
        onClick={() => removeItem(id)}
      >
        <img src={deleteicon} alt="delete" className="w-4 " />
      </button>
    </form>
  )
}

export default ItemNameForm