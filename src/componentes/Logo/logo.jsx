import React from 'react';
<<<<<<< HEAD
import logoImg from '../../assets/logo.png';
=======
import logoImg from '../../assets/logo.jpg';
>>>>>>> 8fe4f96971d90bc9c7ae18dbfae581ae537f6ba6
import './logo.css';

export default function Logo({ variant = 'full' }) {
  return (
    <div className="technexus-logo">
      <img src={logoImg} alt="TechNexus Logo" className="logo-image" />
      {variant === 'full' && (
        <div className="logo-text-group">
          <span className="brand-name">TechNexus</span>
          <span className="brand-tagline">TECNOLOGIA QUE CONECTA VOCÊ</span>
        </div>
      )}
    </div>
  );
}