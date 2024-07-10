import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">TechEbook</Link>. All Rights Reserved.</span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://www.linkedin.com/in/tanya-bharti-/" target="_blank" rel="noreferrer" className="text-gray-500 sm:text-center hover:text-black dark:text-gray-400 dark:hover:text-white text-xl bi bi-linkedin">
          </a>

          <a href="https://github.com/Tanya-101" target="_blank" rel="noreferrer"
          className="text-gray-500 sm:text-center hover:text-black dark:text-gray-400 dark:hover:text-white text-xl bi bi-github">
          </a>

          <a href="/" target="_blank" className="text-gray-500 sm:text-center hover:text-black dark:text-gray-400 dark:hover:text-white  text-xl bi bi-instagram">
          </a>
        </div>
      </div>
    </footer>
  )
}
