import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout = () => {
    logOut();
  };
  const Navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
              : 'hover:text-[#FF497C]'
          }
        >
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/artAndCraft"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
              : 'hover:text-[#FF497C]'
          }
        >
          <span> About</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCraft"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
              : 'hover:text-[#FF497C]'
          }
        >
          <span>Sevice</span>
        </NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                : 'hover:text-[#FF497C]'
            }
          >
            <span> Bookings</span>
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/myCraft"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
              : 'hover:text-[#FF497C]'
          }
        >
          <span>Blog</span>
        </NavLink>
        {/* <Link to="/myCart">My Added Product</Link> */}
      </li>
      <li>
        <NavLink
          to="/myCraft"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
              : 'hover:text-[#FF497C]'
          }
        >
          <span>Contact</span>
        </NavLink>
        {/* <Link to="/myCart">My Added Product</Link> */}
      </li>
    </>
  );

  return (
    <div>
      <div className="max-w-[1920px] mx-auto mt-5">
        <header className="bg-white shadow-lg  flex w-full dark:bg-[#120505]  ">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navitems}
            </ul>
          </div>
          <Link
            to="/"
            className=" flex flex-shrink-0 items-center  md:w-[280px] w-[150px] "
          >
            <img
              className=" md:w-[280px] w-full lg:h-[70px] h-[40px]  "
              src={logo}
              alt=""
            />
          </Link>
          {/* middle */}
          <nav className="header-links md:contents font-medium text-base  hidden ">
            <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-white">
              {Navitems}
            </ul>
          </nav>

          {/* End */}
          <div className="  flex items-center  justify-end w-full md:w-auto lg:w-72  ">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            {user ? (
              <Link
                className="btn bg-[#FF3811] text-white"
                onClick={handleSignout}
              >
                SignOut
              </Link>
            ) : (
              <div className="flex justify-center items-center pl-2">
                <Link
                  to={'/login'}
                  onClick=""
                  className="btn bg-[#FF3811] text-white"
                >
                  LogIn
                </Link>
              </div>
            )}

            <Link className="btn bg-[#FA8072] text-white">Appointment</Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
