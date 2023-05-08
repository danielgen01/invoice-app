import iconplus from "../../../../public/assets/icon-plus.svg"
import { RootState } from "../../rootReducer"
import { useAppSelector, useAppDispatch } from "../../store"
import BillFromForm from "./components/BillFromForm"
import BillToForm from "./components/BillToForm"
import InvoiceInfo from "./components/InvoiceInfoForm"
import GoBackButton from "./components/GoBackButton"
import { FooterButtons } from "./components/FooterButtons"
import { ItemList } from "./components/ItemList"
import { useNewInvoice } from "./useNewInvoice"

const NewInvoiceDialog = () => {
  const dispatch = useAppDispatch()
  // Import states and functions from useNewInvoice
  const {
    billFromData,
    setBillFromData,
    billToData,
    setBillToData,
    invoiceInfoData,
    setInvoiceInfoData,
    itemForms,
    setItemForms,
    handleAddInvoice,
    handleSaveAsDraft,
    handleToggleNewInvoiceForm,
    addItem,
    removeItem,
  } = useNewInvoice()

  // global States

  const isNewInvoiceFormOpen = useAppSelector(
    (state: RootState) => state.newInvoice.isNewInvoiceFormOpen
  )

  return (
    <>
      <div
        className="overlay background fixed top-0 left-0 bg-black/50 
         dark:bg-black/20 w-screen h-screen  md:block cursor-pointer"
        style={{ display: isNewInvoiceFormOpen ? "block" : "none" }}
        onClick={handleToggleNewInvoiceForm}
      ></div>
      <section
        role="dialog"
        className=" New Invoice Modal px-5  py-5  flex flex-col gap-6
         bg-white
       dark:bg-[#0C0E16] dark:text-white 
        md:w-[80%] absolute top-0 md:px-10
         xl:w-[30%] xl:ml-20 xl:max-h-screen xl:gap-0 xl:py-0 
          "
        style={{ display: isNewInvoiceFormOpen ? "block" : "none" }}
      >
        <GoBackButton handleToggleNewInvoiceForm={handleToggleNewInvoiceForm} />

        <BillFromForm
          billFromData={billFromData}
          setBillFromData={setBillFromData}
        />
        <BillToForm billToData={billToData} setBillToData={setBillToData} />
        <InvoiceInfo
          invoiceInfoData={invoiceInfoData}
          setInvoiceInfoData={setInvoiceInfoData}
        />
        <ItemList
          removeItem={removeItem}
          setItemForms={setItemForms}
          addItem={addItem}
          iconplus={iconplus}
          itemForms={itemForms}
        />

        <FooterButtons
          handleAddInvoice={handleAddInvoice}
          handleToggleNewInvoiceForm={handleToggleNewInvoiceForm}
          handleSaveAsDraft={handleSaveAsDraft}
        />
      </section>
    </>
  )
}

export default NewInvoiceDialog
