import React from 'react';
import Header from '../../componentes/Header/header';
import Sidebar from '../../componentes/Sidebar/sidebar';
import ModuleCard from '../../componentes/ModuleCard/moduleCard';
import Footer from '../../componentes/Footer/footer';
import './homeFuncionario.css';

export default function HomeFuncionario({ user, onLogout, onNavigate }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'chamados', label: 'Chamados', icon: '🎫' },
    { id: 'clientes', label: 'Clientes', icon: '👥' },
    { id: 'equipamentos', label: 'Equipamentos', icon: '💻' },
    { id: 'relatorio', label: 'Relatórios', icon: '📈' },
  ];

  return (
    <div className="layout-container">
      <Header user={user} onLogout={onLogout} />
      <div className="layout-body">
        <Sidebar items={menuItems} activeItem="dashboard" onItemClick={onNavigate} />
        <main className="main-content">
          <div className="welcome-section">
            <h1>Painel do Funcionário</h1>
            <p>Bem-vindo de volta, {user?.nome || 'Técnico'}. Selecione um módulo para iniciar.</p>
          </div>
          <div className="modules-grid">
            <ModuleCard
              title="Gestão de Chamados"
              description="Visualizar, atribuir e atualizar chamados de suporte técnico."
              icon="🎫"
              onClick={() => onNavigate('chamados')}
            />
            <ModuleCard
              title="Base de Clientes"
              description="Gerenciar contas de clientes, contratos e histórico de contatos."
              icon="👥"
              onClick={() => onNavigate('clientes')}
            />
            <ModuleCard
              title="Inventário de Equipamentos"
              description="Controle de hardware, licenças de software e manutenções."
              icon="💻"
              onClick={() => onNavigate('equipamentos')}
            />
            <ModuleCard
              title="Relatórios Operacionais"
              description="Métricas de atendimento, SLA e desempenho da equipe."
              icon="📈"
              onClick={() => onNavigate('relatorio')}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}