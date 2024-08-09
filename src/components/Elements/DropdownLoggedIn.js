import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../../services";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const DropdownLoggedIn = ({ setDropdown }) => {

    const Navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUser();
                data.email ? setUser(data) : handleLogout();
            } catch (error) {
                toast.error(error.message, { closeButton: true, position: "bottom-center" });
            }
        }
        fetchData();
    }, [])   // eslint-disable-line

    function handleLogout() {
        logout();
        setDropdown(false);
        Navigate("/");
    }

    return (
        <div className="select-none absolute top-10 right-3 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
           
                    <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                        <div className="font-medium truncate">{user.email}</div>
                    </div>
       

            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                    <Link onClick={() => (setDropdown(false))} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link onClick={() => (setDropdown(false))} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
            </ul>
            <div>
                <div onClick={handleLogout} className="text-sm py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log Out</div>
            </div>

        </div>
    )
}
