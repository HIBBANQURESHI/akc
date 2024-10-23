import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const TestimonialSlider = () => {
    const [currentPerson, setCurrentPerson] = useState(0);
    const [isChickenVisible, setIsChickenVisible] = useState(false);

    const people = [
        {
            photo: 'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
            name: "Susan Smith",
            profession: "Manager - S&N Stores",
            description: "Their product selection for my store was spot-on. Seeing great returns!."
        },
        {
            photo: "url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
            name: "Sofia Perez",
            profession: "Founder - Carz Pro",
            description: "Efficient, Professional, and Profitable. That's how I'd describe their service"
        },
        {
            photo: "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
            name: "Mark Anderson",
            profession: "Founder - Graffin",
            description: "Their team swiftly set up my Shopify store. Sales are booming!."
        },
        {
            photo: "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
            name: "Henry Jones",
            profession: "CEO - Product Hub",
            description: "I switched to them for Walmart account management. Best Decision Ever!"
        }
    ];

    const styles = {
        section: {
            backgroundColor: 'black',
            color: 'white',
            padding: '2rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            width: '90%',  // Use 90% width for responsiveness
            maxWidth: '100rem',
            margin: '0 auto',
        },
        h1: {
            marginBottom: '2rem',
            fontSize: 'calc(2.3rem + 1vmin)',
            textAlign: 'center',  // Center align the heading
        },
        blueLine: {
            height: '0.3rem',
            width: '6rem',
            backgroundColor: 'rgb(253, 216, 53)',
            marginBottom: '3rem',
        },
        wrapperForArrows: {
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        reviewWrap: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            transition: 'opacity 0.4s',
            opacity: 1,
            padding: '0 1rem',  // Add padding for smaller screens
        },
        imgDiv: {
            borderRadius: '50%',
            width: '10rem',
            height: '10rem',
            backgroundSize: 'cover',
            marginBottom: '1rem',
            backgroundImage: people[currentPerson].photo,
            boxShadow: '5px -3px rgb(253, 216, 53)',
        },
        personName: {
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',  // Center align the name
        },
        profession: {
            fontSize: '1rem',
            marginBottom: '0.5rem',
            color: 'rgb(253, 216, 53)',
            textAlign: 'center',  // Center align the profession
        },
        description: {
            fontSize: '1rem',
            width: '100%',  // Use full width for description
            maxWidth: '40rem',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'rgb(253, 216, 53)',
            lineHeight: '1.5rem',
            padding: '0 1rem',  // Add padding for smaller screens
        },
        arrowWrap: {
            cursor: 'pointer',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
        },
        arrow: {
            width: '1.4rem',
            height: '1.4rem',
            border: `solid rgb(253, 216, 53)`,
            borderWidth: '0 0.5rem 0.5rem 0',
            transition: 'transform 0.3s',
        },
        surpriseMeBtn: {
            border: '2px solid rgb(79, 143, 226)',
            backgroundColor: 'rgb(224, 238, 255)',
            color: 'rgb(79, 143, 226)',
            borderRadius: '2rem',
            padding: '0.5rem 0',
            width: '150px',
            textAlign: 'center',
            transition: 'background-color 0.3s, transform 0.3s',
            cursor: 'pointer',
            marginBottom: '1rem',
        },
        chickenStyle: {
            display: isChickenVisible ? 'block' : 'none',
            opacity: 1,
            transition: 'opacity 0.4s',
        },
    };

    const setNextCard = (direction) => {
        const nextPerson = direction === 'right' 
            ? (currentPerson === people.length - 1 ? 0 : currentPerson + 1)
            : (currentPerson === 0 ? people.length - 1 : currentPerson - 1);
        
        gsap.to('#reviewWrap', {
            opacity: 0,
            onComplete: () => {
                setCurrentPerson(nextPerson);
                gsap.to('#reviewWrap', { opacity: 1 });
            }
        });
    };

    const toggleChicken = () => {
        setIsChickenVisible(!isChickenVisible);
    };

    useEffect(() => {
        const imgDiv = document.getElementById("imgDiv");
        imgDiv.style.backgroundImage = people[currentPerson].photo;
    }, [currentPerson]);

    return (
        <section style={styles.section}>
            <div style={styles.contentWrapper}>
                <h1 style={styles.h1} className='font-bold'>What our clients say</h1>
                <div style={styles.blueLine}></div>
                <div style={styles.wrapperForArrows}>
                    <div 
                        style={{ ...styles.arrowWrap, left: '10%', zIndex: 10 }} 
                        onClick={() => setNextCard('left')}
                    >
                        <div style={{ ...styles.arrow, transform: 'rotate(135deg)' }} />
                    </div>
                    <div id="reviewWrap" style={styles.reviewWrap}>
                        <div id="imgDiv" style={styles.imgDiv}></div>
                        <div id="personName" style={styles.personName} className='font-semibold'>{people[currentPerson].name}</div>
                        <div id="profession" style={styles.profession} className='font-semibold'>{people[currentPerson].profession}</div>
                        <div id="description" style={styles.description} className='font-semibold'>{people[currentPerson].description}</div>
                    </div>
                    <div 
                        style={{ ...styles.arrowWrap, right: '10%', zIndex: 10 }} 
                        onClick={() => setNextCard('right')}
                    >
                        <div style={{ ...styles.arrow, transform: 'rotate(-45deg)' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
