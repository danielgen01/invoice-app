import React, { useRef, useState, useEffect } from "react"
import deleteicon from "../../../../../public/assets/icon-delete.svg"

type ItemNameProps = {
  defaultValueName: string
  defaultValueQuantity: number
  defaultValuePrice: number
  defaultValueTotal: number
  removeItem: any
  id: any
  updateItem: any
}
export const ItemNameForm: React.FC<ItemNameProps> = ({
  defaultValueName,
  defaultValueQuantity,
  defaultValuePrice,
  // defaultValueTotal,
  removeItem,
  id,
  updateItem,
}) => {
  const priceRef = useRef<HTMLInputElement | null>(null)
  const quantityRef = useRef<HTMLInputElement | null>(null)
  const nameRef = useRef<HTMLInputElement | null>(null)

  const [total, setTotal] = useState(0)

  function calculateTotal() {
    const price = parseFloat(priceRef.current?.value || "0")
    const quantity = parseFloat(quantityRef.current?.value || "0")
    setTotal(price * quantity)
  }

  useEffect(() => {
    calculateTotal()
  }, [priceRef.current?.value, quantityRef.current?.value])

  function handleItemChange() {
    const updatedItem = {
      id,
      name: nameRef.current?.value || "",
      quantity: parseFloat(quantityRef.current?.value || "0"),
      price: parseFloat(priceRef.current?.value || "0"),
      total: total,
    }
    updateItem(id, updatedItem)
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
          className="dark:bg-[#1E2139] font-bold h-12  xl:h-10
           rounded-md border-medium-gray/50 border-2 px-4 
           outline-none focus:border-[#7C5DFA]"
          ref={nameRef}
          defaultValue={defaultValueName}
          onChange={handleItemChange}
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
          className="font-bold h-12  xl:h-10 rounded-md
           border-medium-gray/50 border-2 w-20 outline-none
            dark:bg-[#1E2139] focus:border-[#7C5DFA]"
          defaultValue={defaultValueQuantity}
          ref={quantityRef}
          onChange={() => {
            calculateTotal()
            handleItemChange()
          }}
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
          defaultValue={defaultValuePrice}
          ref={priceRef}
          onChange={() => {
            calculateTotal()
            handleItemChange()
          }}
        />
      </div>
      <div className="total flex flex-col  gap-5">
        <label htmlFor="total" className="text-medium-gray font-bold text-sm">
          Total
        </label>
        <p className="font-bold text-medium-gray">{total.toFixed(2)}</p>
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
