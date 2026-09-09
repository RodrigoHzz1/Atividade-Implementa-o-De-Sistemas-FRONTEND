import React from "react";
import StatusBadge from "../../componentes/StatusBadge/StatusBadge";
import "./detalhesChamado.css";

export default function DetalhesChamado({ onBack }) {
  return (
    <div className="page-container">
      <button className="btn-back" onClick={onBack}>&larr; Voltar</button>

      <div className="detail-card">
        <div className="detail-header">
          <div>
            <span className="ticket-number">Chamado #1024</span>
            <h1>Instabilidade na rede de internet</h1>
          </div>
          <StatusBadge status="Em Andamento" />
        </div>

        <div className="detail-grid">
          <div><strong>Cliente:</strong> Empresa Alfa</div>
          <div><strong>Aberto em:</strong> 09/09/2026 às 10:15</div>
          <div><strong>Prioridade:</strong> Alta</div>
          <div><strong>Técnico Responsável:</strong> Carlos Silva</div>
        </div>

        <div className="detail-description">
          <h3>Descrição</h3>
          <p>Lentidão frequente no setor financeiro durante o período da tarde, impactando o carregamento dos sistemas de pagamentos.</p>
        </div>
      </div>
    </div>
  );
}