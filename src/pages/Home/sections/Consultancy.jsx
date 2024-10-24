import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

function Consultancy() {
  return (
    <section className="w-full bg-yellow-500">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-black md:text-4xl">
            Get Free Consultancy
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0 md:space-x-8">
          {/* Phone Number */}
          <div className="flex items-center space-x-2 text-lg text-black md:text-2xl">
            <IoCallSharp className="text-2xl md:text-3xl" />
            <span><b>(800) 880-4109</b></span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 text-lg text-black md:text-2xl">
            <MdAttachEmail className="text-2xl md:text-3xl" />
            <span><b>hello@AKCLinkTech.com</b></span>
          </div>

          {/* Button */}
          <div className="mt-4 md:mt-0">
            <button
              type="button"
              className="px-10 py-3 text-lg font-medium text-white bg-black rounded-lg md:text-xl hover:bg-yellow-800 focus:outline-none focus:bg-yellow-600"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultancy;
