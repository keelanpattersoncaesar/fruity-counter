import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="font-Roboto text-center bg-gradient-to-r from-orange-400 to-red-400 px-2 sm:px-4 py-2.5 rounded dark:bg-black-800">
      <div className="container flex flex-wrap justify-between items-center ">
        <a href="/" className="flex items-center">
          <img
            src="https://i.ibb.co/mXvc7Ym/basket-edited-edited-1.png"
            alt="fruitbasket"
            className="h-10 w-10"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            FruityCounter
          </span>
        </a>

        {/* MOBILE MENU */}
        <div className="w-full hidden:md block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pr-2 pl-2 rounded md:bg-transparent md:p-0 text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pr-2 pl-2 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pr-2 pl-2 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
