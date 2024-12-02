import React, { useState } from 'react'
import './Navbar.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const currentUser = {
        id: 1,
        username: "Halima",
        isSeller: true,
    };
    const displayItems = false;
    const handleClick = () => {
        navigate('/gigs')
    }
    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <Link to={"/"} style={{textDecoration : 'none', color: active || pathname !== "/" ?'black' : 'white'}} >
                    <div className='logo'>
                        <span className="text">Allo-Fix</span>
                        <span className="dot">.</span>
                    </div>

                </Link>
                <div className="links">
                    <span onClick={handleClick}>Nos Services</span>
                    <span>Contactez-nous</span>
                    <span>Français</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {
                        currentUser ? (
                            <div className='user' onClick={() => setOpen(!open)}>
                                <img
                                    src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <span>{currentUser?.username}</span>
                                {
                                    open && <div className="options">
                                        {currentUser.isSeller && (
                                            <>
                                                <Link className="link" to="/gigs">
                                                    Services
                                                </Link>
                                                {/* <Link className="link" to="/add">
                                                    Add New Gig
                                                </Link> */}
                                            </>
                                        )}
                                        <Link className="link" to="/orders">
                                            Commandes
                                        </Link>
                                        <Link className="link" to="/messages">
                                            Messages
                                        </Link>
                                        <Link className="link" to="/">
                                            Déconnexion
                                        </Link>

                                    </div>
                                }
                            </div>
                        ) : (
                            <>
                                <span>Sign in</span>
                                <Link className="link" to="/register">
                                    <button>Join</button>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
            {
                (active && pathname !== "/" && displayItems) && (
                    <>
                        <hr />
                        <div className='menu'>
                            <Link className="link menuLink" to="/">
                                Graphics & Design
                            </Link>
                            <Link className="link menuLink" to="/">
                                Video & Animation
                            </Link>
                            <Link className="link menuLink" to="/">
                                Writing & Translation
                            </Link>
                            <Link className="link menuLink" to="/">
                                AI Services
                            </Link>
                            <Link className="link menuLink" to="/">
                                Digital Marketing
                            </Link>
                            <Link className="link menuLink" to="/">
                                Music & Audio
                            </Link>
                            <Link className="link menuLink" to="/">
                                Programming & Tech
                            </Link>
                            <Link className="link menuLink" to="/">
                                Business
                            </Link>
                            <Link className="link menuLink" to="/">
                                Lifestyle
                            </Link>

                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navbar
