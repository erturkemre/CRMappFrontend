import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, ChevronLeft, Home, ListChecks, MenuIcon, Settings, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-y-0 left-0 bg-sky-900 p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-[calc(100%-10px)]"
        } w-64 md:relative md:translate-x-0 z-50 flex-shrink-0`}
        style={{ width: isOpen ? '16rem' : 'auto' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-row justify-between items-center mb-4">
            {isOpen? <div className="text-white text-lg font-bold">CRM Dashboard</div>:("")}
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
                {isOpen?  (<ChevronLeft className="w-5 h-5" />) : (
                <MenuIcon className="w-5 h-5" />
              )}
              
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-white flex-grow">
            <li>
              <Link to="/" className="flex flex-row gap-2 hover:text-gray-300">
                <Home/>   {isOpen? ("Home"):("")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="flex flex-row gap-2 hover:text-gray-300">
                 <User/>       {isOpen? ("Contacts"):("")}
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="flex flex-row gap-2 hover:text-gray-300">
                <ListChecks/> {isOpen? ("Task"):("")}
              </Link>
            </li>
            <li>
              <Link to="/reports" className="flex flex-row gap-2 hover:text-gray-300">
                 <BarChart/>   {isOpen? ("Reports"):("")}
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex flex-row gap-2 hover:text-gray-300">
              <Settings/> {isOpen? ("Settings"):("")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
