import React from 'react';
import { ArrowRight, Zap, Code, Rocket } from 'lucide-react';
import SoftwareVisualization from './SplineScene';
import { companyInfo, stats } from '../data/mock';

const HeroSection = () => {
  return (
    <section id="hero" className="dark-full-container" style={{ minHeight: '100vh' }}>
      <div className="dark-content-container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          minHeight: '100vh',
          gap: '60px',
          flexDirection: 'row'
        }}
        className="hero-layout"
        >
          {/* Left side - Content */}
          <div style={{ flex: 1, paddingRight: '40px' }} className="hero-content">
            <div style={{ marginBottom: '24px' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                background: 'rgba(0, 255, 209, 0.1)',
                padding: '8px 16px',
                marginBottom: '32px'
              }}>
                <Zap size={16} color="#00FFD1" />
                <span className="body-small" style={{ color: '#00FFD1' }}>
                  Futuristic Software Solutions
                </span>
              </div>
              
              <h1 className="display-huge" style={{ marginBottom: '24px' }}>
                {companyInfo.tagline}
              </h1>
              
              <p className="body-large" style={{ 
                marginBottom: '40px',
                maxWidth: '600px',
                color: 'var(--text-secondary)'
              }}>
                {companyInfo.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              marginBottom: '60px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
            className="hero-buttons"
            >
              <button className="btn-primary">
                Start Your Project
                <ArrowRight size={20} />
              </button>
              
              <button className="btn-secondary">
                View Portfolio
                <Code size={20} />
              </button>
            </div>

            {/* Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '40px',
              marginTop: '60px'
            }}
            className="hero-stats"
            >
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div className="display-medium" style={{ color: '#00FFD1', marginBottom: '8px' }}>
                    {stat.value}
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Software Development Visualization */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
               className="hero-visualization">
            <SoftwareVisualization />
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .hero-layout {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 40px 0 !important;
            min-height: auto !important;
          }
          
          .hero-content {
            flex: none !important;
            padding-right: 0 !important;
            text-align: center;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100%;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            margin-top: 40px !important;
          }
          
          .hero-visualization {
            flex: none !important;
            width: 100%;
            height: 400px;
            overflow: hidden;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-layout {
            gap: 40px !important;
          }
          
          .hero-content {
            padding-right: 20px !important;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;