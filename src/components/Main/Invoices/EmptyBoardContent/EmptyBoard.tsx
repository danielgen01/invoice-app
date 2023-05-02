import React from "react"
import emptyicon from "../../../../../public/assets/illustration-empty.svg"

const EmptyBoard = () => {
  return (
    <section className="-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute flex flex-col gap-10 mt-14">
      <img src={emptyicon} alt="emptyicon" className="h-52" />
      <h1 className="font-bold text-2xl whitespace-nowrap dark:text-white">
        There is nothing here
      </h1>
      <p className="font-semibold text-medium-gray">
        Create an invoice by clicking the{" "}
        <span className="text-[#7E88C3] font-bold">New </span>
         button and get started
      </p>
    </section>
  )
}

export default EmptyBoard
