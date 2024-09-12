import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-y-0 left-0 bg-sky-900 p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 md:relative md:translate-x-0 z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-white text-lg font-bold">CRM Dashboard</div>
            <button
              className="text-white md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-white flex-grow">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-gray-300">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="hover:text-gray-300">
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-gray-300">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-gray-300">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
