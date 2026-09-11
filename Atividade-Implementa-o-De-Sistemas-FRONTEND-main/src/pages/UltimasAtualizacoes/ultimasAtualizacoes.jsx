import React from 'react';
import Header from '../../componentes/Header/header';
import './ultimasAtualizacoes.css';

export default function UltimasAtualizacoes({ user, onLogout, onBack, onNavigate }) {
  const historico = [
    { id: '#1024', titulo: 'Queda de link de rede na Empresa Alfa', data: '09/09/2026 - 10:15', status: 'Em Andamento' },
    { id: '#1023', titulo: 'Troca de SSD - Máquina Finanças 02', data: '09/09/2026 - 09:30', status: 'Em Andamento' },
    { id: '#1022', titulo: 'Renovação de Licença Microsoft 365', data: '09/09/2026 - 08:00', status: 'Concluído' },
    { id: '#1021', titulo: 'Configuração de VPN para Novo Colaborador', data: '08/09/2026 - 16:45', status: 'Concluído' }
  ];

  return (
    <div className="updates-page-container">
      <Header user={user} onLogout={onLogout} />

      <main className="updates-page-content">
        <button className="btn-voltar" onClick={onBack}>
          ← Voltar para o Início
        </button>

        <div className="updates-header-section">
          <h1>Histórico de Últimas Atualizações</h1>
          <p>Acompanhe em tempo real todas as atividades operacionais do sistema.</p>
        </div>

        <div className="updates-card-list">
          {historico.map((item) => (
            <div 
              key={item.id} 
              className="update-card-item"
              onClick={() => onNavigate('detalhesChamado', item.id)}
            >
              <div className="update-card-left">
                <span className="update-card-id">{item.id}</span>
                <h3>{item.titulo}</h3>
                <span className="update-card-date">{item.data}</span>
              </div>
              <span className={`status-badge ${item.status === 'Concluído' ? 'status-concluido' : 'status-andamento'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}