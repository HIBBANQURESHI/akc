import React from "react";
import {
  FaLaptop,
  FaCode,
  FaPaintBrush,
  FaWrench,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Website Design",
    description:
      "We believe in creating attractive and responsive designs that will make your website extremely interactive and user friendly. You can positively depend on our website design services and development services as our highly skilled team members are brilliant at their work and due to which we are able to provide the best website design services.",
    icon: <FaLaptop size={40} />,
    link: "/web-design",
  },
  {
    title: "Website Development",
    description:
      "Our goal is to develop websites that help businesses and brands to become a global influence. We will help you to expand your market size, get new sales in and create awareness. To develop a website the correct way, you need to select the right web development services company who will cater to your unique requests.",
    icon: <FaCode size={40} />,
    link: "/web-design",
  },
  {
    title: "Graphic Design",
    description:
      "The logo design of a business or brand sets the tone for how your targeted audience perceives your brand and acts as the jumping off point for all of your branding elements. As a result, hiring local designers with experience is important. DesignMaze is a graphic design agency that has an experienced team which creates...",
    icon: <FaPaintBrush size={40} />,
    link: "/logo-branding",
  },
  {
    title: "Website Maintenance",
    description:
      "Whenever you look up online to find a certain object, your search will make you discover so many new businesses, products, and services related to that object. And that’s not even 0.000001% of the online businesses present on the internet.",
    icon: <FaWrench size={40} />,
    link: "/web-design",
  },
  {
    title: "E-Commerce Website",
    description:
      "DesignMaze, an ecommerce website development company and web development services company knows the value of using the most up-to-date technologies to increase the viability of your online shop, which is why we built a ECommerce platform.",
    icon: <FaShoppingCart size={40} />,
    link: "/web-design",
  },
  {
    title: "Digital Marketing",
    description:
      "We provide solutions for brands and businesses to go digital and reach the peak of success in this digital age. Internet and smart devices have changed the way customers engage with brands. We will help your business to transform adjust to those changes and flourish.",
    icon: <FaBullhorn size={40} />,
    link: "/digital-seo",
  },
];

function ServicesSection() {
  return (
    <section className="p-4 py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold">
          Giving Your Business Some Great Ideas
        </h2>
        <p className="mb-12 text-lg text-gray-600 font-semibold">
          We offer Website Design and Maintenance, Logo Creation, and E-Commerce
          design combined with management plans.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col p-8 mt-10 mb-20 text-black transition-all duration-300 bg-white border-2 border-black rounded-lg cursor-pointer group hover:bg-yellow-400 hover:text-white hover:border-yellow-400"
            >
              <div className="absolute inset-0 m-1.5 border-2 border-black rounded-lg before:content-[''] before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg group-hover:before:border-transparent"></div>

              <div className="absolute top-0 p-12 text-white transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full left-1/2 group-hover:bg-white group-hover:text-yellow-400">
                {card.icon}
              </div>

              <h3 className="mt-20 mb-10 font-bold md:text-4xl flex-grow">
                {card.title}
              </h3>

              <p className="p-5 mb-5 text-gray-600 transition-all duration-300 group-hover:text-white font-semibold flex-grow">
                {card.description}
              </p>

              <div className="flex flex-col gap-2 mt-auto"> {/* Ensure buttons are at the bottom */}
                <Link
                  to={card.link}
                  className="w-full px-4 py-2 bg-yellow-400 border rounded-xl group-hover:bg-white group-hover:text-yellow-800 font-semibold text-center"
                >
                  Let's talk about it
                </Link>
                <Link
                  to="/contact-us"
                  className="w-full px-4 py-2 text-white bg-gray-900 border border-black hover:bg-gray-100 hover:text-black rounded-xl font-semibold text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
