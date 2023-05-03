import React from "react";
import Chef from "./../../pages/chef/Chef";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar sticky top-3 md:p-5 bbg-slate-300	text-white text-2xl container mx-auto bg-[#660000] rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#660000] rounded-box w-52"
            >
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Our Chefs
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-[#660000]">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <Link to={`/`} className="btn btn-ghost normal-case text-2xl">
            <img
              src="https://res.cloudinary.com/ddez9nchs/image/upload/v1683142652/Thai-Chef/spoon.png"
              className="h-7 pr-2"
            ></img>
            Thai Chef
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Our Chefs
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#660000]">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`/pages/blog`}>Blog</Link>
            </li>
            <li>
              <Link to={`/pages/contact`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1">
              Members Area
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#660000] rounded-box"
            >
              <li>
                <Link to={`/pages/login`}>Login</Link>
              </li>
              <li>
                <Link to={`/pages/register`}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
