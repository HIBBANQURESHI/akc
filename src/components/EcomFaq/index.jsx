import React from 'react';

const FAQs = () => {
  const styles = {
    container: {
      fontFamily: 'system-ui',
      backgroundColor: 'black',
      padding: '2rem 1rem', // Add padding for better spacing
      maxWidth: '1200px', // Limit width for large screens
      margin: '0 auto', // Center the container
    },
    title: {
      textWrap: 'balance',
      textDecoration: 'underline',
      textUnderlineOffset: '6px',
      textDecorationThickness: '2px',
      marginBottom: '30px',
      textAlign: 'center', // Center align titles
      color: 'gray', // Add color to the titles
    },
    details: {
      width: '100%', // Make each FAQ box responsive
      maxWidth: '600px', // Set max width for larger screens
      margin: '0 auto', // Center align the FAQ boxes
      border: '1px solid rgba(112,112,112,0.1)',
      borderRadius: '8px',
      padding: '0.5em 1em 0', // Add more padding
      marginBottom: '20px', // Add gap between the FAQ boxes
      cursor: 'pointer',
      backgroundColor: '#616161',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow effect
      transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition
    },
    summary: {
      fontWeight: '600',
      margin: '-0.5em -0.5em 0',
      padding: '0.5em',
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
    },
    openDetails: {
      padding: '0.5em',
      border: 'none',
      backgroundColor: '#F57F17',
    },
    arrow: {
      float: 'right',
      fontSize: '1.2em',
      color: 'yellow',
    },
  };

  // Add hover effect to the details
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.02)'; // Scale up on hover
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // Increase shadow on hover
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)'; // Reset scale
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Reset shadow
  };

  return (
    <div className='bg-black'> 
    <div style={styles.container}>
      <h3 style={styles.title} className='font-semibold text-4xl'>FAQ’s</h3>
      <h1 style={styles.title} className='font-bold text-6xl'> Frequently Asked Questions </h1>
      <div className="faqs-container py-14">
        {/* FAQ 1 */}
        <details
          style={styles.details}
          open
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <summary style={styles.summary} className='text-2xl font-bold'>
            What Is Your Best Approach To Selling Products On Amazon?
            <span style={styles.arrow}>+</span>
          </summary>
          <p className="content text-black font-semibold text-xl">
            Amazon offers untapped market potential for businesses looking to boost their revenue through optimized product listings, digital marketing, enhanced brand content, sponsored ads, engaging sales copy, attractive product descriptions, images, and more. Our Amazon marketing services promise sales-driven business scaling.
          </p>
        </details>

        {/* FAQ 2 */}
        <details
          style={styles.details}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <summary style={styles.summary} className='text-2xl font-bold'>
            Do I Need To Hire Amazon Marketing Service Professional For My Business?
            <span style={styles.arrow}>+</span>
          </summary>
          <p className="content text-black font-semibold text-xl">
            With the aid of an Amazon marketing service expert, you can enhance your brand's online exposure, effectively manage your online store, and attract more visitors to your product website, regardless of your business size or the item you wish to promote to your audience. Utilizing the vast experience of Amazon marketing agencies, you can promote your products appropriately while adhering to all Amazon regulations. With the support of a marketing specialist, you can achieve your desired goals and become the seller you have always aspired to be.
          </p>
        </details>

        {/* FAQ 3 */}
        <details
          style={styles.details}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <summary style={styles.summary} className='text-2xl font-bold'>
            I Have A Successful Amazon Ecommerce Store. Do I Need To Hire Amazon Marketing Experts?
            <span style={styles.arrow}>+</span>
          </summary>
          <p className="content text-black font-semibold text-xl">
            We are glad to hear that your ecommerce website is operating smoothly and meeting your sales objectives. However, keeping up with the changing trends is important for any business. Although your current marketing techniques might be effective, they may become outdated with time, which could affect your marketing approach in the future, especially if you fail to update your previous data. Therefore, to take your brand or online business to the next level, it's important to consult Amazon marketing agencies who can help you increase sales and improve your seller account management.
          </p>
        </details>

        {/* FAQ 4 */}
        <details
          style={styles.details}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <summary style={styles.summary} className='text-2xl font-bold'>
            How Do I Know My Amazon Strategy Is Effective?
            <span style={styles.arrow}>+</span>
          </summary>
          <p className="content text-black font-semibold text-xl">
            If you are overspending due to changes on Amazon, but your customers are still responding positively, the solution may be to increase your Amazon sales. Even if your sales history is strong, you may feel that your strategy is not producing the desired results or that you are not making enough profits at times. Therefore, to boost your business sales, you need to reconsider your marketing plan. Amazon provides the opportunity to sell your products on various social media platforms and marketplaces.
          </p>
        </details>

        {/* FAQ 5 */}
        <details
          style={styles.details}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <summary style={styles.summary} className='text-2xl font-bold'>
            How Long Do You Take To Set Up an Online Ecommerce Store?
            <span style={styles.arrow}>+</span>
          </summary>
          <p className="content text-black font-semibold text-xl">
            In an ideal situation, it would take 3-4 weeks to initiate an Amazon ecommerce enterprise. However, it may cause a delay based on your requirements. The AMZ Digital comprises a group of exceptionally knowledgeable Amazon marketers and business consultants who can help you establish your Amazon web store within the timeframe specified. Our application of marketing tactics, Amazon ranking, and thousands of firms have advanced, and we are acknowledged for that outstanding achievement. It has delivered extensive proficiency in providing superior services based on proven methodologies.
          </p>
        </details>
      </div>
    </div>
    </div>
  );
};

export default FAQs;
