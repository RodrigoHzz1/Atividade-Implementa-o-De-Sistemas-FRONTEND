import React from 'react';
import Header from '../../componentes/Header/header';
import Footer from '../../componentes/Footer/footer';
import './detalhesChamado.css';

export default function DetalhesChamado({ chamado, onBack, user, onLogout }) {
  // Dados de fallback para exibição caso venha sem prop
  const dados = chamado || {
    id: '1024',
    titulo: 'Instabilidade na rede de internet',
    cliente: 'Empresa Alfa',
    data: '09/09/2026 às 10:15',
    prioridade: 'Alta',
    tecnico: 'Carlos Silva',
    status: 'Em Andamento',
    descricao: 'Lentidão frequente no setor financeiro durante o período da tarde, impactando o carregamento dos sistemas de pagamentos.',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050812', color: '#fff' }}>
      <Header user={user} onLogout={onLogout} />

      <main style={{ flex: 1, padding: '2rem 1rem', maxWidth: '900px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Botão Voltar em Quadrado / Card */}
        <div style={{ marginBottom: '1.5rem' }}>
          <button
            type="button"
            onClick={onBack}
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

        {/* Card Principal de Detalhes */}
        <div style={{ backgroundColor: '#0b0f19', border: '1px solid #1e293b', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 30px rgba(0, 0, 0, 0.5)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Chamado #{dados.id}</span>
              <h1 style={{ margin: '0.25rem 0 0 0', fontSize: '1.75rem', color: '#f8fafc' }}>{dados.titulo}</h1>
            </div>
            
            <span style={{
              backgroundColor: 'rgba(234, 179, 8, 0.1)',
              color: '#eab308',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              padding: '0.35rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>
              {dados.status}
            </span>
          </div>

          {/* Bar de Metadados */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', backgroundColor: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1e293b', margin: '1.5rem 0' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Cliente</span>
              <strong style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{dados.cliente || 'Empresa Alfa'}</strong>
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
              <strong style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{dados.tecnico || 'Carlos Silva'}</strong>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.5rem' }}>Descrição</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{dados.descricao}</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}