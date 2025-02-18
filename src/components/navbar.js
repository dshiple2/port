import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
        navLine: {
            height: '1px',
            backgroundColor: '#333',
            width: '100%',
        },
        navLine2: {
            height: '1px',
            backgroundColor: '#333',
            width: '100%',
            marginTop: '9rem',
        },
        nav: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
        brandText: {
            fontFamily: 'MyCustomFont, sans-serif',
            color: 'black',
            fontSize: isMobile ? '18px' : '24px',
            marginLeft: isMobile ? '0' : '-55%'
        },
        navLink: {
            fontSize: '14px',
            padding: '0.25rem 0',
            marginBottom: '0.25rem',
            lineHeight: '1.2',
            marginLeft: '-10px',
        },
        dynamicText: {
            fontFamily: 'MyCustomFont, sans-serif',
            fontSize: isMobile ? '18px' : '24px',
            color: 'black',
            marginLeft: isMobile ? '8rem' : '10rem',
            marginTop: isMobile ? '-50px' : '0'
        },
    };

    return (
        <div style={styles.stickyNavbar}>
            <Navbar expand="lg" expanded={true}>
                <Container>
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto" style={styles.nav}>
                            <Navbar.Text style={styles.brandText}>Davis Dial</Navbar.Text>
                        </Nav>
                        <div style={styles.dynamicText}>{getDynamicText()}</div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img src={smallerchainbar2} alt="Navbar Border"
                 style={{ top: '35px', marginLeft: '-30px', width: '1510px', position: "absolute", pointerEvents: 'none' }} />
        </div>
    );
};

export default NavbarComponent;
