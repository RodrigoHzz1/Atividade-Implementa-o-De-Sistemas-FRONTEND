import React from 'react';
import StatusBadge from '../StatusBadge/statusBadge';
import './cardChamado.css';

export default function CardChamado({ chamado, onClick }) {
  return (
    <div className="card-chamado" onClick={onClick}>
      <div className="card-header">
        <span className="card-id">#{chamado.id}</span>
        <StatusBadge status={chamado.status} />
      </div>
      <h3 className="card-title">{chamado.titulo}</h3>
      <p className="card-desc">{chamado.descricao}</p>
      <div className="card-footer">
        <span className="card-date">{chamado.data}</span>
        <span className="card-priority">{chamado.prioridade}</span>
      </div>
    </div>
  );
}