import React, { useState } from 'react';
import './novoChamado.css';

export default function NovoChamado({ onBack }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Rede');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Chamado registrado com sucesso!');
    if (onBack) onBack();
  };

  return (
    <div className="form-page-container">
      <div className="form-card">
        <h2>Abrir Solicitação de Suporte</h2>
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="form-group">
            <label>Assunto / Título</label>
            <input
              type="text"
              placeholder="Ex: Falha na impressora do RH"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="Rede">Rede / Conectividade</option>
              <option value="Hardware">Hardware / Equipamentos</option>
              <option value="Software">Software / Sistemas</option>
              <option value="Acessos">Acessos e Permissões</option>
            </select>
          </div>

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

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onBack}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Enviar Chamado
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}