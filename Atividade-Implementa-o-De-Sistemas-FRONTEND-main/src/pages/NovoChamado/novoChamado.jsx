import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import './novoChamado.css';

export default function NovoChamado({ user, onLogout, onBack }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Rede / Conectividade');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // O chamado é enviado para o banco com nível padrão para o técnico classificar (N1, N2 ou N3)
    const novoChamado = {
      titulo,
      categoria,
      descricao,
      prioridade: 'Nível Pendente (Técnico)',
      status: 'Aberto',
      data: new Date().toLocaleDateString('pt-BR')
    };

    console.log('Chamado Enviado:', novoChamado);
    alert('Solicitação enviada com sucesso! Um técnico irá avaliar e definir a prioridade.');
    onBack();
  };

  return (
    <div className="novo-chamado-container">
      <Header user={user} onLogout={onLogout} />

      <main className="novo-chamado-content">
        <button className="btn-voltar" onClick={onBack}>
          ← Voltar
        </button>

        <div className="form-card">
          <h2>Abrir Solicitação de Suporte</h2>

          <form onSubmit={handleSubmit}>
            {/* Assunto / Título */}
            <div className="form-group">
              <label>Assunto / Título</label>
              <input
                type="text"
                placeholder="Ex: Falha na impressora do setor fiscal"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            {/* Categoria Ocupando a Linha Inteira */}
            <div className="form-group">
              <label>Categoria</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Rede / Conectividade">Rede / Conectividade</option>
                <option value="Hardware / Equipamento">Hardware / Equipamento</option>
                <option value="Software / Sistema">Software / Sistema</option>
                <option value="Acessos / Permissões">Acessos / Permissões</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            {/* Descrição do Problema */}
            <div className="form-group">
              <label>Descrição do Problema</label>
              <textarea
                rows="5"
                placeholder="Descreva detalhadamente a situação para agilizar o atendimento..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Botões de Ação */}
            <div className="form-actions">
              <button type="button" className="btn-cancelar" onClick={onBack}>
                Cancelar
              </button>

              <button type="submit" className="btn-enviar">
                Enviar Chamado
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}