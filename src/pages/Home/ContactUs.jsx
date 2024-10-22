import React, { useState } from 'react';
import Layout from '../../layout'
import Banner from './sections/Banner'



const ContactUs = () => {

  const [selectedInterests, setSelectedInterests] = useState([]);

  // List of options for the interests
  const interestsOptions = [
    'A new website',
    'Branding',
    'Motion Graphics',
    'E-Commerce',
    'Development',
    'On-going support',
    'App from scratch',
  ];

  // Function to handle button toggle
  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((selected) => selected !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Interests:', selectedInterests);
    // Process form data here, e.g., send to an API
  };


  return (
    <Layout>
      <Banner/>
      <section className="py-10">
          <div className="max-w-100 flex items-center justify-center mx-auto  px-4 py-10  text-gray-600 overflow-hidden md:px-8 md:flex">



          <div className="flex-1 mt-10 hidden md:block">


              <form class="max-w-100 mim-w-lg mx-auto p-10 ">
                <div class="relative flex justify-center z-0 w-full mb-5 group">
                  <h1 className="font-bold md:text-4xl text-yellow-500">
                  Let's get your project started.
                  </h1>
                </div>

                <div className="mt-24">
      
      

      <div className="mb-5">
      <p className="block text-md font-medium mb-3 text-gray-700 font-semibold">I am interested in:</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {interestsOptions.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`py-2 px-4 border rounded-md font-semibold hover:bg-yellow-400 hover:text-black ${
                  selectedInterests.includes(interest)
                    ? 'bg-yellow-500 text-black font-semibold '
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

    </div>

                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="test"
                    name="floating_email"
                    id="floating_email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    class="font-semibold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_password"
                    id="floating_password"
                    class=" font-semibold block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_password"
                    class="font-semibold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Address
                  </label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_phone"
                      class="font-semibold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contact
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_company"
                      class="font-semibold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company (Ex. Google)
                    </label>
                  </div>
                </div>


                <div class="grid md:grid-cols-1 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_phone"
                      class="font-semibold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contact
                    </label>
                  </div>

                  <div>
                  <label htmlFor="category" className="block text-sm font-sm mb-2 mx-2 text-gray-500 dark:text-white">I am Contacting for</label>
                  <select id="category" className="w-full p-2 border rounded-lg dark:bg-gray-600  dark:border-gray-500 dark:placeholder-gray-400 tect-black">
                    
                    <option value="redisgn" className='text-gray-600 font-semibold'>Cancellation</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Check-out Payment help</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Design Assistance</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Design Services</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Order Status / Tracking</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Pricing / Promotion</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Problem With Order</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Product Information / Question</option>
                    <option value="newlogo" className='text-gray-600 font-semibold'>Other</option>
                    
                  </select>
                </div>
                  
                </div>



                <div class="relative z-0 w-full mb-5 mt-5 group">
                  <textarea
                    name="floating_textarea"
                    id="floating_textarea"
                    rows="4"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    for="floating_textarea"
                    class="font-semibold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Message
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    class="text-black font-semibold mt-5 bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>




            
            
          </div>
        </section>

    </Layout>
  )
}

export default ContactUs