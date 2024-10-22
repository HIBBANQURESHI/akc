import React, { useState } from 'react';
import bgImg from '../../assets/img/hero-special-banner.jpg'; // Import your image

const HeroService = ({ heading, description, primaryButtonText, secondaryButtonText, primaryButtonLink, secondaryButtonLink, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center gap-8 md:gap-x-16 px-0 p-8 text-white bg-gray-800 bg-center bg-cover md:flex-row md:p-16"
      style={{ backgroundImage: `url(${bgImg})` , paddingLeft:'0',paddingRight:'0' }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0  bg-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-md md:ml-24 text-center md:max-w-lg md:text-left">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">{heading}</h1>
        <p className="mb-6 text-base md:text-lg">{description}</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* Primary Button - Toggles Modal */}
          <button 
            onClick={toggleModal} 
            className="inline-block w-full px-4 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-lg hover:bg-black hover:text-yellow-500 md:w-auto md:px-6 md:py-3 md:text-lg"
          >
            {primaryButtonText}
          </button>
          
          {/* Secondary Button */}
          <a 
            href={secondaryButtonLink} 
            className="inline-block w-full px-4 py-2 text-sm font-semibold md:w-auto md:px-6 md:py-3 md:text-lg  text-yellow-400 bg-transparent rounded-lg hover:bg-yellow-400 hover:text-black"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Image Section - Hidden on small screens */}
      <div className="relative z-10 hidden mt-10 ml-20 md:block md:ml-8">
        <img 
          src={imageUrl} 
          alt="Vector" 
          className="w-150 h-150"  
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white border-black rounded-lg shadow dark:bg-gray-700 w-full max-w-md p-4">
            {/* Modal header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Please Fill the Form
              </h3>
              <button onClick={toggleModal} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <form className="mt-4">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" id="name" className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black" placeholder="Type product name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                  <input type="email" id="email" className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black" placeholder="example@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input type="email" id="phone" className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black" placeholder="xxxx-xxxxxxx" required />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-900 dark:text-white">Is this a RE-design or a New logo</label>
                  <select id="category" className="w-full p-2 border rounded-lg dark:bg-gray-600  dark:border-gray-500 dark:placeholder-gray-400 tect-black">
                    
                    <option value="redisgn" className='text-black'>Re-design</option>
                    <option value="newlogo" className='text-black'>New Logo</option>
                    
                  </select>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-900 dark:text-white">Existing website if any</label>
                  <input type="text" id="website" className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-black" placeholder="www.example.com" required />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="4" className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Write product description here"></textarea>
                </div>
              </div>
              <button type="submit" className="mt-4 w-full px-4 bg-yellow-400  py-2 text-white bg-blue-600 rounded-lg hover:bg-yellow-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroService;