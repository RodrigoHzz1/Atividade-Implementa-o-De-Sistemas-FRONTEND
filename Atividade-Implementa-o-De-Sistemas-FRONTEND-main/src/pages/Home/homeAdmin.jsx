import React from 'react';
import Header from '../../componentes/Header/header';
import './homeAdmin.css';

export default function HomeAdmin({ user, onLogout, onNavigate }) {
  return (
    <div className="home-admin-container">
      <Header user={user} onLogout={onLogout} />

      <main className="home-admin-content">
        {/* Banner Admin */}
        <div className="portal-banner-admin">
          <div>
            <h1>Painel Administrativo</h1>
            <p>
              Bem-vindo de volta, <strong className="user-highlight">{user?.nome || 'Administrador'}</strong>. Gerencie colaboradores, permissões e acessos do sistema.
            </p>
          </div>
        </div>

        {/* Módulos de Gestão do Admin */}
        <div className="admin-modules-container">
          <h2>Gestão do Sistema</h2>
          
          <div className="admin-modules-grid">
            {/* Card: Cadastrar Funcionário */}
            <div 
              className="admin-module-card" 
              onClick={() => onNavigate && onNavigate('novoFuncionario')}
            >
              <div className="module-icon">👤➕</div>
              <h3>Cadastrar Funcionário</h3>
              <p>Adicione novos colaboradores, analistas e técnicos à equipe.</p>
              <span className="module-link">Cadastrar agora →</span>
            </div>

            {/* Card: Setores */}
            <div 
              className="admin-module-card"
              onClick={() => onNavigate && onNavigate('setores')}
            >
              <div className="module-icon">🏢</div>
              <h3>Setores</h3>
              <p>Gerencie os setores e departamentos cadastrados no sistema.</p>
              <span className="module-link">Gerenciar setores →</span>
            </div>

            {/* Card: Relatórios e Logs */}
            <div 
              className="admin-module-card"
              onClick={() => onNavigate && onNavigate('relatorios')}
            >
              <div className="module-icon">📊</div>
              <h3>Relatórios & Logs</h3>
              <p>Métricas operacionais, SLA geral e auditoria do sistema.</p>
              <span className="module-link">Ver relatórios →</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}