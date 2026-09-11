import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import './homeCliente.css';

export default function HomeCliente({ user, onLogout, onNavigate }) {
  const [abaAtiva, setAbaAtiva] = useState('recentes');

  // Dados mockados de chamados em andamento
  const chamadosAtivos = [
    {
      id: '#1024',
      titulo: 'Instabilidade na rede de internet',
      descricao: 'Lentidão frequente no setor financeiro durante o período da tarde.',
      data: '09/09/2026',
      prioridade: 'Alta',
      status: 'Em Andamento',
      statusClass: 'status-em-andamento'
    },
    {
      id: '#1019',
      titulo: 'Solicitação de nova licença de software',
      descricao: 'Solicito ativação do pacote Adobe Creative para o novo designer.',
      data: '08/09/2026',
      prioridade: 'Média',
      status: 'Aberto',
      statusClass: 'status-aberto'
    }
  ];

  // Histórico para o relatório de chamados resoltos
  const chamadosResolvidos = [
    { id: '#0988', titulo: 'Configuração de Impressora Wi-Fi', dataAbertura: '01/09/2026', dataFechamento: '02/09/2026', tecnico: 'Carlos Silva', avaliacao: '5.0 ★' },
    { id: '#0954', titulo: 'Restauração de Backup de E-mails', dataAbertura: '25/08/2026', dataFechamento: '25/08/2026', tecnico: 'Mariana Costa', avaliacao: '4.9 ★' },
    { id: '#0910', titulo: 'Troca de Teclado de Notebook', dataAbertura: '18/08/2026', dataFechamento: '19/08/2026', tecnico: 'Roberto Santos', avaliacao: '5.0 ★' }
  ];

  return (
    <div className="home-cliente-container">
      <Header user={user} onLogout={onLogout} />

      <main className="home-cliente-content">
        {/* Banner principal */}
        <div className="portal-banner">
          <div>
            <h1>Portal do Cliente</h1>
            <p>Gerencie seus chamados e acompanhe o atendimento em tempo real.</p>
          </div>
          <button className="btn-primary-glow" onClick={() => onNavigate('novoChamado')}>
            + Abrir Novo Chamado
          </button>
        </div>

        {/* Menu de Abas */}
        <div className="client-tabs-nav">
          <button 
            className={`tab-btn ${abaAtiva === 'recentes' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('recentes')}
          >
            📋 Chamados Em Andamento ({chamadosAtivos.length})
          </button>
          <button 
            className={`tab-btn ${abaAtiva === 'resolvidos' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('resolvidos')}
          >
            📊 Relatório de Resolvidos ({chamadosResolvidos.length})
          </button>
        </div>

        {/* Visão 1: Chamados Recentes */}
        {abaAtiva === 'recentes' && (
          <section className="chamados-section">
            <div className="chamados-grid">
              {chamadosAtivos.map((chamado) => (
                <div 
                  key={chamado.id} 
                  className="chamado-card"
                  onClick={() => onNavigate('detalhesChamado')}
                >
                  <div className="card-top">
                    <span className="chamado-id">{chamado.id}</span>
                    <span className={`status-badge ${chamado.statusClass}`}>
                      {chamado.status}
                    </span>
                  </div>

                  <h3>{chamado.titulo}</h3>
                  <p>{chamado.descricao}</p>

                  <div className="card-footer">
                    <span className="chamado-data">{chamado.data}</span>
                    <span className="chamado-prioridade">Prioridade: {chamado.prioridade}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Visão 2: Relatório de Resolvidos */}
        {abaAtiva === 'resolvidos' && (
          <section className="relatorio-resolvidos-section">
            <div className="table-responsive">
              <table className="resolved-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Título do Chamado</th>
                    <th>Abertura</th>
                    <th>Conclusão</th>
                    <th>Técnico Responsável</th>
                    <th>Avaliação</th>
                  </tr>
                </thead>
                <tbody>
                  {chamadosResolvidos.map((item) => (
                    <tr key={item.id}>
                      <td className="col-id">{item.id}</td>
                      <td className="col-titulo">{item.titulo}</td>
                      <td>{item.dataAbertura}</td>
                      <td>{item.dataFechamento}</td>
                      <td>{item.tecnico}</td>
                      <td><span className="rating-tag">{item.avaliacao}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      <footer className="home-cliente-footer">
        <p>© 2026 TechNexus. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}