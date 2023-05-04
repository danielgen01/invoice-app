import React from "react"
import ItemNameForm from "./ItemNameForm"

type ItemListProps = {
  removeItem: any

  setItemForms: any

  addItem: any
  iconplus: any
  itemForms: any
}

export const ItemList: React.FC<ItemListProps> = ({
  removeItem,

  setItemForms,

  addItem,
  iconplus,
  itemForms,
}) => {
  return (
    <section
      className="flex flex-col gap-2 Itemlist 
        overflow-y-scroll h-60"
    >
      <h1 className="font-bold text-medium-gray text-xl ">Item List</h1>

      {itemForms.map((item: any) => (
        <ItemNameForm
          key={item.id}
          id={item.id}
          removeItem={removeItem}
          itemData={item}
          setItemData={(updatedItemData: any) =>
            setItemForms(
              itemForms.map((itemForm: any) =>
                itemForm.id === item.id ? updatedItemData : itemForm
              )
            )
          }
        />
      ))}
      <button
        className="flex items-center justify-center gap-2
         bg-[#DFE3FA] py-3 rounded-full dark:bg-[#1E2139]"
        onClick={addItem}
      >
        <img src={iconplus} alt="add" />
        <span className="font-bold text-[#9277FF] dark:text-white">
          Add new Item
        </span>
      </button>
    </section>
  )
}
export default ItemList
