import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // État du menu hamburger

    const handleSignIn = () => {
        navigate('/login'); // Redirection vers la page de connexion
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle du menu hamburger
    };

    return (
        <div className="navbar">
            <div className="container">
                <Link to="/" style={{ textDecoration: 'none', color: active || pathname !== "/" ? 'white' : 'white' }}>
                    <div className="logo">
                        <span className="text">AlloFix</span>
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
                    {pathname === "/dashboard" || pathname === "/messages"  || pathname === "/profile"|| pathname === "/orders"|| pathname.startsWith('/dashboard/') ? (
                        // Affichage des icônes home, user et message
                        <>
                            <span onClick={() => navigate('/dashboard')} className="icon home-icon">
                                <i className="fas fa-home"></i>
                            </span>
                            <span onClick={() => navigate('/messages')} className="icon message-icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span onClick={() => navigate('/orders')} className="icon history-icon">
                                <i className="fas fa-history"></i> {/* Icône Historique */}
                            </span>
                            <span onClick={() => navigate('/profile')} className="icon user-icon">
                                <i className="fas fa-user"></i>
                            </span>
                        </>
                    ) : (
                        // Affichage des éléments par défaut
                        <>
                            <span onClick={() => navigate('/services')}>Nos Services</span>
                            <span>Français</span>
                            <span onClick={handleSignIn} style={{ cursor: 'pointer' }}>Sign in</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
