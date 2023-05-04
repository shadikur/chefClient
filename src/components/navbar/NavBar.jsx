import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="navbar sticky top-0 md:p-5 bbg-slate-300	text-white text-2xl bg-[#660000]">
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
              <li>
                <Link to={`/pages/chefs`}>Our Chefs</Link>
              </li>
              <li>
                <Link to={`/pages/blog`}>Blog</Link>
              </li>
              <li>
                <Link to={`/pages/contact`}>Contact</Link>
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
            <li>
              <Link to={`/pages/chefs`}>Our Chefs</Link>
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
          {
            // If user is logged in, show logout button, else show login/register buttons
            user ? (
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 rounded-full"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      )
                      <path
                        fillRule="evenodd"
                        d="M10 12a4 4 0 100-8 4 4 0 000 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}

                  <span className="pl-3">{user?.displayName}</span>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#660000] rounded-box"
                >
                  <li>
                    <Link to={`/pages/updateprofile`}>Update Profile</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
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
            )
          }
        </div>
      </div>
    </>
  );
};

export default NavBar;
