import React from "react";
import { Link } from "react-router-dom";
import FruitBasketIcon from "../assets/fruitbasketicon.png";

const NavBar = () => {
  return (
    <nav className="font-Roboto text-center bg-gradient-to-r from-orange-400 to-red-400 px-2 sm:px-4 py-2.5 dark:bg-black-800">
      <div className="flex space-between justify-between items-center md:flex flex-col">
        <div className="hidden:md ">
          <a href="/" className="flex items-center">
            <img
              src={FruitBasketIcon}
              alt="fruitbasket"
              className="h-10 w-10"
            />
            <span className="text-center text-xl font-extrabold whitespace-nowrap pl-2 text-white">
              FruityCounter
            </span>
          </a>
        </div>

        {/* MOBILE MENU */}
        <div className="w-full hidden:md block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block my-1 rounded md:bg-transparent md:p-0 text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block my-1 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block my-1 text-white rounded md:bg-transparent md:p-0"
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
