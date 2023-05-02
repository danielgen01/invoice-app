import arrowdown from "../../../../../public/assets/icon-arrow-down.svg"
import plus from "../../../../../public/assets/icon-plus.svg"

export function TopMainSection() {
  return (
    <section className="mt-10 xl:mt-0">
      <div className="top-content flex justify-between items-center px-2 ">
        <div className="invoices flex flex-col gap-1">
          <h1 className="font-bold text-2xl dark:text-white">Invoices</h1>
          <p className="text-medium-gray font-bold dark:text-white">
            No invoices
          </p>
        </div>
        <section className="buttons flex items-center gap-4 xl:gap-20">
          <button className="filter flex items-center gap-4 xl:whitespace-nowrap">
            <h1 className="font-bold text-lg dark:text-white xl:whitespace-nowrap">
              Filter <span className="hidden xl:block">by status</span>
             
            </h1>
            <img src={arrowdown} alt="arrowdown" className="w-4" />
          </button>
          <button className="bg-[#7C5DFA] px-4 py-2 flex  text-white items-center gap-2 rounded-full font-bold text-xl">
            <img
              src={plus}
              alt=""
              className="bg-white px-4 py-4 rounded-full"
            />
            New <span className="hidden xl:block">Invoice</span>
          </button>
        </section>
      </div>
    </section>
  )
}
