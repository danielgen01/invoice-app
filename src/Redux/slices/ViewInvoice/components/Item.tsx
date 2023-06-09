import { RootState } from "../../../rootReducer"
import { useAppSelector } from "../../../store"

export function Item() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  return (
    <>
      {activeInvoice &&
        activeInvoice.items.map((item, index) => (
          <>
            <div className="flex flex-col gap-2 " key={index}>
              <h1 className="font-bold dark:text-white">{item.name}</h1>
              <p className="font-bold text-medium-gray text-sm md:hidden">
              {Number(item.quantity)} x € {Number(item.price)}
              </p>
            </div>
            <div className="quantity hidden md:flex justify-center">
              <h1 className="font-bold text-medium-gray text-lg">
              {Number(item.quantity)}
              </h1>
            </div>
            <div className="price hidden md:block ">
              <h1 className="font-bold text-medium-gray text-lg ">
              € {Number(item.price)}
              </h1>
            </div>
            <div className="flex justify-end total">
              <h1 className="font-bold dark:text-white">
              € {Number(item.quantity) * Number(item.price)}
              </h1>
            </div>
          </>
        ))}
    </>
  )
}
