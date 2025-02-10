import React, { useState, useEffect } from 'react';
import './App.css';
import NavbarComponent from './components/navbar';
import ImageCarousel from "./components/ImageCarousel";
import book from "./photos/project1/book.png";
import book2 from "./photos/project1/book2.png";
import book3 from "./photos/project1/book3.png";
import book4 from "./photos/project1/book4.png";
import book5 from "./photos/project1/book5.png";
import book6 from "./photos/project1/book6.png";
import meadowgold from "./photos/project2/meadowgold.png";
import meadowgold2 from "./photos/project2/meadowgold2.png";
import meadowgold3 from "./photos/project2/meadowgold3.png";
import meadowgold4 from "./photos/project2/meadowgold4.png";
import meadowgold5 from "./photos/project2/meadowgold5.png";
import necklace_transparent from "./photos/necklace_transparent.png";
import magazing_cover1 from "./photos/project3/magazing_cover1.png";
import magazing_cover2 from "./photos/project3/magazing_cover2.png";
import magazzing from "./photos/project3/magazzing.png";
import magazzing2 from "./photos/project3/magazzing2.png";
import magazzing3 from "./photos/project3/magazzing3.png";
import magazzing4 from "./photos/project3/magazzing4.png";
import magazzing5 from "./photos/project3/magazzing5.png";
import magazzing6 from "./photos/project3/magazzing6.png";
import lastspreadpsd from "./photos/project4/lastspreadpsd.png";
import off_lookbook from "./photos/project4/off_lookbook.png";
import off_lookbook2 from "./photos/project4/off_lookbook2.png";
import off_lookbook3 from "./photos/project4/off_lookbook3.png";
import off_lookbook4 from "./photos/project4/off_lookbook4.png";
import off_lookbook5 from "./photos/project4/off_lookbook5.png";
import off_lookbook6 from "./photos/project4/off_lookbook6.png";
import dancingwdevil from "./photos/project5/dancingwdevil.png";
import PPP_cover from "./photos/project5/PPP_cover.png";
import maggiemae from "./photos/project5/maggiemae.png";
import prodigal1 from "./photos/project5/prodigal1.png";
import bcards from "./photos/project6/bcards.png";
import box1 from "./photos/project6/box1.png";
import box2 from "./photos/project6/box2.png";
import speakergraphic1 from "./photos/project6/speakergraphic1.png";
import speakers from "./photos/project6/speakers.png";
import stationery from "./photos/project6/stationery.png";
import  webapplication from "./photos/project6/webapplication.png";
import bigtime from "./photos/project6/bigtime.png";

function App() {
    const [visibleImage, setVisibleImage] = useState('');

    // IntersectionObserver callback
    const handleVisibilityChange = (entries) => {
        entries.forEach((entry) => {
            console.log(entry); // Log each entry to see what it contains
            // If the image is at least 50% visible, update the state
            if (entry.isIntersecting) {
                setVisibleImage(entry.target.id); // Update the visible image state
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleVisibilityChange, {
            threshold: 0.5, // Trigger when at least 50% of the image is visible
        });

        // Get the images from the DOM (make sure images have proper IDs)
        const imageElements = document.querySelectorAll(".observed-section");
        console.log('imageElements', imageElements); // Log image elements
        imageElements.forEach((img) => observer.observe(img));

        return () => {
            observer.disconnect(); // Cleanup on unmount
        };
    }, []);

    return (
        <>
            <NavbarComponent visibleImage={visibleImage}/>
            <div id="necklace" style={styles.imageContainer} className="observed-section">
                <img src={necklace_transparent} alt="necklace" style={styles.image}/>
            </div>
            <div id="books" style={{marginTop: '10rem'}} className="observed-section">
                <ImageCarousel images={[
                    book,
                    book2,
                    book3,
                    book4,
                    book5,
                    book6
                ]}/>
            </div>
            <div id="magazine" style={{marginTop: '1rem'}} className="observed-section">
                <ImageCarousel images={[
                    magazing_cover1,
                    magazing_cover2,
                    magazzing,
                    magazzing2,
                    magazzing3,
                    magazzing4,
                    magazzing5,
                    magazzing6
                ]}/>
            </div>
            <div id="off" style={{marginTop: '1rem'}} className="observed-section">
                <ImageCarousel images={[
                    off_lookbook,
                    off_lookbook2,
                    off_lookbook3,
                    off_lookbook4,
                    off_lookbook5,
                    off_lookbook6,
                    lastspreadpsd
                ]}/>
            </div>
    
            <div id="prodigal" style={{marginTop: '1rem'}} className="observed-section">
                <ImageCarousel images={[
                    PPP_cover,
                    dancingwdevil,
                    maggiemae,
                    prodigal1 
                ]}/>
            </div>
            <div id="branding" style={{marginTop: '1rem'}} className="observed-section">
                <ImageCarousel images={[
                    bcards,
                    box1,
                    box2,
                    speakergraphic1,
                    speakers,
                    bigtime,
                    stationery,
                    webapplication
                ]}/>
            </div>
            <div id="meadowGold" style={{marginTop: '1rem', marginBottom: '5rem'}} className="observed-section">
                <ImageCarousel images={[
                    meadowgold,
                    meadowgold2,
                    meadowgold3,
                    meadowgold4,
                    meadowgold5
                ]}/>
            </div>
        </>
    );
}

const styles = {
    imageContainer: {
        position: 'relative',
        marginBottom: '20rem'
    },
    image: {
        width: '85%',
        marginTop: '-10rem',
        maxWidth: '500px',
        marginBottom: '2rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: 'rotate(40deg)'
        },
    };

export default App;
