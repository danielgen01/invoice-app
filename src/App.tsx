import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Invoices/Main"
import "./index.css"
import Sidebar from "./components/Main/Invoices/Sidebar/Sidebar"
import DeleteDialog from "./Redux/slices/DeleteDialog/DeleteDialog"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="APP bg-[#F8F8FB] dark:bg-[#141625] min-h-screen min-w-screen">
      <div className="navbar xl:hidden">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
      <div className="sidebar hidden xl:block">
        <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
      <Main />
      <DeleteDialog />
    </div>
  )
}

export default App
