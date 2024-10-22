import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ConnectForm = () => {
  return (
    <footer className="py-12 text-white bg-white">
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
        {/* Left Form Section */}
        <div className="w-full px-4 lg:w-1/2">
          <h2 className="mb-6 text-3xl text-black font-bold">Let's create something amazing together.</h2>
          <form className="space-y-4 py-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 text-black bg-white rounded-full outline-none border-2 border-yellow-600"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full px-4 py-3 text-black bg-white rounded-full outline-none border-2 border-yellow-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-black bg-white rounded-full outline-none border-2 border-yellow-600"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 text-black bg-white outline-none rounded-xl border-2 border-yellow-600"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 text-gray-900 transition-all duration-300 bg-yellow-500 rounded-full hover:bg-white hover:text-yellow-500 font-semibold transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Social & Contact Section */}
        <div className="w-full px-48 mt-10 lg:w-1/2 lg:mt-0 ">
          <div className="relative flex flex-col items-center justify-center p-10 space-y-4 bg-yellow-500 rounded-full md:w-[30em] md:h-[30em]">
            {/* "Bitten" effect on the right with slight diagonal rotation */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-yellow-500">
              {/* Adding two bites with some distance */}
              <div className="absolute w-[8em] h-[8em] bg-white rounded-full right-[-2em] top-[6em] rotate-[15deg]"></div>
              <div className="absolute w-[6em] h-[6em] bg-white rounded-full right-[-7em] top-[5em] rotate-[15deg]"></div>
              <div className="absolute w-[5em] h-[5em] bg-white rounded-full right-[-2em] top-[1em] rotate-[15deg]"></div>
              <div className="absolute w-[5.5em] h-[5.5em] bg-white rounded-full right-[-2em] top-[9em] rotate-[15deg]"></div>
            </div>

            {/* Crumbs animation positioned outside the circle in a realistic way */}
            <div className="absolute left-[120%] top-[25%] animate-zoom">
              <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute left-[115%] bottom-[40%] animate-zoom">
              <div className="w-7 h-7 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute left-[96%] bottom-[75%] animate-zoom">
              <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute left-[110%] top-[10%] animate-zoom">
              <div className="w-7 h-7 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute left-[95%] top-[30%] animate-zoom">
              <div className="w-9 h-9 bg-yellow-300 rounded-full"></div>
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-3 gap-4 z-10">
              <Link to="#" className="flex items-center justify-center w-12 h-12 text-white transition bg-black rounded-full hover:bg-white hover:text-black">
                <FaFacebookF size={20} />
              </Link>
              <Link to="#" className="flex items-center justify-center w-12 h-12 text-white transition bg-black rounded-full hover:bg-white hover:text-black">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="flex items-center justify-center w-12 h-12 text-white transition bg-black rounded-full hover:bg-white hover:text-black">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="flex items-center justify-center w-12 h-12 text-white transition bg-black rounded-full hover:bg-white hover:text-black">
                <FaLinkedinIn size={20} />
              </Link>
              <Link to="#" className="flex items-center justify-center w-12 h-12 text-white transition bg-black rounded-full hover:bg-white hover:text-black">
                <FaWhatsapp size={20} />
              </Link>
              <Link to="#" className="flex items-center justify-center w-12 h-12 text-white transition bg-black rounded-full hover:bg-white hover:text-black">
                <FaPhone size={20} />
              </Link>
            </div>

            {/* Contact Details */}
            <div className="mt-6 text-center z-10">
              <p className="text-lg text-white font-semibold">+123-456-789</p>
              <p className="text-lg text-white font-semibold">info@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-zoom {
          animation: zoom 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default ConnectForm;
