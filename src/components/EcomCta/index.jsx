  import { div } from 'framer-motion/client';
  import React from 'react';

  const CtaBox = () => {
    return (
      <div className='bg-black py-24'>
        <div className="cta-box bg-yellow-500 rounded-full p-8 min-w-screen "> {/* Adjust padding for smaller size */}
          <h3 className="h1 aos-init aos-animate font-bold text-3xl text-center" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
            JOIN THE THRIVING ECOMMERCE ECOSYSTEM AND ACCESS LIMITLESS OPPORTUNITIES
          </h3>
          <p className="field1-regular aos-init aos-animate font-semibold text-lg text-center" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
            Connect with Our Experienced Advisors Today!
          </p>
          <div className='py-16 h-12 text-center'>
            <button className="cta-default cta1-semiBold aos-init aos-animate font-semibold text-xl bg-white w-72 h-12 rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-yellow-500" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
              Book a Free Consultation
            </button>
          </div>
          <img  src="https://ecomexpertsllc.s3.amazonaws.com/lines-light.webp" alt="" className="line" width="1920" height="113" />
        </div>
      </div>
    );
  };

  export default CtaBox;
