import React from "react";
import HeroService from "../../components/heroService";
import heroImg from "../../assets/banner-gd/video.png";
import Layout from "../../layout";
import DescriptionService from "../../components/descriptionService";
import PricingService from "../../components/pricingService";
import OfferService from "../../components/offerService";
import SampleGallery from "../../components/toggleSwitch/sampleGallery";
import FAQSection from "../../components/FAQSection";
import DetailsSection from "./sections/Details";
import FeatureSection from "./sections/FeatureSection";
import DesignGuide from "./sections/DesignGuide";
import Testimonial from "../Home/sections/Consultancy";

//gallery images
import logo1 from '../../assets/logo-gallery/logo1.png';
import logo2 from '../../assets/logo-gallery/logo2.png';
import logo3 from '../../assets/logo-gallery/logo3.jfif';
import Testimonials from "../../components/testimonials";
import Consultancy from "../Home/sections/Consultancy";
import ConsultancyForm from "../../components/consultancyForm";
import Content from "../../components/content";

//testmonial images
import testmonial1 from "../../assets/img/examples/testimonial-6-2.jpg"
import testmonial2 from "../../assets/img/examples/testimonial-6-3.jpg"

//ContentSection images
import contentSectionImg from "../../assets/banner/cms-02.png";
import ExpertiseGrid from "./sections/ExpertiseGrid";


