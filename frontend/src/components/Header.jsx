import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      // If we're not on the home page, navigate to home first
      navigate('/');
      // Wait a bit for the navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <header className="dark-header">
        <div 
          className="dark-logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          COSMO
        </div>
        
        {/* Desktop Navigation */}
        <nav className="dark-nav">
          <button 
            onClick={() => navigate('/')}
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
            onClick={() => navigate('/electrical-items')}
            className="dark-nav-link"
          >
            Electrical Items
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="dark-nav-link"
          >
            Contact
          </button>
        </nav>
        
        {/* Desktop CTA Button */}
        <button className="btn-primary desktop-cta">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#00FFD1',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 9,
          padding: '20px',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <button 
              onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
              }}
              className="dark-nav-link"
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="dark-nav-link"
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px'
              }}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="dark-nav-link"
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px'
              }}
            >
              About
            </button>
            <button 
              onClick={() => {
                navigate('/electrical-items');
                setIsMobileMenuOpen(false);
              }}
              className="dark-nav-link"
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px'
              }}
            >
              Electrical Items
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="dark-nav-link"
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px'
              }}
            >
              Contact
            </button>
            <button className="btn-primary" style={{ marginTop: '20px' }}>
              Get Started
            </button>
          </nav>
        </div>
      )}

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .dark-nav, .desktop-cta {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;