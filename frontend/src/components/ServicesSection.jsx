import React from 'react';
import { Globe, Smartphone, Building2, Brain, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Building2: Building2,
  Brain: Brain
};

const ServicesSection = () => {
  return (
    <section id="services" className="dark-full-container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="dark-content-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            background: 'rgba(0, 255, 209, 0.1)',
            padding: '8px 16px',
            marginBottom: '24px'
          }}>
            <Brain size={16} color="#00FFD1" />
            <span className="body-small" style={{ color: '#00FFD1' }}>
              Our Expertise
            </span>
          </div>
          
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Cutting-Edge Solutions
          </h2>
          
          <p className="body-large" style={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            We leverage the latest technologies to build software that scales with your business
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px' 
        }}
        className="services-grid"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div 
                key={service.id} 
                className="dark-hover"
                style={{ 
                  background: 'var(--bg-secondary)',
                  padding: '40px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    background: 'rgba(0, 255, 209, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <IconComponent size={32} color="#00FFD1" />
                  </div>
                  
                  <h3 className="heading-2" style={{ marginBottom: '16px' }}>
                    {service.title}
                  </h3>
                  
                  <p className="body-medium" style={{ 
                    marginBottom: '32px',
                    color: 'var(--text-secondary)'
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '32px' }}>
                  {service.features.map((feature, index) => (
                    <div 
                      key={index}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px',
                        marginBottom: '12px'
                      }}
                    >
                      <Check size={16} color="#00FFD1" />
                      <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="btn-secondary" style={{ width: '100%' }}>
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile-specific styles */}
        <style jsx>{`
          @media (max-width: 767px) {
            .services-grid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServicesSection;