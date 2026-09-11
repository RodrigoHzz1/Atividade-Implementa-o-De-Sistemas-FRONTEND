import React from 'react';
import './moduleCard.css';

export default function ModuleCard({ title, description, icon, onClick }) {
  return (
    <div className="module-card" onClick={onClick}>
      <div className="module-icon">{icon}</div>
      <h3 className="module-title">{title}</h3>
      <p className="module-desc">{description}</p>
    </div>
  );
}