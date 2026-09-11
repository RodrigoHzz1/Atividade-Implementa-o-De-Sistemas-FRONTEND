import React from 'react';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Dashboard Operacional</h1>
        <p>Métricas gerais do sistema e tempo médio de resposta.</p>
      </header>

      <div className="kpi-grid">
        <div className="kpi-card">
          <span className="kpi-title">Chamados Abertos</span>
          <span className="kpi-value text-red">12</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-title">Em Andamento</span>
          <span className="kpi-value text-yellow">28</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-title">Resolvidos Hoje</span>
          <span className="kpi-value text-green">15</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-title">Tempo Médio SLA</span>
          <span className="kpi-value">1h 45m</span>
        </div>
      </div>
    </div>
  );
}