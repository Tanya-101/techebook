import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({setSearch}) => {

    const navigate = useNavigate();
    const searchRef = useRef();

    const handleSearch = (event) =>{
        event.preventDefault();
        navigate(`/products?q=${searchRef.current.value}`)
        setSearch(false);
    }

    return (
        <div className="px-3 py-1 mt-8 mx-1 dark:bg-slate-800">
            <form onSubmit={handleSearch}>
                <div className="flex items-center justify-between">
                    <input ref={searchRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="search" id="simple-search"
                    placeholder="Search" autoComplete="off"
                    required="" />
                    <button type="submit" className="bg-blue-600 text-white ml-2 py-2 px-3 rounded text-sm dark:text-white bi bi-search"></button>
                </div>
            </form>
        </div>
    )
}
