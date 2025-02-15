import React, { useState } from "react";
import Logo from "../assets/Images/jsp.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isDivisionsDropdownOpen, setIsDivisionsDropdownOpen] = useState(false);
  const [isMachinedPartsSubDropdownOpen, setIsMachinedPartsSubDropdownOpen] =
    useState(false);
  const [isMiscellaneousSubDropdownOpen, setIsMiscellaneousSubDropdownOpen] =
    useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsDivisionsDropdownOpen(false);
    setIsMachinedPartsSubDropdownOpen(false);
    setIsMiscellaneousSubDropdownOpen(false);
  };

  return (
    <nav className="navbar sticky top-0 z-20 bg-white shadow-xl">
      <div className="w-full px-4 max-md:px-1">
        <div className="flex justify-between items-center flex-w">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img className="w-28 h-20 max-md:w-24" src={Logo} alt="Logo" />
            <Link
              to="/"
              className="flex items-center py-5 text-[#214fc6]"
              onClick={handleLinkClick}
            >
              <span className="font-bold uppercase text-[25px]">
                JPS Engineers
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/service"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Service
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300">
                Products <MdKeyboardArrowDown />
              </button>
              <div className="absolute hidden  group-hover:block bg-white text-[#214fc6] shadow-lg top-full w-48 pt-2">
                <Link
                  to="/plasticpart"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Plastic Parts
                </Link>
                <Link
                  to="/metalpart"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Metal Parts
                </Link>
                <Link
                  to="/fabrication"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Fabrication
                </Link>
                <Link
                  to="/machine"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Machine Shop
                </Link>
              </div>
            </div>

            {/* Divisions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
                onClick={() =>
                  setIsDivisionsDropdownOpen(!isDivisionsDropdownOpen)
                }
              >
                Divisions <MdKeyboardArrowDown />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-[#214fc6] shadow-lg top-full w-48 pt-2">
                {/* Machined Parts */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsMachinedPartsSubDropdownOpen(true)}
                  onMouseLeave={() => setIsMachinedPartsSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Machined Parts <IoMdArrowDropright size={20} />
                  </span>
                  {isMachinedPartsSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Engineering plastics
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        metal parts
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        micro machining
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/RopewaySolutions"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Ropeways
                </Link>
                <Link
                  to="/SpecialPurposeMachines"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Special Purpose Machines
                </Link>
                {/* Miscellaneous */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsMiscellaneousSubDropdownOpen(true)}
                  onMouseLeave={() => setIsMiscellaneousSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Miscellaneous <IoMdArrowDropright size={20} />
                  </span>
                  {isMiscellaneousSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="/EngineeringPlasticsTrading"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Engineering plastics Trading
                      </Link>
                      <Link
                        to="/fabrication"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        fabrication
                      </Link>
                      <Link
                        to="/ReverseEngineering"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Reverse Engineering
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Link
              to="/newsroom"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Newsroom
            </Link>
            <Link
              to="/contact"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-4xl text-[#214fc6]"
            >
              {isMobileMenuOpen ? "" : <CgMenuRightAlt />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white p-4 text-[#214fc6] w-1/2 transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-4xl text-[#214fc6] absolute top-4 right-4"
        >
          <CgClose />
        </button>
        <div className="flex flex-col space-y-4 mt-16">
          <Link
            to="/"
            onClick={handleLinkClick}
            // className="hover:bg-white hover:text-[#214fc6] p-4"
          >
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/service" onClick={handleLinkClick}>
            Service
          </Link>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="flex items-center justify-between w-full"
            >
              Products <MdKeyboardArrowDown />
            </button>
            {isProductsDropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/plasticpart"
                  onClick={handleLinkClick}
                  className="block"
                >
                  Plastic Parts
                </Link>
                <Link
                  to="/metalpart"
                  onClick={handleLinkClick}
                  className="block"
                >
                  Metal Parts
                </Link>
                <Link
                  to="/fabrication"
                  onClick={handleLinkClick}
                  className="block"
                >
                  Fabrication
                </Link>
                <Link to="/machine" onClick={handleLinkClick} className="block">
                  Machine Shop
                </Link>
              </div>
            )}
          </div>

          {/* Divisions Dropdown */}
          <div>
            <button
              onClick={() =>
                setIsDivisionsDropdownOpen(!isDivisionsDropdownOpen)
              }
              className="flex items-center justify-between w-full"
            >
              Divisions <MdKeyboardArrowDown />
            </button>
            {isDivisionsDropdownOpen && (
              <div className="pl-4">
                <button
                  onClick={() =>
                    setIsMachinedPartsSubDropdownOpen(
                      !isMachinedPartsSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Machined Parts <IoMdArrowDropright size={20} />
                </button>
                {isMachinedPartsSubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/EngineeringPlastics" onClick={handleLinkClick}>
                      Engineering Plastics
                    </Link>
                    <br />
                    <Link to="/metalpart" onClick={handleLinkClick}>
                      Metal Parts
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      Micro Machining
                    </Link>
                  </div>
                )}
                <Link to="/RopewaySolutions" onClick={handleLinkClick}>
                  Ropeways
                </Link>
                <br />
                <Link to="/SpecialPurposeMachines" onClick={handleLinkClick}>
                  Special Purpose Machines
                </Link>
                <button
                  onClick={() =>
                    setIsMiscellaneousSubDropdownOpen(
                      !isMiscellaneousSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Miscellaneous <IoMdArrowDropright size={20} />
                </button>
                {isMiscellaneousSubDropdownOpen && (
                  <div className="pl-4">
                    <Link
                      to="/EngineeringPlasticsTrading"
                      onClick={handleLinkClick}
                    >
                      Engineering Plastics Trading
                    </Link>
                    <br />
                    <Link to="/fabrication" onClick={handleLinkClick}>
                      Fabrication
                    </Link>
                    <br />
                    <Link to="/ReverseEngineering" onClick={handleLinkClick}>
                      Reverse Engineering
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link to="/newsroom" onClick={handleLinkClick}>
            Newsroom
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