const pricingPlans = {
  logo: [
    {
      title: 'LOGO SPECIAL',
      price: '59.00',
      features: [
        '4 Original Logo Concepts',
        '2 Dedicated Logo Designers',
        '4 Revisions',
        'Grey Scale Format',
        'Free Icon Design',
        'Formats: JPEG Only',
        '24 - 48 Hours Turn Around Time',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => alert('Order Logo Special'),
    },
    {
      title: 'LOGO PLUS',
      price: '199.00',
      features: [
        '8 Original Logo Concepts',
        '3 Dedicated Logo Designers',
        '8 Revisions',
        'Business Card Design',
        'Formats: PNG, JPEG, PDF',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => alert('Order Logo Plus'),
    },
    {
      title: 'LOGO PLATINUM',
      price: '399.00',
      features: [
        '12 Original Logo Concepts',
        '4 Dedicated Logo Designers',
        'Unlimited Revisions',
        'Business Card & Letterhead Design',
        'Grey Scale & Color Formats',
        'Formats: PNG, JPEG, PDF, AI',
        '48 Hours Turn Around Time',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => alert('Order Logo Platinum'),
    },
    {
      title: 'LOGO BOSS',
      price: '599.00',
      features: [
        '16 Original Logo Concepts',
        '5 Dedicated Logo Designers',
        'Unlimited Revisions',
        'Complete Stationery Design',
        'Grey Scale & Color Formats',
        'Formats: PNG, JPEG, PDF, AI',
        '3D Mockup Included',
        '24 Hours Turn Around Time',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => alert('Order Logo Boss'),
    },
    {
      title: 'LOGO INFINITE',
      price: '1259.00',
      features: [
        'Unlimited Original Logo Concepts',
        '6 Dedicated Logo Designers',
        'Unlimited Revisions',
        'Complete Branding Package',
        'Business Card & Letterhead Design',
        '3D Mockup',
        'Formats: PNG, JPEG, PDF, AI, SVG',
        '24 - 48 Hours Turn Around Time',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => alert('Order Logo Infinite'),
    },
    {
      title: 'LOGO COMBO',
      price: '1499.00',
      features: [
        'Unlimited Original Logo Concepts',
        '7 Dedicated Logo Designers',
        'Unlimited Revisions',
        'Complete Branding & Stationery Package',
        'Social Media Kit',
        '3D Mockup',
        'Formats: PNG, JPEG, PDF, AI, SVG',
        '24 Hours Turn Around Time',
      ],
      buttonText: 'Order Now',
      onButtonClick: () => alert('Order Logo Combo'),
    },
  ],
  branding: [
    {
      title: "BRANDING BASIC",
      price: "299.00",
      features: [
        "5 Branding Concepts",
        "Logo & Business Card",
        "Letterhead Design",
        "Social Media Kit",
        "Free Stationary Design",
        "5 Branding Concepts",
        "Logo & Business Card",
        "Letterhead Design",
        "Social Media Kit",
        "Free Stationary Design",
      ],
      buttonText: "Order Now",
      onButtonClick: () => alert("Order Branding Basic"),
    },
    {
      title: "BRANDING PRO",
      price: "499.00",
      features: [
        "10 Branding Concepts",
        "Complete Brand Package",
        "Social Media Kit",
        "Letterhead & Business Card",
        "Unlimited Revisions",
      ],
      buttonText: "Order Now",
      onButtonClick: () => alert("Order Branding Pro"),
    },
  ],
};

const OfferData = [
  {
    title: "Logo Design",
    features: ["Unlimited Concepts", "Unlimited Revisions", "4 Dedicated Logo Designers", "Turnaround 48-72 hrs"],
    price: 1249,
    isDiscounted: true,
    originalPrice: 4200,
    button1Text: "Order Now",
    button2Text: "Live Chat"
  },
  {
    title: "Stationery Design",
    features: ["Business Card Design", "Letterhead Design", "Envelope Design", "Brochure Design"],
    price: 1249,
    isDiscounted: true,
    originalPrice: 4200,
    button1Text: "Order Now",
    button2Text: "Live Chat"
  },
  {
    title: "Website",
    features: ["1 Custom Design Concept", "1 Blog Theme Design", "Unlimited Pages", "Unlimited Revisions", "1 Year FREE Hosting"],
    price: 1249,
    isDiscounted: true,
    originalPrice: 4200,
    button1Text: "Order Now",
    button2Text: "Live Chat"
  },
  {
    title: "Marketing Collateral",
    features: ["Any 3 of Your Choice", "(Facebook, LinkedIn, Twitter, YouTube)"],
    price: 1249,
    isDiscounted: true,
    originalPrice: 4200,
    button1Text: "Order Now",
    button2Text: "Live Chat"
  }
];

const content = {
  title: "Custom Web Design & Development Services In USA",
  description:
    "Engage your audience with appealing website design and responsive development. The website is where your customers will understand your business and credibility in the industry. We are the leading web design and development agency in the USA, providing complete design and development solutions to create useful web solutions for clients.",
  subDescription:
    "We have a team of creative designers and skilled developers who are experienced in delivering the best web solutions.",
};

const faqsData = [
  {
    question: 'Do I get discounts for the services?',
    answer: 'We offer irresistible packages that include several core services.',
    isOpen: false
  },
  {
    question: 'Do you have a refund policy?',
    answer: 'Yes, we offer a 30-day refund policy on our core services.',
    isOpen: false
  },
  {
    question: 'I have privacy concerns about my data, is your network secure?',
    answer: 'Our network employs state-of-the-art security measures.',
    isOpen: false
  },
  {
    question: 'What if I have a question midway?',
    answer: 'You can contact our support team anytime for assistance.',
    isOpen: false
  }
]

const contentSectionData = [
  {
    title: 'CMS Website',
    subtitle: 'Seamless Functionality for Website Management',
    content:
      'CMS (content management system) is the most convenient solution which enables authorized users...',
    listItems: [
      'Simplified Redesigning',
      'Time-Saving Maintenance',
      'Easy Collaboration',
    ],
    buttonText: 'Request a Custom Quote',
    image: contentSectionImg,
  },
];


const galleryData = {
  logos: [
    { id: 1, src: logo3, alt: 'Logo 3' },
    { id: 2, src: logo1, alt: 'Logo 1' },
    { id: 3, src: logo3, alt: 'Logo 3' },
    { id: 4, src: logo2, alt: 'Logo 2' },
    { id: 5, src: logo3, alt: 'Logo 3' },
  ],
  stationery: [
    { id: 7, src: logo2, alt: 'Stationery 1' },
    { id: 8, src: logo1, alt: 'Stationery 2' },
    { id: 9, src: logo3, alt: 'Stationery 3' },
  ],
  brochures: [
    { id: 10, src: logo1, alt: 'Brochure 1' },
    { id: 11, src: logo2, alt: 'Brochure 2' },
    { id: 12, src: logo3, alt: 'Brochure 3' },
  ],
};

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "This company delivered more than I expected. Great design work, and the functionality is seamless!",
    avatar: testmonial1
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "Absolutely fantastic! The team worked with me on every detail, and I'm extremely satisfied with the final product.",
    avatar: testmonial2
  },
  {
    id: 3,
    name: "Alice Johnson",
    feedback:
      "The level of professionalism and attention to detail was excellent. Highly recommend their services!",
    avatar: testmonial1
  },
];

const VideoAnimation = () => {


  return (
    <Layout>
      <HeroService
        heading="Get Simple, Attracting, Purposeful Explainer Videos"
        description="Attract your audience by providing visual informal information about business"
        primaryButtonText="Custom Website Design From $499"
        secondaryButtonText="Live Chat"
        primaryButtonLink="/web-design"
        secondaryButtonLink="/live-chat"
        imageUrl={heroImg}
      />
      <DescriptionService
        title={content.title}
        description={content.description}
        subDescription={content.subDescription}
      />
      <ExpertiseGrid/>
      <PricingService
        plans={pricingPlans}
        heading="Crafting Perfect Logo Packages for Corporations Globally"
        description="Our team of experts focus on client and customer satisfaction as the ultimate goal for our projects."
      />
      <SampleGallery galleryData={galleryData}/>
      <ConsultancyForm/>
      
    </Layout>
  );
};

export default VideoAnimation;
