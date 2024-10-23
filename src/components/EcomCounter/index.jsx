import React from 'react';

const CounterSection = () => {
  return (
    <section className="counter-section features bg-yellow-500 flex flex-col md:flex-row md:justify-center">
      <div className="faker">
        <div className="inner-wrap">
          <div className="feature-row flex flex-col md:flex-row gap-10 md:gap-28 mx-4 md:mx-20 mt-10 py-10">
            <div className="feature-box flex flex-col items-center">
              <div className="icon">
                <img
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/projectsCompleted.webp"
                  alt="Solution Focused"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  width="60"
                  height="60"
                  className="aos-init aos-animate"
                />
              </div>
              <h3 className="h3-semiBold aos-init aos-animate font-bold text-2xl py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                1400+
              </h3>
              <p className="field1-regular aos-init aos-animate font-bold text-xl text-center py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                Projects completed for our respected clients.
              </p>
            </div>
            <div className="feature-box flex flex-col items-center">
              <div className="icon">
                <img
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/goal.webp"
                  alt="Customer Oriented"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  width="60"
                  height="60"
                  className="aos-init aos-animate"
                />
              </div>
              <h3 className="h3-semiBold aos-init aos-animate font-bold text-2xl py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                10+
              </h3>
              <p className="field1-regular aos-init aos-animate font-bold text-xl text-center py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                Years experience in business & consulting.
              </p>
            </div>
            <div className="feature-box flex flex-col items-center">
              <div className="icon">
                <img
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/discussion.webp"
                  alt="Success"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  width="60"
                  height="60"
                  className="aos-init aos-animate"
                />
              </div>
              <h3 className="h3-semiBold aos-init aos-animate font-bold text-2xl py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                200+
              </h3>
              <p className="field1-regular aos-init aos-animate font-bold text-xl text-center py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                Seasoned professionals catering to clients.
              </p>
            </div>
            <div className="feature-box flex flex-col items-center">
              <div className="icon">
                <img
                  src="https://ecomexpertsllc.s3.amazonaws.com/icons/reward.webp"
                  alt="Success"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  width="60"
                  height="60"
                  className="aos-init aos-animate"
                />
              </div>
              <h3 className="h3-semiBold aos-init aos-animate font-bold text-2xl py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                30+
              </h3>
              <p className="field1-regular aos-init aos-animate font-bold text-xl text-center py-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                Business & consulting award winnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
