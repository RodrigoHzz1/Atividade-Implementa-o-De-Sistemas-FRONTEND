import React from 'react';
import Header from '../../componentes/Header/header';
import CardChamado from '../../componentes/CardChamado/cardChamado';
import Footer from '../../componentes/Footer/footer';
import './homeCliente.css';

export default function HomeCliente({ user, onLogout, onNavigate }) {
  const meusChamados = [
    {
      id: '1024',
      titulo: 'Instabilidade na rede de internet',
      descricao: 'Lentidão frequente no setor financeiro durante o período da tarde.',
      status: 'Em Andamento',
      prioridade: 'Alta',
      data: '09/09/2026',
    },
    {
      id: '1019',
      titulo: 'Solicitação de nova licença de software',
      descricao: 'Solicito ativação do pacote Adobe Creative para o novo designer.',
      status: 'Aberto',
      prioridade: 'Média',
      data: '08/09/2026',
    },
  ];

  return (
    <div className="layout-container">
      <Header user={user} onLogout={onLogout} />
      <main className="client-content">
        <div className="client-hero">
          <div>
            <h1>Portal do Cliente</h1>
            <p>Gerencie seus chamados e acompanhe o atendimento em tempo real.</p>
          </div>
          <button className="btn-primary" onClick={() => onNavigate('novoChamado')}>
            + Abrir Novo Chamado
          </button>
        </div>

        <section className="tickets-section">
          <h2>Seus Chamados Recentes</h2>
          <div className="tickets-grid">
            {meusChamados.map((item) => (
              <CardChamado
                key={item.id}
                chamado={item}
                onClick={() => onNavigate('detalhesChamado')}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}