import React from 'react';
import StatusBadge from '../../componentes/StatusBadge/statusBadge';
import './chamados.css';

export default function Chamados() {
  const listaChamados = [
    { id: '1024', cliente: 'Empresa Alfa', titulo: 'Instabilidade na rede', status: 'Em Andamento', prioridade: 'Alta', data: '09/09/2026' },
    { id: '1023', cliente: 'TechCorp', titulo: 'Erro ao emitir nota fiscal', status: 'Aberto', prioridade: 'Crítica', data: '09/09/2026' },
    { id: '1022', cliente: 'Mercado Beta', titulo: 'Substituição de monitor falho', status: 'Concluido', prioridade: 'Baixa', data: '08/09/2026' },
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Fila de Chamados</h1>
        <p>Lista consolidada de todas as solicitações do sistema.</p>
      </header>

      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Título</th>
              <th>Prioridade</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {listaChamados.map((item) => (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td>{item.cliente}</td>
                <td>{item.titulo}</td>
                <td>{item.prioridade}</td>
                <td><StatusBadge status={item.status} /></td>
                <td>{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}