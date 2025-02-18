import React, { useState, useEffect } from 'react';
import smallerchainbar2 from "../photos/smallerchainbar2.png";

const NavbarComponent = ({ visibleImage }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const updateWindowSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    const getDynamicText = () => {
        if (visibleImage === 'books') {
            return 'Book Series Reconstruction - Yuval Noah Harari';
        } else if (visibleImage === "meadowGold") {
            return 'Brand Reconstruction - Meadow Gold Dairy';
        } else if (visibleImage === "magazine") {
            return 'Magazine Reconstruction - Jazzwise Magazine';
        } else if (visibleImage === "off") {
            return 'Branding, Art Direction, Product Design - Orem Film Festival';
        } else if (visibleImage === "prodigal") {
            return 'Nonprofit Community Work - Prodigal Press Provo';
        } else if (visibleImage === "branding") {
            return 'Personal Branding - Dial';
        } else {
            return '';
        }
    };

    const styles = {
        stickyNavbar: {
            position: 'sticky',
            top: 10,
            zIndex: 999,
            width: '100%',
            padding: '1rem 0',
            transform: 'rotate(-7deg)',
            border: "20px solid transparent",
            borderTop: '#333',
        },
        brandText: {
            fontFamily: 'MyCustomFont, sans-serif',
            color: 'black',
            fontSize: isMobile ? '18px' : '24px',
            width: '200px'
         },
        dynamicText: {
            fontFamily: 'MyCustomFont, sans-serif',
            fontSize: isMobile ? '18px' : '24px',
            color: 'black',
            marginLeft: isMobile ? '-5rem' : '10rem',
            width: isMobile ? '300px': '1000px'
        },
    };

    return (
        <div style={styles.stickyNavbar}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={styles.brandText}>Davis Dial</div>
                <div style={styles.dynamicText}>{getDynamicText()}</div>
            </div>
            <img 
                src={smallerchainbar2} 
                alt="Navbar Border" 
                style={{ marginTop: '-25px', marginLeft: '-30px', width: '1510px', position: "absolute", pointerEvents: 'none' }} 
            />
        </div>
    );
};

export default NavbarComponent;
