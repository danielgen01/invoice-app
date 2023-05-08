import React from "react"
import Logo from "../../../../../public/assets/logo.svg"
import moon from "../../../../../public/assets/icon-moon.svg"
import avatar from "../../../../../public/assets/image-avatar.jpg"
import sun from "../../../../../public/assets/icon-sun.svg"

type props = {
  toggleDarkMode: () => void
  isDarkMode: boolean
}
const Sidebar: React.FC<props> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <>
      <aside className="text-6xl w-24 h-screen bg-[#252945] fixed">
        <div className="nav-content flex flex-col justify-between items-center pb-10 h-full">
          <figure className="logo flex justify-center items-center bg-[#7C5DFA] w-32 -ml-8 rounded-3xl h-24">
            <img src={Logo} alt="Logo" className="" />
          </figure>
          <section className="moon-and-avatar  flex flex-col gap-10 items-center">
            <figure className="moon">
              {isDarkMode ? (
                <img
                  src={sun}
                  alt="sun"
                  className="w-8 cursor-pointer"
                  onClick={toggleDarkMode}
                />
              ) : (
                <img
                  src={moon}
                  alt="moon"
                  className="w-8 cursor-pointer"
                  onClick={toggleDarkMode}
                />
              )}
            </figure>
            <div className="border border-x  border-[#888EB0]  w-20"></div>
            <figure className="avatar">
              <img src={avatar} alt="" className="rounded-full w-12 h-12" />
            </figure>
          </section>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
