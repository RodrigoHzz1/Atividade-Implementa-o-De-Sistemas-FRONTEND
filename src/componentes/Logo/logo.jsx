import React from "react";
import logoImg from "../../assets/logo.png";
import "./logo.css";

export default function Logo() {
  return (
    <div className="logo-brand">
      <img src={logoImg} alt="TechNexus Icon" className="logo-icon" />
      <div className="logo-text-wrapper">
        <span className="logo-title">TechNexus</span>
        <span className="logo-subtitle">TECNOLOGIA QUE CONECTA VOCÊ</span>
      </div>
    </div>
  );
}