import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Invoices/Main"
import "./index.css"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="APP bg-[#F8F8FB] dark:bg-[#141625] min-h-screen min-w-screen">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Main />
    </div>
  )
}

export default App
