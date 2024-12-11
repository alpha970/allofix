import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // Etat du menu hamburger

    const handleSignIn = () => {
        navigate('/login'); // Redirection vers la page de connexion
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle du menu hamburger
    };

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <Link to="/" style={{ textDecoration: 'none', color: active || pathname !== "/" ? 'black' : 'white' }}>
                    <div className="logo">
                        <span className="text">Allo-Fix</span>
                        <span className="dot">.</span>
                    </div>
                </Link>
                
                {/* Menu Hamburger */}
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                
                {/* Links pour les autres pages */}
                <div className={`links ${menuOpen ? 'open' : ''}`}>
                    <span onClick={() => navigate('/services')}>Nos Services</span>
                    <span>Français</span>
                    {!(pathname === "/messages" || pathname.startsWith('/gig/')) && (
                        <span onClick={handleSignIn} style={{ cursor: 'pointer' }}>Sign in</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
