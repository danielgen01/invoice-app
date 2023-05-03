import React from "react"

const DeleteDialog = () => {
  return (
    <>
      <div
        className="overlay fixed top-0 left-0 h-screen w-screen
     bg-black/60 "
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#252945]
    w-[90%] h-52 absolute top-1/2 left-1/2 rounded-xl"
        >
          <div className="dialog-content py-8 px-5 w-full">
            <h1 className="font-bold text-2xl dark:text-white">Confirm Deletion</h1>
            <p className="text-medium-gray mt-2">Are you sure you want to dele invoice 
            <br/> ""? This action cannot be undone.</p>
            <div className="buttons gap-10 flex flex-row mt-5 pl-auto w-full">
              <button className="bg-[#F8F8FB] px-6 py-3 rounded-full
              font-bold text-[#9277FF] dark:bg-[#1E2139] dark:text-[#DFE3FA]">
                Cancel
              </button>
              <button className="bg-[#EC5757] px-6 py-3 rounded-full
               font-bold text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteDialog
