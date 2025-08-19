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
          gap: '60px'
        }}>
          {/* Left side - Content */}
          <div style={{ flex: 1, paddingRight: '40px' }}>
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
              alignItems: 'center'
            }}>
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
            }}>
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
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SoftwareVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;