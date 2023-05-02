import Logo from "../../../public/assets/logo.svg"
import moon from "../../../public/assets/icon-moon.svg"
import avatar from "../../../public/assets/image-avatar.jpg"

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="text-6xl h-24 bg-[#252945]">
        <div className="nav-content flex items-center px-4 justify-between">
          <figure className="logo flex justify-center items-center bg-[#7C5DFA] w-28 -ml-8 rounded-3xl h-24">
            <img src={Logo} alt="Logo" className="w-10" />
          </figure>
          <section className="moon-and-avatar  flex items-center gap-10">
            <figure className="moon">
              <img src={moon} alt="moon" className="w-8" />
            </figure>
            <div className="border border-y  border-[#888EB0] h-24"></div>
            <figure className="avatar">
              <img src={avatar} alt="" className="rounded-full w-12 h-12" />
            </figure>
          </section>
        </div>
      </nav>
    </>
  )
}

export default Navbar
