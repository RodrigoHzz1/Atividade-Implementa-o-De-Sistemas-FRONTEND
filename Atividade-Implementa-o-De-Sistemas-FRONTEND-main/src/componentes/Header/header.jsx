import React from 'react';
import Logo from '../Logo/logo';
import './header.css';

export default function Header({ user, onLogout }) {
  // Pega as propriedades do objeto 'user' ou aplica os valores padrão do sistema
  const nomeExibicao = user?.nome || 'Carlos Oliveira';
  const cargoExibicao = user?.cargo || user?.nivel || 'Técnico Nível 1';

  return (
    <header className="app-header">
      <Logo variant="full" />
      
      <div className="header-actions">
        <div className="user-profile">
          <span className="user-name">{nomeExibicao}</span>
          <span className="user-role">{cargoExibicao}</span>
        </div>

        <button onClick={onLogout} className="btn-logout">
          Sair
        </button>
      </div>
    </header>
  );
}