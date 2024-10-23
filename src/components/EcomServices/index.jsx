import React, { useState } from 'react';
import { FaEtsy } from "react-icons/fa6";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Shopify'); // Default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="services-section">
      <div className="inner-wrap">
        <div className="services-row-1">
          <div className="left-col">
            <h3 
              className="h2-regular aos-init aos-animate" 
              data-aos="fade-up" 
              data-aos-once="true" 
              data-aos-duration="1000"
            >
              Our Services
            </h3>
            <h3 
              className="h1 aos-init aos-animate" 
              data-aos="fade-up" 
              data-aos-once="true" 
              data-aos-duration="1000"
            >
              Making brand sales effortless!
            </h3>
          </div>
          <div className="right-col">
            <p 
              className="para field1-regular aos-init aos-animate" 
              data-aos="fade-up" 
              data-aos-once="true" 
              data-aos-duration="1000"
            >
              Our Amazon Shopify automation services integrate your Amazon and Shopify stores, automate inventory updates, and provide real-time data insights, resulting in streamlined operations, increased productivity, and better customer experiences.
            </p>
            <button 
              className="cta-big fill cta1-semiBold aos-init aos-animate" 
              data-aos="fade-up" 
              data-aos-once="true" 
              data-aos-duration="1000" 
              data-aos-delay="500" 
              data-aos-anchor-placement="top-bottom"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="services-row-2">
        <div className="inner-wrap">
          <div className="tab-cover five-tabs">
            <div 
              className="tabs five-tabs aos-init aos-animate" 
              data-aos="fade-up" 
              data-aos-once="true" 
              data-aos-duration="1000" 
              data-aos-delay="100"
            >
              {['Amazon', 'Walmart', 'Shopify', 'Etsy'].map((tabName) => (
                <button 
                  key={tabName}
                  className={`tabs__button cta2-semiBold ${activeTab === tabName ? 'active' : ''}`} 
                  onClick={() => handleTabClick(tabName)}
                >
                  {tabName}
                </button>
              ))}
            </div>
          </div>

          <div className="services-grid">
            {activeTab === 'Amazon' && (
              <>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Amazon Store Creation</h3>
                    <a href="/amazon_store_creation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Amazon FBA Automation</h3>
                    <a href="/amazon_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Amazon Private Labelled</h3>
                    <a href="/amazon_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Amazon A+ Content</h3>
                    <a href="/amazon_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Amazon Product Hunting</h3>
                    <a href="/amazon_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/amazon-fba-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Amazon PPC</h3>
                    <a href="/amazon_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Shopify' && (
              <>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Shopify Store Creation</h3>
                    <a href="/shopify_store_creation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-so-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Shopify Automation</h3>
                    <a href="/shopify_store_optimization" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-auto-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Shopify Store Optimization</h3>
                    <a href="/shopify_store_creation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-auto-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Shopify Product Hunting</h3>
                    <a href="/shopify_store_creation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/shopify-auto-icon.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Shopify Store Marketing</h3>
                    <a href="/shopify_store_creation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Walmart' && (
              <>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Walmart Store Creation</h3>
                    <a href="/walmart_store_creation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Walmart Private Labelled</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Walmart Dropshipping</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Walmart  Product Hunting</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                <div className="service-card">
                  <div className="card-icon">
                    <img 
                      src="https://ecomexpertsllc.s3.amazonaws.com/icons/walmart-pl.webp" 
                      alt="service-icon" 
                      width="40px" 
                      height="40px" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Walmart WFS</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Etsy' && (
              <><div className="service-card">
                <div className="card-icon">
                  <img
                    src="https://ecomexpertsllc.s3.amazonaws.com/icons/AmazonStore.webp"
                    alt="service-icon"
                    width="40px"
                    height="40px"
                    style={{ objectFit: 'contain' }} />
                </div>
                <div className="card-content">
                  <h3 className="cta1-semiBold">Etsy Store Creation</h3>
                  <a href="/youtube_automation" className="cta3-semiBold">Learn More</a>
                </div>
              </div>
              <div className="service-card">
                  <div className="card-icon">
                  <FaEtsy size={40} color="#f2bd58"/>
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Etsy Private Labelled</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div><div className="service-card">
                  <div className="card-icon">
                  <FaEtsy size={40} color="#f2bd58"/>
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Etsy Dropshipping</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div><div className="service-card">
                  <div className="card-icon">
                  <FaEtsy size={40} color="#f2bd58"/>
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Etsy Product Hunting</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div><div className="service-card">
                  <div className="card-icon">
                  <FaEtsy size={40} color="#f2bd58"/>
                  </div>
                  <div className="card-content">
                    <h3 className="cta1-semiBold">Etsy WFS</h3>
                    <a href="/walmart_automation" className="cta3-semiBold">Learn More</a>
                  </div>
                </div>
                </>
            )}
          </div>
        </div>
        <div className="line-pattern">
          <img 
            src="https://ecomexpertsllc.s3.amazonaws.com/lines-dark.webp" 
            alt="pattern" 
            width="1920px" 
            height="113px"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
