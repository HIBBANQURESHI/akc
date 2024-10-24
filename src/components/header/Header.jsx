import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import reactLogo from "../../assets/logo/header-logo.png";
import { IoCall } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import "./style.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    console.log(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header style={{ height: "auto" }} className="bg-white shadow-md">
      <div style={{ height: "10vh" }} className="header flex items-center justify-between px-6">
        <div className="flex items-center">
          <Link to="/">
            <img src={reactLogo} alt="AKCLinktech" width="400px" className="mr-3 h-44" style={{ marginBottom: '-23px' }} />
          </Link>

          {/* Upper nav for larger screens */}
          <nav className="fontFamily hidden space-x-6 text-gray-600 md:flex" style={{ fontSize: '15px', fontWeight: '500' }}>
            <Link to="/about-us" className={`hover:text-black ${isActive("/about-us") ? "text-black font-bold" : ""}`} id="button">
              About Us
            </Link>
            <Link to="/contact-us" className={`hover:text-black ${isActive("/contact-us") ? "text-black font-bold" : ""}`} id="button">
              Contact Us
            </Link>
            <Link to="/collabrate-us" className={`hover:text-black ${isActive("/collaborate-us") ? "text-black font-bold" : ""}`} id="button">
              Collaborate With Us
            </Link>
          </nav>
        </div>

        {/* Contact section */}
        <div className="fontFamily items-center hidden space-x-3 md:flex">
          <div className="Num flex py-2 px-3">
            <span className="pr-1 text-xl text-orange-400">
              <IoCall />
            </span>
            <span className="text-sm text-gray-600" style={{ fontSize: '16px', fontWeight: '500' }}>
              Call Us: <span className="font-bold">(832) 278-2818</span>
            </span>
          </div>
          <button className="button-header px-7 py-3 text-white bg-yellow-500 rounded hover:bg-yellow-600" style={{ fontSize: '15px', fontWeight: '500' }}>
            <span>Request a Custom Quote</span>
          </button>
        </div>

        {/* Trigger button for menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? null : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Horizontal menu for small screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.nav
              className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-white p-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-600">
                  <IoIosCloseCircle size={28} />
                </button>
              </div>

              {/* Upper navigation items */}
              <div className="flex flex-col space-y-4 mt-4">
                <Link to="/about-us" className={`hover:text-black ${isActive("/about-us") ? "text-black font-bold" : ""}`}>
                  About Us
                </Link>
                <Link to="/contact-us" className={`hover:text-black ${isActive("/contact-us") ? "text-black font-bold" : ""}`}>
                  Contact Us
                </Link>
                <Link to="/collabrate-us" className={`hover:text-black ${isActive("/collaborate-us") ? "text-black font-bold" : ""}`}>
                  Collaborate With Us
                </Link>
              </div>

              {/* Divider */}
              <hr className="my-4" />

              {/* Lower navigation items */}
              <div className="flex flex-col space-y-4">
                <Link to="/logo-branding" className={`hover:underline ${isActive("/logo-branding") ? "font-bold" : ""}`}>
                  Logo & Branding
                </Link>
                <Link to="/web-design" className={`hover:underline ${isActive("/web-design") ? "font-bold" : ""}`}>
                  Website Design
                </Link>
                <Link to="/printing-&-packaging" className={`hover:underline ${isActive("/printing_&_packaging") ? "font-bold" : ""}`}>
                  Printing & Packaging
                </Link>
                <Link to="/digital-seo" className={`hover:underline ${isActive("/digital-seo") ? "font-bold" : ""}`}>
                  SEO
                </Link>
                <Link to="/mobile" className={`hover:underline ${isActive("/mobile") ? "font-bold" : ""}`}>
                  Mobile Apps
                </Link>
                <Link to="/ecom-experts" className={`hover:underline ${isActive("/ecom-experts") ? "font-bold" : ""}`}>
                  Ecom Experts
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Always show lower nav on larger screens */}
      <div className="hidden md:flex py-3 bg-yellow-500">
        <div className="fontFamily flex flex-wrap justify-center mx-auto space-x-3 text-base text-black font-semibold" id="NavFontAnchor">
          <Link to="/logo-branding" className={`hover:underline ${isActive("/logo-branding") ? "font-bold" : ""}`} id="NavFont">
            Logo & Branding
          </Link>
          <Link to="/web-design" className={`hover:underline ${isActive("/web-design") ? "font-bold" : ""}`} id="NavFont">
            Website Design
          </Link>
          <Link to="/printing-&-packaging" className={`hover:underline ${isActive("/printing_&_packaging") ? "font-bold" : ""}`} id="NavFont">
            Printing & Packaging
          </Link>
          <Link to="/digital-seo" className={`hover:underline ${isActive("/digital-seo") ? "font-bold" : ""}`} id="NavFont">
            SEO
          </Link>
          <Link to="/mobile" className={`hover:underline ${isActive("/mobile") ? "font-bold" : ""}`} id="NavFont">
            Mobile Apps
          </Link>
          <Link to="/ecom-experts" className={`hover:underline ${isActive("/ecom-experts") ? "font-bold" : ""}`} id="NavFont">
            Ecom Experts
          </Link>
        </div>
      </div>
    </header>
  );
}
