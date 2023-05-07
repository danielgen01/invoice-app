import React from "react"
import "./Checkbox.css"

type checkboxProps = {
  title: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<checkboxProps> = ({ title }) => {
  return (
    <div>
      <label className="check gap-10 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="check-task"
          id="check-task"
          className="w-6 h-6 rounded-md bg-gray-300 border-2 border-transparent focus:border-[#7C5CDA] focus:ring-transparent opacity-0 absolute cursor-pointer"
          onChange={()=>{console.log("Changed")}}
        />
        <div className="w-6 h-6 rounded-md bg-gray-300 border-2 border-transparent hover:border-[#7C5CDA] flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white absolute opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="font-bold text-md dark:text-white">{title}</p>
      </label>
    </div>
  )
}

export default CheckBox
