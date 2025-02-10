import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import chain from '../photos/chain.png';


const NavbarComponent = ({ visibleImage }) => {
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

    return (
        <div style={styles.stickyNavbar}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="navbar-nav"/>
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto" style={styles.nav}>
                            <Navbar.Text style={styles.brandText}>Davis Dial</Navbar.Text>
                            {/*<Nav.Link href="#breakfast" className="text-black" style={styles.navLink}>*/}
                            {/*    Breakfast*/}
                            {/*</Nav.Link>*/}
                            {/*<Nav.Link href="#workers" className="text-black" style={styles.navLink}>*/}
                            {/*    Workers*/}
                            {/*</Nav.Link>*/}
                        </Nav>
                        <div style={styles.dynamicText}>{getDynamicText()}</div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img src={chain} alt="Navbar Border"
                 style={{top: '-1200px', marginLeft: '-1040px', width: '3200px', position: "absolute", pointerEvents: 'none'}}/>
        </div>
    )
};

const styles = {
    stickyNavbar: {
        position: 'sticky',
        top: 75,
        zIndex: 999,
        width: '100%',
        padding: '1rem 0',
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transform: 'rotate(-7deg)',
        border: "20px solid transparent", // Set space for the border,
        borderTop: '#333', // Set the border color,

        // borderBottom: '3px solid black', // Simple 3px black border at the bottom
        // backgroundSize: 'cover', // Ensure the background covers the navbar
        // backgroundPosition: 'center', // Center the image in the navbar
        // backgroundRepeat: 'no-repeat', //
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
        fontSize: '32px',
        marginLeft: '-10%',
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
        fontSize: '24px',
        color: 'black',
        marginLeft: '10rem'
    },
};

export default NavbarComponent;
