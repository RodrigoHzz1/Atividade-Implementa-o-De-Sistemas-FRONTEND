import React, { useState } from 'react';
import './modal.css';

export default function Modal({ isOpen, onClose, onSubmit }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Rede / Conectividade');
  const [prioridade, setPrioridade] = useState('Média');
  const [descricao, setDescricao] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        id: `#${Math.floor(1000 + Math.random() * 9000)}`,
        titulo,
        categoria,
        prioridade,
        status: 'Aberto',
        data: new Date().toLocaleDateString('pt-BR'),
        descricao
      });
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        
        <div className="modal-header">
          <h2>Abrir Solicitação de Suporte</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Assunto / Título</label>
            <input 
              type="text" 
              placeholder="Ex: Falha na conexão da impressora" 
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Categoria</label>
              <select 
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option>Rede / Conectividade</option>
                <option>Hardware / Equipamento</option>
                <option>Sistemas / Software</option>
                <option>Acessos e Permissões</option>
              </select>
            </div>

            <div className="form-group">
              <label>Prioridade</label>
              <select 
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
              >
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Descrição do Problema</label>
            <textarea 
              placeholder="Descreva detalhadamente a situação para agilizar o atendimento..." 
              rows={4}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              Enviar Chamado
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}