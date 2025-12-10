import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className=" bg-black">
      <footer className="footer sm:footer-horizontal p-8 text-white w-11/12 mx-auto">
        <aside>
          <Link className="flex items-center gap-1">
            <img src="/logo.png" alt="" className="w-13" />
            <h1 className="text-3xl font-bold">
              Loan<span className="text-red-500">Link</span>
            </h1>
          </Link>
           <p>Copyright © {new Date().getFullYear()} - All right reserved <br /> by Livelink.com</p>
          <div className="flex items-center gap-5 mt-3 md:ml-5">
            <a className="link link-hover">
              <FaFacebook size={25} />
            </a>
            <a className="link link-hover">
              <FaYoutube size={25} />
            </a>
            <a className="link link-hover">
              <RiInstagramFill size={25} />
            </a>
            <a className="link link-hover">
              <FaXTwitter size={25} />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Link</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Loans</a>
          <a className="link link-hover">Apply Loan</a>
          <a className="link link-hover">My Loans</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Home Purchase Loan</a>
          <a className="link link-hover">Car Loan</a>
          <a className="link link-hover">Wedding Loan</a>
          <a className="link link-hover">Property Loan</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover">+1 667-255-0899</a>
          <a className="link link-hover">loan@link.com</a>
          <a className="link link-hover">
            20 Cooper Square, <br /> New York, NY 10003, USA
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
