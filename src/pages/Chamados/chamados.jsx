import React from 'react';
import Header from '../../componentes/Header/header';
import Footer from '../../componentes/Footer/footer';

export default function Chamados({ user, onLogout, onNavigate }) {
  // Lista dos chamados cadastrados
  const listaChamados = [
    {
      id: '1024',
      titulo: 'Instabilidade na rede de internet',
      cliente: 'Empresa Alfa',
      data: '09/09/2026 às 10:15',
      prioridade: 'Alta',
      tecnico: 'Carlos Silva',
      status: 'Em Andamento',
      descricao: 'Lentidão frequente no setor financeiro durante o período da tarde, impactando o carregamento dos sistemas de pagamentos.',
    },
    {
      id: '1019',
      titulo: 'Solicitação de nova licença de software',
      cliente: 'Empresa Alfa',
      data: '08/09/2026 às 14:30',
      prioridade: 'Média',
      tecnico: 'Pendente',
      status: 'Aberto',
      descricao: 'Solicito ativação do pacote Adobe Creative para o novo designer da equipe.',
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050812', color: '#fff' }}>
      <Header user={user} onLogout={onLogout} />

      <main style={{ flex: 1, padding: '2rem 1rem', maxWidth: '1000px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Botão Voltar Quadrado */}
        <div style={{ marginBottom: '1.5rem' }}>
          <button
            type="button"
            onClick={() => onNavigate('home')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#0b0f19',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '0.6rem 1rem',
              color: '#94a3b8',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            ← Voltar
          </button>
        </div>

        {/* Lista de Chamados Detalhados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {listaChamados.map((dados) => (
            <div 
              key={dados.id} 
              style={{ backgroundColor: '#0b0f19', border: '1px solid #1e293b', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Chamado #{dados.id}</span>
                  <h2 style={{ margin: '0.25rem 0 0 0', fontSize: '1.5rem', color: '#f8fafc' }}>{dados.titulo}</h2>
                </div>
                
                <span style={{
                  backgroundColor: dados.status === 'Em Andamento' ? 'rgba(234, 179, 8, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                  color: dados.status === 'Em Andamento' ? '#eab308' : '#3b82f6',
                  border: `1px solid ${dados.status === 'Em Andamento' ? 'rgba(234, 179, 8, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                  padding: '0.35rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}>
                  {dados.status}
                </span>
              </div>

              {/* Informações Rápidas */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', backgroundColor: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1e293b', margin: '1.25rem 0' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Cliente</span>
                  <strong style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{dados.cliente}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Aberto em</span>
                  <strong style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{dados.data}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Prioridade</span>
                  <strong style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{dados.prioridade}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Técnico Responsável</span>
                  <strong style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{dados.tecnico}</strong>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1rem', color: '#f8fafc', marginBottom: '0.5rem' }}>Descrição</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.5', margin: 0, fontSize: '0.95rem' }}>{dados.descricao}</p>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}