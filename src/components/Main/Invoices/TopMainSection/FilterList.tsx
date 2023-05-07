type filterListProps = {
  isFilterListOpen: boolean
  handleToggleFilterList: any
}
export const FilterList: React.FC<filterListProps> = ({
  isFilterListOpen,
  handleToggleFilterList,
}) => {
  return (
    <>
      <div
        className="absolute top-52 xl:top-40 bg-white shadow-md min-w-[200px] min-h-[150px] rounded-lg"
        style={{ display: isFilterListOpen ? "block" : "none" }}
      >
        <div
          className="dialog-content px-5 py-5 flex flex-col gap-2"
          style={{ display: isFilterListOpen ? "flex" : "none" }}
        >
          <CheckBox title="Draft" />
          <CheckBox title="Pending" />
          <CheckBox title="Paid" />
        </div>
      </div>
    </>
  )
}

type checkboxProps = {
  title: string
}

const CheckBox: React.FC<checkboxProps> = ({ title }) => {
  return (
    <button className="check  gap-10 flex items-center">
      <input type="checkbox" />
      <p className="font-bold">{title}</p>
    </button>
  )
}
