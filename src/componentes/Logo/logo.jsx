import React from 'react';
import './logo.css';

export default function Logo({ variant = 'full', className = '' }) {
  return (
    <div className={`logo-container ${className}`}>
      {variant === 'full' ? (
        <div className="logo-full">
          <div className="logo-icon">
            <span className="logo-symbol">TN</span>
          </div>
          <div className="logo-text">
            <span className="logo-brand">TECHNEXUS</span>
            <span className="logo-tagline">TECNOLOGIA QUE CONECTA VOCÊ</span>
          </div>
        </div>
      ) : (
        <div className="logo-icon">
          <span className="logo-symbol">TN</span>
        </div>
      )}
    </div>
  );
}