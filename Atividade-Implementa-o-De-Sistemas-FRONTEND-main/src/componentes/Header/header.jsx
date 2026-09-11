import React from 'react';
import Logo from '../Logo/logo';
import './header.css';

export default function Header({ user, onLogout }) {
  return (
    <header className="app-header">
      <Logo variant="full" />
      
      <div className="header-actions">
        {user && (
          <div className="user-profile">
            <span className="user-name">{user.nome}</span>
            <span className="user-role">{user.cargo}</span>
          </div>
        )}
        <button onClick={onLogout} className="btn-logout">
          Sair
        </button>
      </div>
    </header>
  );
}