import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import Footer from '../../componentes/Footer/footer';

export default function Chamados({ user, onLogout, onNavigate, onBack }) {
  const [chamados, setChamados] = useState([
    {
      id: '1024',
      titulo: 'Instabilidade na rede de internet',
      status: 'Em Andamento',
      prioridade: 'Alta',
      data: '09/09/2026 às 10:15',
      tecnico: 'Carlos Silva',
      descricao: 'Lentidão frequente no setor financeiro durante o período da tarde, impactando o carregamento dos sistemas de pagamentos.',
      cliente: {
        nome: 'Empresa Alfa',
        contato: 'João Souza',
        email: 'joao@empresaalfa.com.br',
        telefone: '(11) 98765-4321',
        setor: 'Financeiro'
      }
    },
    {
      id: '1019',
      titulo: 'Solicitação de nova licença de software',
      status: 'Aberto',
      prioridade: 'Média',
      data: '08/09/2026 às 14:30',
      tecnico: 'Pendente',
      descricao: 'Solicito ativação do pacote Adobe Creative para o novo designer da equipe.',
      cliente: {
        nome: 'Tech Solutions',
        contato: 'Maria Santos',
        email: 'maria@techsolutions.com',
        telefone: '(11) 91234-5678',
        setor: 'Marketing'
      }
    }
  ]);

  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const handleVoltar = () => {
    if (typeof onBack === 'function') {
      onBack();
    } else if (typeof onNavigate === 'function') {
      onNavigate('home');
    }
  };

  const handleStatusChange = (id, novoStatus) => {
    setChamados(prev =>
      prev.map(item => (item.id === id ? { ...item, status: novoStatus } : item))
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050812', color: '#fff' }}>
      <Header user={user} onLogout={onLogout} />

      <main style={{ flex: 1, padding: '2rem 1rem', maxWidth: '1000px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Botão Voltar */}
        <div style={{ marginBottom: '1.5rem' }}>
          <button
            type="button"
            onClick={handleVoltar}
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

        {/* Lista de Chamados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {chamados.map((dados) => (
            <div 
              key={dados.id} 
              style={{ backgroundColor: '#0b0f19', border: '1px solid #1e293b', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Chamado #{dados.id}</span>
                  <h2 style={{ margin: '0.25rem 0 0 0', fontSize: '1.5rem', color: '#f8fafc' }}>{dados.titulo}</h2>
                </div>
                
                <select
                  value={dados.status}
                  onChange={(e) => handleStatusChange(dados.id, e.target.value)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    backgroundColor: dados.status === 'Em Andamento' ? 'rgba(234, 179, 8, 0.1)' : dados.status === 'Aberto' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                    color: dados.status === 'Em Andamento' ? '#eab308' : dados.status === 'Aberto' ? '#3b82f6' : '#22c55e',
                    border: `1px solid ${dados.status === 'Em Andamento' ? 'rgba(234, 179, 8, 0.2)' : dados.status === 'Aberto' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(34, 197, 94, 0.2)'}`
                  }}
                >
                  <option value="Aberto" style={{ backgroundColor: '#0b0f19', color: '#fff' }}>ABERTO</option>
                  <option value="Em Andamento" style={{ backgroundColor: '#0b0f19', color: '#fff' }}>EM ANDAMENTO</option>
                  <option value="Fechado" style={{ backgroundColor: '#0b0f19', color: '#fff' }}>FECHADO</option>
                </select>
              </div>

              {/* Informações Rápidas */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', backgroundColor: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1e293b', margin: '1.25rem 0' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Cliente</span>
                  <strong 
                    onClick={() => setClienteSelecionado(dados)}
                    style={{ fontSize: '0.875rem', color: '#38bdf8', cursor: 'pointer', textDecoration: 'underline' }}
                    title="Clique para ver detalhes"
                  >
                    {dados.cliente.nome} 🔍
                  </strong>
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

        {/* Modal com Detalhes do Solicitante */}
        {clienteSelecionado && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: '#0b0f19',
              padding: '25px',
              borderRadius: '12px',
              maxWidth: '500px',
              width: '90%',
              color: '#fff',
              border: '1px solid #1e293b',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
            }}>
              <h3 style={{ marginTop: 0, color: '#38bdf8' }}>Detalhes do Solicitante</h3>
              <hr style={{ borderColor: '#1e293b', margin: '15px 0' }} />
              <p><strong>Empresa/Cliente:</strong> {clienteSelecionado.cliente.nome}</p>
              <p><strong>Solicitante:</strong> {clienteSelecionado.cliente.contato}</p>
              <p><strong>Setor:</strong> {clienteSelecionado.cliente.setor}</p>
              <p><strong>E-mail:</strong> {clienteSelecionado.cliente.email}</p>
              <p><strong>Telefone/WhatsApp:</strong> {clienteSelecionado.cliente.telefone}</p>
              <p><strong>Chamado Origem:</strong> #{clienteSelecionado.id} - {clienteSelecionado.titulo}</p>
              
              <button 
                onClick={() => setClienteSelecionado(null)}
                style={{
                  marginTop: '15px',
                  padding: '8px 20px',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}