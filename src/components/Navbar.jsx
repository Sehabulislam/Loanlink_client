import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
// import { AuthContext } from "../context/AuthProvider";
// import { toast } from "react-toastify";
import { FiMoon } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import logo from "../assets/logo.png"

const Navbar = () => {
//   const { user, setUser, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };
//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         setUser(null);
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2 text-red-500" : "text-gray-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/allLoans"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2 text-red-500" : "text-gray-500"
        }
      >
        All Loans
      </NavLink>
      <NavLink
        to={"/addProperties"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2 text-red-500" : "text-gray-500"
        }
      >
       Apply Loan
      </NavLink>
      <NavLink
        to={"/myRatings"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        My Loans
      </NavLink>
      
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 text-2xl shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="flex items-center gap-1">
            <img src='/logo.png' alt="" className="w-11"/>
            <h1 className="text-3xl font-bold">Loan<span className="text-red-500">Link</span></h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <label className="flex cursor-pointer gap-2">
            <FaSun size={22} />
            <input
              type="checkbox"
            //   onChange={(e) => handleTheme(e.target.checked)}
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle theme-controller"
            />
            <FiMoon size={22} />
          </label>

          {/* {user ? ( */}
            {/* <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://st2.depositphotos.com/3336339/8196/i/450/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-60 p-2 shadow gap-3"
              >
                <li className="text-xl font-bold">{user?.displayName}</li>
                <li className="font-semibold text-wrap">{user?.email}</li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-soft btn-error hover:text-white"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : ( */}
              <Link
                to={"/login"}
                className="btn bg-red-500 px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all"
              >
                Login
              </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
