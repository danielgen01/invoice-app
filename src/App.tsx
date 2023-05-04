import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Invoices/Main"
import "./index.css"
import Sidebar from "./components/Main/Invoices/Sidebar/Sidebar"
import DeleteDialog from "./Redux/slices/DeleteDialog/DeleteDialog"
import NewInvoiceDialog from "./Redux/slices/NewInvoice/NewInvoiceDialog"
import EditInvoiceDialog from "./Redux/slices/EditInvoice/EditInvoice"
import ViewInvoice from "./Redux/slices/ViewInvoice/ViewInvoice"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ViewInvoicePage from "./components/pages/InvoicePage"

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
    <Router>
      <div className="APP bg-[#F8F8FB] dark:bg-[#141625] min-h-screen min-w-screen">
        <Routes>
          <Route
            path="/invoice/:invoiceId"
            element={
              <div>
                <ViewInvoicePage />
                {/* <DeleteDialog /> */}
                 <EditInvoiceDialog />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <div className="navbar xl:hidden">
                  <Navbar
                    toggleDarkMode={toggleDarkMode}
                    isDarkMode={isDarkMode}
                  />
                </div>
                <div className="sidebar hidden xl:block">
                  <Sidebar
                    toggleDarkMode={toggleDarkMode}
                    isDarkMode={isDarkMode}
                  />
                </div>
                <Main />
                <NewInvoiceDialog />
                

               
                
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
