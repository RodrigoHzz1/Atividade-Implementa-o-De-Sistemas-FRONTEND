import React from 'react';
import Header from '../../componentes/Header/header';
import './homeFuncionario.css';

export default function HomeFuncionario({ user, onLogout, onNavigate }) {
  // KPIs operacionais de visão rápida
  const quickStats = [
    { title: 'Chamados Críticos', value: '03', status: 'danger' },
    { title: 'Em Andamento', value: '12', status: 'warning' },
    { title: 'Clientes Ativos', value: '48', status: 'success' },
    { title: 'SLA Cumprido', value: '98.5%', status: 'info' },
  ];

  // Feed de atualizações e chamados recentes
  const atividadesRecentes = [
    { id: '#1024', desc: 'Queda de link de rede na Empresa Alfa', tempo: 'Há 10 min' },
    { id: '#1023', desc: 'Troca de SSD - Máquina Finanças 02', tempo: 'Há 45 min' },
    { id: '#1022', desc: 'Renovação de Licença Microsoft 365', tempo: 'Há 2 horas' },
  ];

  return (
    <div className="home-funcionario-container">
      <Header user={user} onLogout={onLogout} />

      <main className="home-funcionario-content">
        {/* Banner de Boas-Vindas */}
        <div className="welcome-banner">
          <div>
            <h1>Painel do Funcionário</h1>
            <p>
              Bem-vindo de volta, <strong>{user?.nome || 'Técnico TechNexus'}</strong>. Acompanhe a operação do sistema.
            </p>
          </div>
          <button className="btn-primary-glow" onClick={() => onNavigate('chamados')}>
            + Abrir Chamado
          </button>
        </div>

        {/* Resumo Métricas Rápida */}
        <div className="stats-row">
          {quickStats.map((stat, idx) => (
            <div key={idx} className={`stat-card status-${stat.status}`}>
              <span className="stat-title">{stat.title}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Painel Principal: Módulos de Trabalho + Feed */}
        <div className="main-dashboard-grid">
          {/* Módulos Operacionais */}
          <section className="modules-section">
            <h2>Módulos do Sistema</h2>
            <div className="modules-grid">
              <div className="module-card" onClick={() => onNavigate('chamados')}>
                <div className="module-icon">🎫</div>
                <h3>Gestão de Chamados</h3>
                <p>Visualizar, atribuir e atualizar chamados de suporte técnico.</p>
                <span className="module-link">Acessar módulo →</span>
              </div>

              <div className="module-card" onClick={() => onNavigate('clientes')}>
                <div className="module-icon">👥</div>
                <h3>Base de Clientes</h3>
                <p>Gerenciar contas de clientes, contratos e histórico de contatos.</p>
                <span className="module-link">Acessar módulo →</span>
              </div>

              <div className="module-card" onClick={() => onNavigate('relatorio')}>
                <div className="module-icon">📊</div>
                <h3>Relatórios Operacionais</h3>
                <p>Métricas de atendimento, SLA e desempenho da equipe.</p>
                <span className="module-link">Acessar módulo →</span>
              </div>
            </div>
          </section>

          {/* Feed de Ocorrências Recentes */}
          <aside className="activity-aside">
            <h2>Últimas Atualizações</h2>
            <div className="activity-list">
              {atividadesRecentes.map((item) => (
                <div key={item.id} className="activity-item">
                  <div className="activity-header">
                    <span className="activity-id">{item.id}</span>
                    <span className="activity-time">{item.tempo}</span>
                  </div>
                  <p className="activity-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}