import React from 'react';
import './SuccessStories.css'; // Ensure this file exists

const SuccessStories = () => {
    const containerStyle = {
        height: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 1rem', // px-4
    };

    const slideStyle = {
        flexShrink: 0, // Prevent shrinking for the slide items
        width: '300px', // Set a fixed width for the slide item
        height: '300px', // Increased height for the slide item
        overflow: 'hidden', // Ensure overflow is hidden
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    // Array of image URLs
    const images = [
        '/src/assets/img/s1.png', // Replace with your actual image paths
        '/src/assets/img/s2.png',
        '/src/assets/img/s3.webp',
        '/src/assets/img/s4.png',
        '/src/assets/img/s5.png',
    ];

    return (
        <section className="relative z-0 py-8 lg:py-16 xl:py-20 bg-black">
            <div className="success-stories-container">
                <div className="pb-5 text-center lg:pb-10">
                    <h2 className="lg:text-[50px] md:text-[40px] text-[32px] font-bold text-white leading-[1.2] pt-2">
                        Our Success Stories
                    </h2>
                </div>
                <div className="slider text-3xl py-14 overflow-hidden">
                    <div className="slide-track flex animate-scroll">
                        {/* Map over the images array to render each image */}
                        {images.map((image, index) => (
                            <div style={slideStyle} key={index}>
                                <img
                                    src={image}
                                    alt={`Success Story ${index + 1}`}
                                    className="success-image"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure images fit within the div
                                />
                            </div>
                        ))}
                        {/* Repeat the images for seamless sliding effect */}
                        {images.map((image, index) => (
                            <div style={slideStyle} key={index + images.length}>
                                <img
                                    src={image}
                                    alt={`Success Story ${index + 1}`}
                                    className="success-image"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure images fit within the div
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
