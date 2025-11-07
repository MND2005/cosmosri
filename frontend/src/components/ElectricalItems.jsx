import React from 'react';
import { Zap, Check } from 'lucide-react';
import { electricalItems } from '../data/mock';

const ElectricalItems = () => {
  return (
    <section className="dark-full-container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
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
            <Zap size={16} color="#00FFD1" />
            <span className="body-small" style={{ color: '#00FFD1' }}>
              Electrical Solutions
            </span>
          </div>
          
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Smart Electrical Items
          </h2>
          
          <p className="body-large" style={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Discover our range of smart electrical products designed to enhance your home or office with modern technology and energy efficiency.
          </p>
        </div>

        {/* Electrical Items Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px' 
        }}
        className="electrical-items-grid"
        >
          {electricalItems.map((item) => {
            return (
              <div 
                key={item.id} 
                className="dark-hover"
                style={{ 
                  background: 'var(--bg-secondary)',
                  padding: '40px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                {/* Product Image */}
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: '8px'
                }}>
                  <img 
                    src={item.image}
                    alt={item.name}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
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
                    <Zap size={32} color="#00FFD1" />
                  </div>
                  
                  <h3 className="heading-2" style={{ marginBottom: '16px' }}>
                    {item.name}
                  </h3>
                  
                  <p className="body-medium" style={{ 
                    marginBottom: '16px',
                    color: 'var(--text-secondary)'
                  }}>
                    {item.description}
                  </p>
                  
                  <div className="heading-3" style={{ 
                    color: '#00FFD1', 
                    marginBottom: '24px'
                  }}>
                    {item.price}
                  </div>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '32px' }}>
                  {item.features.map((feature, index) => (
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
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile-specific styles */}
        <style jsx>{`
          @media (max-width: 767px) {
            .electrical-items-grid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ElectricalItems;