import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut } from "../index";
import { DropdownLoggedIn } from "../index";
import { useCart } from "../../context";


export const Header = () => {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  const [search, setSearch] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const {cartList} = useCart();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="dark:bg-slate-800">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">

        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">

          <Link to="/" className="flex items-center ">
            <img src={Logo} className="h-10" alt="TechEbook Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-serif hidden sm:block">TechEbook</span>
          </Link>

          <div className="flex items-center relative">

            <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>

            <span onClick={()=>setSearch(!search)} className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>

            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="cursor-pointer text-3xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute bg-rose-500 -top-1 left-4 px-1 rounded-full">{cartList.length}</span>
              </span>
            </Link>

            <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span>
            {dropdown && ( token ? <DropdownLoggedIn setDropdown={setDropdown}/> : <DropdownLoggedOut setDropdown={setDropdown}/>) }
          </div>
        </div>
      </nav>
      {search && <Search setSearch={setSearch}/>}
    </header>
  )
}
