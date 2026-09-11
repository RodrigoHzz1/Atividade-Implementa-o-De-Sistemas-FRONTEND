import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import Footer from '../../componentes/Footer/footer';

export default function NovoChamado({ onBack, onAddChamado }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Rede / Conectividade');
  const [prioridade, setPrioridade] = useState('Média');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoChamado = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      titulo,
      categoria,
      prioridade,
      descricao,
      status: 'Aberto',
      data: new Date().toLocaleDateString('pt-BR'),
    };

    if (onAddChamado) {
      onAddChamado(novoChamado);
    }

    if (onBack) {
      onBack();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050812', color: '#fff' }}>
      <Header />

      <main style={{ flex: 1, padding: '2rem 1rem', maxWidth: '720px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* Botão Quadrado no Canto Superior */}
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
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            ← Voltar
          </button>
        </div>

        {/* Card Principal do Form */}
        <div style={{ backgroundColor: '#0b0f19', border: '1px solid #1e293b', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 30px rgba(0, 0, 0, 0.5)' }}>
          <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 700, color: '#f8fafc' }}>
            Abrir Solicitação de Suporte
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500 }}>Assunto / Título</label>
              <input
                type="text"
                placeholder="Ex: Falha na impressora do setor fiscal"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  backgroundColor: '#111827',
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  color: '#fff',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500 }}>Categoria</label>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: '#111827',
                    border: '1px solid #1e293b',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none'
                  }}
                >
                  <option>Rede / Conectividade</option>
                  <option>Hardware / Equipamento</option>
                  <option>Sistemas / Software</option>
                  <option>Acessos e Permissões</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500 }}>Prioridade</label>
                <select
                  value={prioridade}
                  onChange={(e) => setPrioridade(e.target.value)}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: '#111827',
                    border: '1px solid #1e293b',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none'
                  }}
                >
                  <option>Baixa</option>
                  <option>Média</option>
                  <option>Alta</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500 }}>Descrição do Problema</label>
              <textarea
                rows={5}
                placeholder="Descreva detalhadamente a situação para agilizar o atendimento..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  backgroundColor: '#111827',
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  color: '#fff',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
              <button
                type="button"
                onClick={onBack}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #1e293b',
                  color: '#94a3b8',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: '#8b5cf6',
                  border: 'none',
                  color: '#fff',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)'
                }}
              >
                Enviar Chamado
              </button>
            </div>

          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}