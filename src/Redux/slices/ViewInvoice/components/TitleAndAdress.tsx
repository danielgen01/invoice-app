import { RootState } from "../../../rootReducer"
import { useAppSelector } from "../../../store"

export function TitleAndAdress() {
  const activeInvoice = useAppSelector(
    (state: RootState) => state.data.activeInvoice
  )

  return (
    <section className="invoice-title-and-adress grid grid-cols-1 md:grid-cols-2 w-full gap-5 px-2 dark:bg-[#252945]">
      <div className="invoice-num-and-name">
        <h1 className="font-bold  dark:text-white">#{activeInvoice.id}</h1>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.description}
        </p>
      </div>
      <div className="adress-bill-from flex flex-col md:items-end">
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.street}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.city}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.postCode}
        </p>
        <p className="text-sm text-medium-gray font-bold">
          {activeInvoice.senderAddress.country}
        </p>
      </div>
    </section>
  )
}
