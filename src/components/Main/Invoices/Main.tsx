import React from "react"
import { TopMainSection } from "./TopMainSection/TopMainSection"
import EmptyBoard from "./EmptyBoardContent/EmptyBoard"
import InvoiceList from "./InvoiceList/InvoiceList"

const Main = () => {
  return (
    <main className="xl:py-20 xl:px-52">
      <TopMainSection />
      <InvoiceList />
      {/* <EmptyBoard /> */}
    </main>
  )
}

export default Main
