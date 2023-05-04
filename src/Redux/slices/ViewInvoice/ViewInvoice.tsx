import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import { BsCircleFill } from "react-icons/bs"

const ViewInvoice = () => {
  return (
    <>
      <div className="overlay"> </div>
      <body className="content px-5 py-5 xl:px-72 lg:py-10">
        <button
          className="go-back-button flex items-center gap-5 "
          //   onClick={handleToggleNewInvoiceForm}
        >
          <img src={arrowleft} alt="goback" className="w-2" />
          <h1 className="font-bold dark:text-white">Go back</h1>
        </button>
        <StatusBox />
        <div className="invoice-box bg-white  mt-5 shadow-md rounded-xl dark:bg-[#252945]">
          <section className="invoice-details-content md:py-10">
            <TitleAndAdress />
            <InvoiceInfos />
            <section className="price-overview bg-[#F8F8FB] w-full min-h-[300px] mt-4 rounded-xl">
              <div className="headline hidden md:grid md:grid-cols-4 px-5 bg-[#252945] ">
                <h1 className="font-bold text-medium-gray">Item Name</h1>
                <h1 className="font-bold text-medium-gray flex justify-center">
                  Qty.
                </h1>
                <h1 className="font-bold text-medium-gray ml-7">Price</h1>
                <h1 className="flex justify-end font-bold text-medium-gray">
                  Total
                </h1>
              </div>
              <ul className="content-item-list px-6 py-6 grid grid-cols-2 w-full gap-5 md:grid-cols-4 dark:bg-[#252945]">
                <Item />
                <Item />
                <Item />
              </ul>
              <TotalBox />
            </section>
          </section>
        </div>
        <footer className="block md:hidden bg-white  mt-20 dark:bg-[#1E2139]">
          <div className="footer-content px-5 py-5 flex justify-between items-center">
            <button className="md:hidden  w-20 h-10 bg-[#F8F8FB] rounded-full text-[#9277FF] font-bold dark:bg-[#252945] dark:text-medium-gray">
              Edit
            </button>
            <button className="md:hidden  w-20 h-12 bg-[#EC5757] rounded-full text-white font-bold">
              Delete
            </button>
            <button className="md:hidden w-32 h-12  bg-[#7C5DFA] rounded-full text-white font-bold">
              Mark as Paid
            </button>
          </div>
        </footer>
      </body>
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
    <section className="invoice-title-and-adress grid grid-cols-1 md:grid-cols-2 w-full gap-5 px-2 dark:bg-[#252945]">
      <div className="invoice-num-and-name">
        <h1 className="font-bold  dark:text-white">#XM9124</h1>
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

function InvoiceInfos() {
  return (
    <section className="grid grid-cols-2 pt-4 gap-2 md:grid-cols-3 px-2 dark:bg-[#252945]">
      <div className="invoice-date flex flex-col gap-2">
        <p className="text-sm font-bold text-medium-gray">Invoice Date</p>
        <h1 className="font-bold dark:text-white">21 Aug 2021</h1>
      </div>

      <div className="bill-to flex flex-col ">
        <p className="text-sm font-bold text-medium-gray">Bill to</p>
        <h1 className="font-bold  dark:text-white">Alex Grim</h1>
        <p className="text-sm text-medium-gray font-bold">84 Church Way</p>
        <p className="text-sm text-medium-gray font-bold">Brodford</p>
        <p className="text-sm text-medium-gray font-bold">BD 32 9FB</p>
        <p className="text-sm text-medium-gray font-bold">United Kingdom</p>
      </div>
      <div className="payment-due flex flex-col gap-2 col-span-2 md:col-span-1 md:order-4">
        <p className="text-sm font-bold text-medium-gray">Payment Due</p>
        <h1 className="font-bold  dark:text-white">21 Sep 2021</h1>
      </div>
      <div className="sent-to flex flex-col gap-2">
        <p className="text-sm font-bold text-medium-gray">Sent to</p>
        <h1 className="font-bold  dark:text-white">alexgrim@gmail.com</h1>
      </div>
    </section>
  )
}

function Item() {
  return (
    <>
      {" "}
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold dark:text-white">Banner Design</h1>
        <p className="font-bold text-medium-gray text-sm md:hidden">
          1 x € 156
        </p>
      </div>
      <div className="quantity hidden md:flex justify-center">
        <h1 className="font-bold text-medium-gray text-lg">1</h1>
      </div>
      <div className="price hidden md:block ">
        <h1 className="font-bold text-medium-gray text-lg ">€ 156.00</h1>
      </div>
      <div className="flex justify-end">
        <h1 className="font-bold dark:text-white">€ 156.00</h1>
      </div>
    </>
  )
}

function TotalBox() {
  return (
    <section className="total-box min-h-[80px] bg-[#1E2139] rounded-b-xl dark:bg-black">
      <div className="total-content py-10 px-10 grid grid-cols-2 text-white ">
        <div className="total-title">
          <h1>Grand Total</h1>
        </div>
        <div className="total-sum flex justify-end  font-bold">
          <h1 className="text-xl">€ 0.00</h1>
        </div>
      </div>
    </section>
  )
}
