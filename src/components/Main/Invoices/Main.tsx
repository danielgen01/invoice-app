import React from "react"
import { TopMainSection } from "./TopMainSection/TopMainSection"
import InvoiceList from "./InvoiceList/InvoiceList"

const Main = () => {
  return (
    <main className="xl:py-20 xl:px-52">
      <TopMainSection />
      <InvoiceList />
    </main>
  )
}

export default Main
