import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logo11 from  '../Images/logo11.jpeg'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 z-0 py-2  w-full h-[6rem] rounded-sm shadow-lg">
        <nav className="flex justify-between items-center max-container">
          <img
            src={logo11}
            alt="_logo"
            className="text-3xl w-[6rem] h-[4rem] rounded-lg font-bold"
          />
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal font-bold hover:text-blue-500 uppercase text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg text-center  leading-normal rounded-lg font-medium font-montserrat max-lg:hidden wide:mr-24">
            <a href="/contact" className="">
              Explore now
            </a>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat font-bold hover:text-blue-500 leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
