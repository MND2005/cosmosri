import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="dark-full-container" style={{ 
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      <div className="dark-content-container">
        {/* Main Footer Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Company Info */}
          <div>
            <div className="dark-logo" style={{ fontSize: '32px', marginBottom: '24px' }}>
              COSMO
            </div>
            <p className="body-medium" style={{ 
              marginBottom: '32px',
              color: 'var(--text-secondary)',
              maxWidth: '300px'
            }}>
              {companyInfo.description}
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'rgba(0, 255, 209, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <Github size={20} color="#00FFD1" />
              </div>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'rgba(0, 255, 209, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <Linkedin size={20} color="#00FFD1" />
              </div>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'rgba(0, 255, 209, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <Twitter size={20} color="#00FFD1" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '24px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={() => scrollToSection('hero')}
                className="body-medium"
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00FFD1'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="body-medium"
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00FFD1'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="body-medium"
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00FFD1'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="body-medium"
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00FFD1'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '24px' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                Web Development
              </div>
              <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                Mobile Development
              </div>
              <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                Enterprise Solutions
              </div>
              <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                AI Integration
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3" style={{ marginBottom: '24px' }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={16} color="#00FFD1" />
                <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {companyInfo.contact.email}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={16} color="#00FFD1" />
                <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {companyInfo.contact.phone}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={16} color="#00FFD1" style={{ marginTop: '2px' }} />
                <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {companyInfo.contact.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div className="body-small" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} Cosmo. All rights reserved.
          </div>
          
          <div style={{ display: 'flex', gap: '32px' }}>
            <div className="body-small" style={{ 
              color: 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}>
              Privacy Policy
            </div>
            <div className="body-small" style={{ 
              color: 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}>
              Terms of Service
            </div>
            <div className="body-small" style={{ 
              color: 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}>
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;