import React from 'react';
import Header from '../../componentes/Header/header';
import './homeFuncionario.css';

export default function HomeFuncionario({ user, onLogout, onNavigate }) {
  const ultimasAtualizacoes = [
    {
      id: '#1024',
      titulo: 'Queda de link de rede na Empresa Alfa',
      tempo: 'Há 10 min'
    },
    {
      id: '#1023',
      titulo: 'Troca de SSD - Máquina Finanças 02',
      tempo: 'Há 45 min'
    },
    {
      id: '#1022',
      titulo: 'Renovação de Licença Microsoft 365',
      tempo: 'Há 2 horas'
    }
  ];

  return (
    <div className="home-funcionario-container">
      <Header user={user} onLogout={onLogout} />

      <main className="home-funcionario-content">
        {/* Banner principal */}
        <div className="portal-banner-funcionario">
          <div>
            <h1>Painel do Funcionário</h1>
            <p>
              Bem-vindo de volta, <strong className="user-highlight">{user?.nome || 'Técnico'}</strong> ({user?.cargo || user?.nivel || 'Técnico Nível 1'}). Acompanhe a operação do sistema.
            </p>
          </div>
        </div>

        {/* Métricas Principais */}
        <div className="metrics-grid">
          <div className="metric-card metric-criticos">
            <span className="metric-label">Chamados Críticos</span>
            <span className="metric-value">03</span>
          </div>
          <div className="metric-card metric-andamento">
            <span className="metric-label">Em Andamento</span>
            <span className="metric-value">12</span>
          </div>
          <div className="metric-card metric-clientes">
            <span className="metric-label">Colaboradores</span>
            <span className="metric-value">48</span>
          </div>
          <div className="metric-card metric-sla">
            <span className="metric-label">SLA Cumprido</span>
            <span className="metric-value">98.5%</span>
          </div>
        </div>

        {/* Seção Principal: Módulos + Últimas Atualizações */}
        <div className="dashboard-main-grid">
          {/* Módulos do Sistema */}
          <div className="modulos-container">
            <h2>Módulos do Sistema</h2>
            <div className="modulos-grid">
              {/* Gestão de Chamados */}
              <div 
                className="modulo-card" 
                onClick={() => onNavigate && onNavigate('gestaoChamados')}
              >
                <div className="modulo-icon">🎫</div>
                <h3>Gestão de Chamados</h3>
                <p>Visualizar, atribuir e atualizar chamados de suporte técnico.</p>
                <span className="modulo-link">Acessar módulo →</span>
              </div>

              {/* Base de Colaboradores */}
              <div 
                className="modulo-card"
                onClick={() => onNavigate && onNavigate('baseClientes')}
              >
                <div className="modulo-icon">👥</div>
                <h3>Base de Colaboradores</h3>
                <p>Gerenciar cadastro de funcionários, e-mails e setores.</p>
                <span className="modulo-link">Acessar módulo →</span>
              </div>

              {/* Relatórios Operacionais */}
              <div 
                className="modulo-card"
                onClick={() => onNavigate && onNavigate('relatorios')}
              >
                <div className="modulo-icon">📊</div>
                <h3>Relatórios Operacionais</h3>
                <p>Métricas de atendimento, SLA e desempenho da equipe.</p>
                <span className="modulo-link">Acessar módulo →</span>
              </div>
            </div>
          </div>

          {/* Últimas Atualizações */}
          <aside className="updates-panel">
            <div className="updates-header">
              <h2>Últimas Atualizações</h2>
              <button 
                className="btn-ver-todas"
                onClick={() => onNavigate && onNavigate('ultimasAtualizacoes')}
              >
                Ver todas →
              </button>
            </div>

            <div className="updates-list">
              {ultimasAtualizacoes.map((item) => (
                <div 
                  key={item.id} 
                  className="update-item"
                  onClick={() => onNavigate && onNavigate('detalhesChamado', item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="update-item-top">
                    <span className="update-id">{item.id}</span>
                    <span className="update-time">{item.tempo}</span>
                  </div>
                  <p className="update-title">{item.titulo}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}