import React from 'react';
import { Target, Users, Award, Rocket } from 'lucide-react';
import { team, testimonials } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="dark-full-container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="dark-content-container">
        {/* About Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            background: 'rgba(0, 255, 209, 0.1)',
            padding: '8px 16px',
            marginBottom: '24px'
          }}>
            <Target size={16} color="#00FFD1" />
            <span className="body-small" style={{ color: '#00FFD1' }}>
              About Cosmo
            </span>
          </div>
          
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Building Tomorrow's Software Today
          </h2>
          
          <p className="body-large" style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Founded with a vision to bridge the gap between innovative ideas and powerful digital solutions, 
            Cosmo has been at the forefront of software development for over 8 years.
          </p>
        </div>

        {/* Mission & Values */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          marginBottom: '100px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'rgba(0, 255, 209, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Rocket size={40} color="#00FFD1" />
            </div>
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>Innovation First</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              We embrace cutting-edge technologies and methodologies to deliver solutions that are ahead of the curve.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'rgba(0, 255, 209, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Users size={40} color="#00FFD1" />
            </div>
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>Client-Centric</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Your success is our success. We work closely with clients to understand their unique needs and goals.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'rgba(0, 255, 209, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <Award size={40} color="#00FFD1" />
            </div>
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>Quality Driven</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              We maintain the highest standards of code quality, security, and performance in every project.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div style={{ marginBottom: '100px' }}>
          <h3 className="display-medium" style={{ textAlign: 'center', marginBottom: '60px' }}>
            Meet Our Team
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            {team.map((member) => (
              <div 
                key={member.id}
                className="dark-hover"
                style={{ 
                  textAlign: 'center',
                  background: 'var(--bg-secondary)',
                  padding: '40px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '24px'
                  }}
                />
                <h4 className="heading-3" style={{ marginBottom: '8px' }}>
                  {member.name}
                </h4>
                <p className="body-medium" style={{ 
                  color: '#00FFD1', 
                  marginBottom: '16px',
                  fontWeight: '600'
                }}>
                  {member.role}
                </p>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="display-medium" style={{ textAlign: 'center', marginBottom: '60px' }}>
            What Our Clients Say
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px' 
          }}>
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="dark-hover"
                style={{ 
                  background: 'var(--bg-secondary)',
                  padding: '40px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  {'★'.repeat(testimonial.rating).split('').map((star, index) => (
                    <span key={index} style={{ color: '#00FFD1', fontSize: '20px' }}>
                      {star}
                    </span>
                  ))}
                </div>
                
                <p className="body-medium" style={{ 
                  marginBottom: '24px',
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="heading-3" style={{ marginBottom: '4px' }}>
                    {testimonial.name}
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;