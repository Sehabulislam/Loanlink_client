import React from "react";
import { Link, Outlet } from "react-router";
import { CgProfile } from "react-icons/cg";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { RiSidebarUnfoldFill } from "react-icons/ri";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 flex justify-between items-center px-5">
          <div className="flex items-center">
            <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <RiSidebarUnfoldFill size={25} />
          </label>
          <Link to={"/"} className="flex items-center gap-1">
            <img src="/logo.png" alt="" className="w-11 hidden md:block" />
            <h1 className="text-2xl md:text-3xl font-bold">
              Loan<span className="text-red-500">Link</span>
            </h1>
          </Link>
          </div>
          <div>
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="w-10 rounded-full"/>
              </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            <span className="font-semibold">Menu</span>
            {/* List item */}
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Home"
              >
                <FiHome size={25} />
                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link
                to={"myLoans"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Loans"
              >
                <IoDocumentAttachOutline size={25} />
                <span className="is-drawer-close:hidden">My Loans</span>
              </Link>
            </li>
            <li>
              <Link
                to={"myProfile"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
              >
                <CgProfile size={25} />
                <span className="is-drawer-close:hidden">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
