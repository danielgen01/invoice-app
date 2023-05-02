import React from "react"

const InvoiceRow = () => {
  return (
    <>
      <div className="row h-40 bg-white shadow-lg rounded-lg dark:bg-[#1E2139]  w-[90%]">
        <div className="content px-5 py-5 grid grid-cols-2 justify-between w-full">
          {/* FIRST GRID COL */}
          <section className="first-grid-item flex flex-col gap-5">
            <h1 className="font-bold uppercase">
              <span className="text-[#7e88C3]">#</span>
              rrr
            </h1>
            <p className="text-medium-gray font-bold whitespace-nowrap text-sm">
              Due 19 August 2021
            </p>
            <h2 className="font-bold">€ 2.000,00</h2>
          </section>
          {/* SECOND GRID COL */}
          <section className="second-grid-item flex flex-col items-end gap-10 ">
            <p className="text-medium-gray font-bold ">Jensen huang</p>
            <div className="status flex items-center bg-green-500/10 px-10 py-4 rounded-xl gap-2">
              <div className="status-batch w-3 h-3 bg-green-500 rounded-full"></div>
              <h1 className="text-green-500 font-bold">Paid</h1>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default InvoiceRow
