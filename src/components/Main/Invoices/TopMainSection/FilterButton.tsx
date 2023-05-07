import arrowdown from "../../../../../public/assets/icon-arrow-down.svg"

type FilterButtonProps = {
  isFilterListOpen: boolean
  handleToggleFilterList: any
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  isFilterListOpen,
  handleToggleFilterList,
}) => {
  return (
    <button
      className="filter flex items-center justify-between gap-4 md:whitespace-nowrap"
      onClick={handleToggleFilterList}
    >
      
      <h1 className="font-bold text-lg dark:text-white whitespace-nowrap">
        Filter{" "}
        <span className="hidden md:block whitespace-nowrap">by status</span>
      </h1>
      {!isFilterListOpen ? (
        <img src={arrowdown} alt="arrowdown" className="w-4 duration-100" />
      ) : (
        <img src={arrowdown} alt="arrowdown" className="w-4 rotate-180 duration-100" />
      )}
    </button>
  )
}
