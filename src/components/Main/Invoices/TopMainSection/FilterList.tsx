import CheckBox from "./CheckBox"
import { useAppSelector } from "../../../../Redux/store"
import { RootState } from "../../../../Redux/rootReducer"

type filterListProps = {
  isFilterListOpen: boolean
  handleToggleFilterList: any
}
export const FilterList: React.FC<filterListProps> = ({
  isFilterListOpen,
  handleToggleFilterList,
}) => {
  const data = useAppSelector((state: RootState) => state.data.Data)

  return (
    <>
      <div
        className="absolute top-52 xl:top-40 bg-white dark:bg-[#1E2139] shadow-md min-w-[200px] min-h-[150px] rounded-lg"
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
