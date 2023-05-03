import React from "react"
import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
import deleteicon from "../../../../public/assets/icon-delete.svg"
import iconplus from "../../../../public/assets/icon-plus.svg"

const NewInvoiceDialog = () => {
  return (
    <main className="px-5 py-5 New Invoice Modal flex flex-col gap-6">
      <button className="go-back-button flex items-center gap-5">
        <img src={arrowleft} alt="goback" className="w-2" />
        <h1 className="font-bold">Go back</h1>
      </button>
      <h1 className="mt-5 font-bold text-2xl New-invoice-headline">
        New Invoice
      </h1>

      <BillFromForm />
      <BillToForm />
      <InvoiceInfo />
      <section className="flex flex-col gap-6 Itemlist">
        <h1 className="font-bold text-medium-gray text-xl ">Item List</h1>

        <ItemNameForm />
        <ItemNameForm />
        <button className="flex items-center justify-center gap-2 bg-[#DFE3FA] py-3 rounded-full">
          <img src={iconplus} alt="add" />
          <span className="font-bold text-[#9277FF]">Add new Item</span>
        </button>
      </section>
    </main>
  )
}

export default NewInvoiceDialog

function BillFromForm() {
  return (
    <>
      <h2 className="font-bold text-[#7C5DFA] ">Bill from </h2>
      <form className="flex-col flex gap-5 mt-4">
        <label
          htmlFor="street-adress"
          className="text-medium-gray font-bold text-sm"
        >
          Street Adress
        </label>
        <input
          type="text"
          name="street-adress"
          id="street-adress"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
        <div className="city-and-postcode flex items-center justify-between w-full">
          <div className="city flex flex-col gap-2">
            <label
              htmlFor="city"
              className="text-medium-gray font-bold text-sm"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="font-bold h-12 rounded-md border-medium-gray/50 border-2 w-40 outline-none"
            />
          </div>

          <div className="postcode flex flex-col gap-2">
            <label
              htmlFor="postcode"
              className="text-medium-gray font-bold text-sm"
            >
              Post Code
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="font-bold h-12 rounded-md border-medium-gray/50 border-2 w-40 outline-none"
            />
          </div>
        </div>
        <label htmlFor="country" className="text-medium-gray font-bold text-sm">
          Country
        </label>
        <input
          type="text"
          name="country"
          id="country"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
      </form>
    </>
  )
}

function BillToForm() {
  return (
    <>
      <h2 className="font-bold text-[#7C5DFA]">Bill To </h2>

      <form className="flex-col flex gap-5 mt-4">
        <label
          htmlFor="clientsName"
          className="text-medium-gray font-bold text-sm"
        >
          Client's Name
        </label>
        <input
          type="text"
          name="clientsName"
          id="clientsName"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
        <label
          htmlFor="clientsEmail"
          className="text-medium-gray font-bold text-sm"
        >
          Client's Email
        </label>
        <input
          type="text"
          name="clientsEmail"
          id="clientsEmail"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
        <label
          htmlFor="street-adress"
          className="text-medium-gray font-bold text-sm"
        >
          Street Adress
        </label>
        <input
          type="text"
          name="street-adress"
          id="street-adress"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
        <div className="city-and-postcode flex items-center justify-between w-full">
          <div className="city flex flex-col gap-2">
            <label
              htmlFor="city"
              className="text-medium-gray font-bold text-sm"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="font-bold h-12 rounded-md border-medium-gray/50 border-2 w-40 outline-none"
            />
          </div>

          <div className="postcode flex flex-col gap-2">
            <label
              htmlFor="postcode"
              className="text-medium-gray font-bold text-sm"
            >
              Post Code
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="font-bold h-12 rounded-md border-medium-gray/50 border-2 w-40 outline-none"
            />
          </div>
        </div>
        <label htmlFor="country" className="text-medium-gray font-bold text-sm">
          Country
        </label>
        <input
          type="text"
          name="country"
          id="country"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
      </form>
    </>
  )
}

function InvoiceInfo() {
  return (
    <>
      <form className="flex-col flex gap-5 mt-4">
        <label
          htmlFor="clientsName"
          className="text-medium-gray font-bold text-sm"
        >
          Invoice Date
        </label>
        <input
          type="date"
          name="Invoicedate"
          id="Invoicedate"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
        <label
          htmlFor="paymentterms"
          className="text-medium-gray font-bold text-sm"
        >
          Payment Terms
        </label>
        <input
          type="text"
          name="paymentterms"
          id="paymentterms"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
        <label
          htmlFor="projectdescription"
          className="text-medium-gray font-bold text-sm"
        >
          Project Description
        </label>
        <input
          type="text"
          name="projectdescription"
          id="projectdescription"
          className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
        />
      </form>
    </>
  )
}

function ItemNameForm() {
  return (
    <>
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
        className="font-bold h-12 rounded-md border-medium-gray/50 border-2 px-4 outline-none"
      />
      <div className="quantity-price-total-delete flex items-center gap-5  w-full ">
        <div className="city flex flex-col gap-2">
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
            className="font-bold h-12 rounded-md border-medium-gray/50 border-2 w-20 outline-none"
          />
        </div>

        <div className="price flex flex-col gap-2">
          <label htmlFor="price" className="text-medium-gray font-bold text-sm">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="font-bold h-12 rounded-md border-medium-gray/50 border-2 w-20 outline-none"
          />
        </div>
        <div className="total flex flex-col  gap-5">
          <label htmlFor="total" className="text-medium-gray font-bold text-sm">
            Total
          </label>
          <p className="font-bold text-medium-gray">200.00</p>
        </div>
        <div className="delete ml-auto mt-6">
          <img src={deleteicon} alt="delete" className="w-4 " />
        </div>
      </div>
    </>
  )
}
