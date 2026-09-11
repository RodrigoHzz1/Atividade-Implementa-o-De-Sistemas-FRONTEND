import React from 'react';
import Header from '../../componentes/Header/header';
import './detalhesChamado.css';

export default function DetalhesChamado({ user, onLogout, onBack }) {
  // Dados mockados do chamado
  const chamado = {
    id: '#1024',
    titulo: 'Instabilidade na rede de internet',
    status: 'Em Andamento',
    cliente: 'Empresa Alfa',
    abertoEm: '09/09/2026 às 10:15',
    categoria: 'Rede / Conectividade',
    tecnico: 'Carlos Silva',
    descricao:
      'Lentidão frequente no setor financeiro durante o período da tarde, impactando o carregamento dos sistemas de pagamentos.'
  };

  return (
    <div className="detalhes-chamado-container">
      <Header user={user} onLogout={onLogout} />

      <main className="detalhes-chamado-content">
        <button className="btn-voltar" onClick={onBack}>
          ← Voltar
        </button>

        <div className="detalhes-card">
          {/* Cabeçalho do Card */}
          <div className="detalhes-header">
            <div>
              <span className="chamado-id-tag">Chamado {chamado.id}</span>
              <h1>{chamado.titulo}</h1>
            </div>
            <span className="status-badge status-em-andamento">
              {chamado.status}
            </span>
          </div>

          {/* Grid de Informações (Sem Prioridade) */}
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Cliente</span>
              <strong className="info-value">{chamado.cliente}</strong>
            </div>

            <div className="info-item">
              <span className="info-label">Aberto em</span>
              <strong className="info-value">{chamado.abertoEm}</strong>
            </div>

            <div className="info-item">
              <span className="info-label">Categoria</span>
              <strong className="info-value">{chamado.categoria}</strong>
            </div>

            <div className="info-item">
              <span className="info-label">Técnico Responsável</span>
              <strong className="info-value">{chamado.tecnico}</strong>
            </div>
          </div>

          {/* Seção de Descrição */}
          <div className="descricao-section">
            <h2>Descrição do Problema</h2>
            <p>{chamado.descricao}</p>
          </div>
        </div>
      </main>
    </div>
  );
}