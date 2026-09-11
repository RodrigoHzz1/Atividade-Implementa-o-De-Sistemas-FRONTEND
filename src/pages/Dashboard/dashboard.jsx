import React, { useState, useEffect } from 'react';
import Header from '../../componentes/Header/header';
import './dashboard.css';

export default function Dashboard({ user, onLogout, onBack }) {
  // Estado preparado para receber os dados do Back-end
  const [metrics, setMetrics] = useState({
    chamadosAbertos: 0,
    emAndamento: 0,
    resolvidosHoje: 0,
    tempoMedioSla: '--',
  });
  const [loading, setLoading] = useState(true);

  // Simulação de integração com a API (substitua pelo fetch/axios depois)
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Exemplo de chamada futura:
        // const response = await api.get('/dashboard/metrics');
        // setMetrics(response.data);

        // MOCK DE DADOS INICIAIS
        setTimeout(() => {
          setMetrics({
            chamadosAbertos: 12,
            emAndamento: 28,
            resolvidosHoje: 15,
            tempoMedioSla: '1h 45m',
          });
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error('Erro ao carregar métricas do dashboard:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Header com os botões funcionais de navegação e logout */}
      <Header user={user} onLogout={onLogout} showBack={true} onBack={onBack} />

      <main className="dashboard-content">
        {/* Navegação Manual no topo */}
        <div className="top-navigation">
          <button className="btn-back" onClick={onBack}>
            ← Voltar ao Início
          </button>
        </div>

        <header className="page-header">
          <h1>Dashboard Operacional</h1>
          <p>Métricas gerais do sistema e tempo médio de resposta.</p>
        </header>

        {loading ? (
          <div className="loading-state">Carregando métricas...</div>
        ) : (
          <div className="kpi-grid">
            <div className="kpi-card">
              <span className="kpi-title">Chamados Abertos</span>
              <span className="kpi-value text-red">{metrics.chamadosAbertos}</span>
            </div>

            <div className="kpi-card">
              <span className="kpi-title">Em Andamento</span>
              <span className="kpi-value text-yellow">{metrics.emAndamento}</span>
            </div>

            <div className="kpi-card">
              <span className="kpi-title">Resolvidos Hoje</span>
              <span className="kpi-value text-green">{metrics.resolvidosHoje}</span>
            </div>

            <div className="kpi-card">
              <span className="kpi-title">Tempo Médio SLA</span>
              <span className="kpi-value">{metrics.tempoMedioSla}</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}