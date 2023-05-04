import arrowleft from "../../../../public/assets/icon-arrow-left.svg"
type props = {
  handleToggleNewInvoiceForm: () => void
}

const GoBackButton: React.FC<props> = ({ handleToggleNewInvoiceForm }) => {
  return (
    <>
      <button
        className="go-back-button flex items-center gap-5 md:hidden "
        onClick={handleToggleNewInvoiceForm}
      >
        <img src={arrowleft} alt="goback" className="w-2" />
        <h1 className="font-bold">Go back</h1>
      </button>
      <h1 className="mt-5 font-bold text-2xl New-invoice-headline">
        New Invoice
      </h1>
    </>
  )
}
export default GoBackButton
