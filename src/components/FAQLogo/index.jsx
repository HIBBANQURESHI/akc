import { useState } from 'react';

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion(activeAccordion === accordionIndex ? null : accordionIndex);
  };

  const faqData = [
    {
      question: 'Logo Design',
      answer:
        "A well-crafted logo is the cornerstone of your brand identity, making an impactful first impression on potential clients. Our logo design service focuses on creating unique and memorable logos that reflect your business values, helping to distinguish your brand in a competitive market. We take the time to understand your vision and create a design that speaks to your audience, ensuring it leaves a lasting mark.",
    },
    {
      question: 'Print Design',
      answer:
        "Print design remains a powerful tool in creating tangible connections with your customers. Whether it's brochures, flyers, posters, or business cards, we deliver high-quality print materials that capture attention and communicate your brand message effectively. Our designs are visually appealing and strategically crafted to ensure that your brand stands out both in hand and in print.",
    },
    {
      question: 'Stationary Design',
      answer:
        " Professional stationery sets the tone for your business communications, reflecting your attention to detail and brand consistency. Our stationery design service includes everything from letterheads to envelopes, notepads, and business cards. We create elegant, cohesive designs that reinforce your brand identity and elevate the professionalism of your business in every interaction.",
    },
  ];

  return (
    <section className="py-24 bg-yellow-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Graphic Design Services
          </h2>
        </div>
        <div className="accordion-group ">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-300  bg-black hover:bg-white  p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
                activeAccordion === index ? 'bg-white text-black border-gray-600' : ''
              }`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-semibold leading-8 text-yellow-400 hover:text-yellow-600 w-full transition duration-500 ${
                  activeAccordion === index ? 'font-medium text-black' : ''
                } hover:text-black`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordion === index}
                aria-controls={`faq-${index}`}
              >
                <h5 >{faq.question}</h5>
                <svg
                  className={`w-6 h-6 text-white hover:text-gray-800 transition duration-500 ${
                    activeAccordion === index ? 'hidden' : 'block'
                  } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${
                    activeAccordion === index ? 'block' : 'hidden'
                  } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id={`faq-${index}`}
                className="accordion-content w-full overflow-hidden pr-4"
                style={{
                  maxHeight: activeAccordion === index ? '250px' : '0',
                  transition: 'max-height 0.5s ease',
                }}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
