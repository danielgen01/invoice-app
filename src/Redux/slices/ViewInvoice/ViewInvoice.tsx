import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import { BsCircleFill } from "react-icons/bs"
const ViewInvoice = () => {
  return (
    <>
      <div className="overlay"> </div>
      <main className="content px-5 py-5">
        <button
          className="go-back-button flex items-center gap-5 "
          //   onClick={handleToggleNewInvoiceForm}
        >
          <img src={arrowleft} alt="goback" className="w-2" />
          <h1 className="font-bold dark:text-white">Go back</h1>
        </button>
        <StatusBox />
        <div className="invoice-box bg-white min-h-[300px] mt-5 shadow-md rounded-xl">
          <div className="invoice-details-content px-5 py-5">
            <TitleAndAdress />
            <section className="grid grid-cols-2 mt-4 gap-2 md:grid-cols-3">
              <div className="invoice-date flex flex-col gap-2">
                <p className="text-sm font-bold text-medium-gray">
                  Invoice Date
                </p>
                <h1 className="font-bold ">21 Aug 2021</h1>
              </div>

              <div className="bill-to flex flex-col ">
                <p className="text-sm font-bold text-medium-gray">Bill to</p>
                <h1 className="font-bold ">Alex Grim</h1>
                <p className="text-sm text-medium-gray font-bold">
                  84 Church Way
                </p>
                <p className="text-sm text-medium-gray font-bold">Brodford</p>
                <p className="text-sm text-medium-gray font-bold">BD 32 9FB</p>
                <p className="text-sm text-medium-gray font-bold">
                  United Kingdom
                </p>
              </div>
              <div className="payment-due flex flex-col gap-2 col-span-2 md:col-span-1 md:order-4">
                <p className="text-sm font-bold text-medium-gray">
                  Payment Due
                </p>
                <h1 className="font-bold ">21 Sep 2021</h1>
              </div>
              <div className="sent-to flex flex-col gap-2">
                <p className="text-sm font-bold text-medium-gray">Sent to</p>
                <h1 className="font-bold ">alexgrim@gmail.com</h1>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default ViewInvoice

function StatusBox() {
  return (
    <div className="status-box h-24 bg-white dark:bg-[#252945] shadow-md mt-5 rounded-xl">
      <div className="status-box-content px-2 py-7  grid grid-cols-2 md:grid-cols-5 md:gap-2">
        <h1 className="font-bold text-medium-gray">Status</h1>
        <div className="status-box flex gap-4 items-center bg-orange-500/20 justify-center w-[80%] py-2 rounded-md">
          <BsCircleFill className="text-orange-500 text-sm" />
          <p className="text-orange-500 font-bold text-sm">Pending</p>
        </div>

        <button className="hidden md:block  py-3 bg-[#F8F8FB] rounded-full text-[#9277FF] font-bold">
          Edit
        </button>
        <button className="hidden md:block  py-3 bg-[#EC5757] rounded-full text-white font-bold">
          Delete
        </button>
        <button className="hidden md:block  py-3 bg-[#7C5DFA] rounded-full text-white font-bold">
          Mark as Paid
        </button>
      </div>
    </div>
  )
}

function TitleAndAdress() {
  return (
    <section className="invoice-title-and-adress grid grid-cols-1 md:grid-cols-2 w-full gap-5">
      <div className="invoice-num-and-name">
        <h1 className="font-bold ">#XM9124</h1>
        <p className="text-sm text-medium-gray font-bold">Graphic Design</p>
      </div>
      <div className="adress-bill-from flex flex-col md:items-end">
        <p className="text-sm text-medium-gray font-bold">19 Union Terrace</p>
        <p className="text-sm text-medium-gray font-bold">London</p>
        <p className="text-sm text-medium-gray font-bold">E1 3EZ</p>
        <p className="text-sm text-medium-gray font-bold">United Kingdom</p>
      </div>
    </section>
  )
}
