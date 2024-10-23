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
import HeroSection from "../../components/EcomHero";
import FeaturesSection from "../../components/EcomFeature";
import ServicesSection from "../../components/EcomServices";
import CtaBox from "../../components/EcomCta";
import CounterSection from "../../components/EcomCounter";
import SuccessStories from "../../components/EcomStories";
import FAQs from "../../components/EcomFaq";
import TestimonialSlider from "../../components/EcomTestimonials";


const EcomExperts = () => {


  return (
    <Layout>
      <HeroSection/>
      <FeaturesSection/>
      <ServicesSection/>
      <CtaBox/>
      <CounterSection/>
      <SuccessStories/>
      <FAQs/>
      <TestimonialSlider/>
      
    </Layout>
  );
};

export default EcomExperts;
