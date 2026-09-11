import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} TechNexus. Todos os direitos reservados.</p>
    </footer>
  );
}