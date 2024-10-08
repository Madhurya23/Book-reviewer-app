import {React,useState} from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function HomePage() {
    const navigate = useNavigate();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleExploreClick = () => {
        navigate('/login');  
    };
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    

    return (
        <div className="home-container">
            {/* App Name */}
            
            <div className="app-name-container">
                <span className="app-name">Fae Follio</span>
           
            </div>
            
            {/* Navbar */}
            <nav className="navbar">
            <div className="navbar-toggle" onClick={toggleNavbar}>
                    {isNavbarOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`navbar-list ${isNavbarOpen ? 'open' : ''}`}>
                    <li className="navbar-item" onClick={() => navigate('/')}>Home</li>
                    <li className="navbar-item" onClick={() => navigate('/genres')}>Genre</li>
                    <li className="navbar-item" onClick={() => navigate('/about')}>About Us</li>
                    <li className="navbar-item" onClick={() => navigate('/contact-us')}>Contact</li>
                    
                </ul>
                
            </nav>
            {/* Main Content */}
            <div className="content-wrapper">
                <div className="slideshow-box">
                    <h3>Authors' Sayings</h3>
                    <div className="slideshow">
                        <img src="/sld1.jpg" alt="Quote 1" className="slideshow-image" />
                        <img src="/sld2.jpg" alt="Quote 2" className="slideshow-image" />
                        <img src="/sld3.jpg" alt="Quote 3" className="slideshow-image" />
                        <img src="/sld4.jpg" alt="Quote 4" className="slideshow-image" />
                        <img src="/sld5.jpg" alt="Quote 5" className="slideshow-image" />
                    </div>
                </div>
                <div className="home-content">
                    <div className="logo-container">
                        <img src="/p5.jfif" alt="App Logo" className="app-logo" />
                    </div>
                    <p className="tagline">~Bookish Delights for fae at heart :)</p>
                    <button className="explore-button" onClick={handleExploreClick}>
                        Unlock Your Next Favorite Book
                    </button>
                </div>
                <div className="slideshow-box2">
                    <h3>Trending Books</h3>
                    <div className="slideshow2">
                        <img src="/sl1.avif" alt="Book 1" className="slideshow-image" />
                        <img src="/sl2.jpg" alt="Book 2" className="slideshow-image" />
                        <img src="/sl3.jpg" alt="Book 3" className="slideshow-image" />
                        <img src="/sl44.jpg" alt="Book 4" className="slideshow-image" />
                        <img src="/sl5.jfif" alt="Book 5" className="slideshow-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
