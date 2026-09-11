import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import './relatorio.css';

export default function Relatorio({ user, onLogout, onBack, onNavigate }) {
  const [filtroPeriodo, setFiltroPeriodo] = useState('mes');

  // KPIs Analíticos
  const kpis = [
    { label: 'Total de Chamados', valor: '342', variacao: '+12%', status: 'positivo' },
    { label: 'Tempo Médio de Solução (TMR)', valor: '1h 45m', variacao: '-18m', status: 'positivo' },
    { label: 'Taxa de Cumprimento de SLA', valor: '98.5%', variacao: '+0.5%', status: 'positivo' },
    { label: 'Satisfação do Cliente (CSAT)', valor: '4.9 / 5.0', variacao: 'Estável', status: 'neutro' }
  ];

  // Dados da Tabela de Desempenho por Técnico
  const desempenhoTecnicos = [
    { nome: 'Carlos Silva', chamados: 84, sla: '99.1%', csat: '4.95 ★', status: 'Destaque' },
    { nome: 'Mariana Costa', chamados: 76, sla: '98.8%', csat: '4.90 ★', status: 'Excelente' },
    { nome: 'Roberto Santos', chamados: 62, sla: '97.5%', csat: '4.85 ★', status: 'Regular' },
    { nome: 'Aline Oliveira', chamados: 58, sla: '98.0%', csat: '4.88 ★', status: 'Excelente' }
  ];

  return (
    <div className="relatorio-container">
      <Header user={user} onLogout={onLogout} />

      <main className="relatorio-content">
        {/* Cabeçalho com Ações */}
        <div className="relatorio-header">
          <div>
            <button className="btn-voltar" onClick={onBack}>
              ← Voltar ao Painel
            </button>
            <h1>Relatórios Operacionais & Desempenho</h1>
            <p>Análise detalhada de SLAs, produtividade e métricas de atendimento.</p>
          </div>

          <div className="relatorio-actions">
            <select 
              value={filtroPeriodo} 
              onChange={(e) => setFiltroPeriodo(e.target.value)}
              className="select-filtro"
            >
              <option value="semana">Últimos 7 dias</option>
              <option value="mes">Este Mês</option>
              <option value="trimestre">Último Trimestre</option>
            </select>
          </div>
        </div>

        {/* Grid de KPIs */}
        <div className="kpi-grid">
          {kpis.map((kpi, index) => (
            <div key={index} className="kpi-card">
              <span className="kpi-label">{kpi.label}</span>
              <div className="kpi-body">
                <span className="kpi-valor">{kpi.valor}</span>
                <span className={`kpi-tag ${kpi.status}`}>{kpi.variacao}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seção Tabela de Desempenho da Equipe */}
        <section className="relatorio-section">
          <h2>Produtividade da Equipe Técnica</h2>
          <div className="table-wrapper">
            <table className="relatorio-table">
              <thead>
                <tr>
                  <th>Técnico</th>
                  <th>Chamados Resolvidos</th>
                  <th>Taxa de SLA</th>
                  <th>Avaliação Média</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {desempenhoTecnicos.map((item, index) => (
                  <tr key={index}>
                    <td className="col-nome">{item.nome}</td>
                    <td>{item.chamados}</td>
                    <td><span className="sla-highlight">{item.sla}</span></td>
                    <td><span className="csat-highlight">{item.csat}</span></td>
                    <td>
                      <span className={`badge-status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}