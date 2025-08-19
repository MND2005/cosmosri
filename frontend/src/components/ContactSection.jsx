import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { companyInfo, contactForm } from '../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="dark-full-container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="dark-content-container">
        {/* Contact Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            background: 'rgba(0, 255, 209, 0.1)',
            padding: '8px 16px',
            marginBottom: '24px'
          }}>
            <Mail size={16} color="#00FFD1" />
            <span className="body-small" style={{ color: '#00FFD1' }}>
              Let's Connect
            </span>
          </div>
          
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Ready to Start Your Project?
          </h2>
          
          <p className="body-large" style={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Get in touch with us today and let's discuss how we can bring your vision to life
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px',
          alignItems: 'start'
        }}
        className="contact-grid"
        >
          {/* Contact Information */}
          <div>
            <h3 className="heading-2" style={{ marginBottom: '40px' }}>
              Get In Touch
            </h3>
            
            <div style={{ marginBottom: '40px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={24} color="#00FFD1" />
                </div>
                <div>
                  <div className="body-medium" style={{ marginBottom: '4px' }}>Email</div>
                  <div className="body-large" style={{ color: '#00FFD1' }}>
                    {companyInfo.contact.email}
                  </div>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={24} color="#00FFD1" />
                </div>
                <div>
                  <div className="body-medium" style={{ marginBottom: '4px' }}>Phone</div>
                  <div className="body-large" style={{ color: '#00FFD1' }}>
                    {companyInfo.contact.phone}
                  </div>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(0, 255, 209, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={24} color="#00FFD1" />
                </div>
                <div>
                  <div className="body-medium" style={{ marginBottom: '4px' }}>Address</div>
                  <div className="body-large" style={{ color: '#00FFD1' }}>
                    {companyInfo.contact.address}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ 
              background: 'var(--bg-secondary)',
              padding: '32px',
              border: '1px solid var(--border-subtle)'
            }}>
              <h4 className="heading-3" style={{ marginBottom: '16px' }}>
                Why Choose Cosmo?
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <CheckCircle size={16} color="#00FFD1" />
                  <span className="body-small">Expert team with 8+ years experience</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <CheckCircle size={16} color="#00FFD1" />
                  <span className="body-small">Agile development methodology</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <CheckCircle size={16} color="#00FFD1" />
                  <span className="body-small">24/7 support and maintenance</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px'
                }}>
                  <CheckCircle size={16} color="#00FFD1" />
                  <span className="body-small">On-time delivery guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div style={{ 
                textAlign: 'center',
                background: 'rgba(0, 255, 209, 0.1)',
                padding: '60px 40px',
                border: '1px solid #00FFD1'
              }}>
                <CheckCircle size={64} color="#00FFD1" style={{ marginBottom: '24px' }} />
                <h3 className="heading-2" style={{ marginBottom: '16px', color: '#00FFD1' }}>
                  Message Sent!
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ 
                background: 'var(--bg-secondary)',
                padding: '40px',
                border: '1px solid var(--border-subtle)'
              }}>
                <h3 className="heading-2" style={{ marginBottom: '32px' }}>
                  Send us a message
                </h3>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <label className="body-medium" style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      color: 'var(--text-primary)'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        fontFamily: 'JetBrains Mono, monospace'
                      }}
                    />
                  </div>

                  <div>
                    <label className="body-medium" style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      color: 'var(--text-primary)'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        fontFamily: 'JetBrains Mono, monospace'
                      }}
                    />
                  </div>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <label className="body-medium" style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      color: 'var(--text-primary)'
                    }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        fontFamily: 'JetBrains Mono, monospace'
                      }}
                    />
                  </div>

                  <div>
                    <label className="body-medium" style={{ 
                      display: 'block', 
                      marginBottom: '8px',
                      color: 'var(--text-primary)'
                    }}>
                      Project Type *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        fontFamily: 'JetBrains Mono, monospace'
                      }}
                    >
                      <option value="">Select project type</option>
                      {contactForm.fields.find(f => f.name === 'project').options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label className="body-medium" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}>
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}
                  >
                    <option value="">Select budget range</option>
                    {contactForm.fields.find(f => f.name === 'budget').options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label className="body-medium" style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}>
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      fontFamily: 'JetBrains Mono, monospace',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mobile-specific styles */}
        <style jsx>{`
          @media (max-width: 767px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ContactSection;