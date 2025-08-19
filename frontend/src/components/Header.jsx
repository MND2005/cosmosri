import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="dark-header">
      <div className="dark-logo">
        COSMO
      </div>
      
      <nav className="dark-nav">
        <button 
          onClick={() => scrollToSection('hero')}
          className="dark-nav-link"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="dark-nav-link"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="dark-nav-link"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="dark-nav-link"
        >
          Contact
        </button>
      </nav>
      
      <button className="btn-primary">
        Get Started
      </button>
    </header>
  );
};

export default Header;