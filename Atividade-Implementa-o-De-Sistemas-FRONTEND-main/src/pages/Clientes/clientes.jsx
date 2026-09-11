import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import './cliente.css';

export default function Clientes({ user, onLogout, onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Exemplo de dados de clientes
  const [clientes, setClientes] = useState([
    {
      id: 1,
      empresa: 'Empresa Alfa',
      cnpj: '12.345.678/0001-90',
      contato: 'Carlos Oliveira',
      email: 'carlos@empresaalfa.com',
      telefone: '(11) 98765-4321',
      plano: 'Corporativo Premium',
      status: 'Ativo',
    },
    {
      id: 2,
      empresa: 'Tech Solutions',
      cnpj: '98.765.432/0001-10',
      contato: 'Mariana Costa',
      email: 'mariana@techsolutions.com',
      telefone: '(21) 99876-5432',
      plano: 'Empresarial',
      status: 'Ativo',
    },
    {
      id: 3,
      empresa: 'Inova Digital',
      cnpj: '45.678.912/0001-33',
      contato: 'Roberto Santos',
      email: 'roberto@inovadigital.com',
      telefone: '(31) 97654-3210',
      plano: 'Básico',
      status: 'Inativo',
    },
  ]);

  const [novoCliente, setNovoCliente] = useState({
    empresa: '',
    cnpj: '',
    contato: '',
    email: '',
    telefone: '',
    plano: 'Empresarial',
    status: 'Ativo'
  });

  // Função para deletar um cliente da lista
  const handleDeleteCliente = (id) => {
    if (window.confirm("Tem certeza que deseja remover este cliente?")) {
      setClientes(clientes.filter((cliente) => cliente.id !== id));
    }
  };

  // Filtra clientes pelo termo de busca
  const clientesFiltrados = clientes.filter(
    (c) =>
      c.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.cnpj.includes(searchTerm) ||
      c.contato.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCliente = (e) => {
    e.preventDefault();
    if (!novoCliente.empresa || !novoCliente.cnpj) return;

    setClientes([...clientes, { ...novoCliente, id: Date.now() }]);
    setNovoCliente({ empresa: '', cnpj: '', contato: '', email: '', telefone: '', plano: 'Empresarial', status: 'Ativo' });
    setShowModal(false);
  };

  return (
    <div className="clientes-container">
      {/* Header padrão com botões Sair e Voltar */}
      <Header user={user} onLogout={onLogout} showBack={true} onBack={onBack} />

      <main className="clientes-content">
        {/* BOTÃO VOLTAR MANUAL (Ideal para navegação direta acima do título) */}
        <div className="top-navigation">
          <button className="btn-back" onClick={onBack}>
            ← Voltar para o Inicio
          </button>
        </div>

        <div className="clientes-header-section">
          <div>
            <h1>Gerenciamento de Clientes</h1>
            <p>Cadastro e contratos corporativos ativos.</p>
          </div>
          <button className="btn-primary" onClick={() => setShowModal(true)}>
            + Novo Cliente
          </button>
        </div>

        {/* Barra de Busca e Filtros */}
        <div className="clientes-filter-bar">
          <input
            type="text"
            placeholder="Buscar por empresa, CNPJ ou contato..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Tabela de Clientes */}
        <div className="table-card">
          <table className="clientes-table">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>CNPJ</th>
                <th>Contato</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Plano</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientesFiltrados.length > 0 ? (
                clientesFiltrados.map((cliente) => (
                  <tr key={cliente.id}>
                    <td className="empresa-name">{cliente.empresa}</td>
                    <td>{cliente.cnpj}</td>
                    <td>{cliente.contato}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone}</td>
                    <td>
                      <span className="badge-plano">{cliente.plano}</span>
                    </td>
                    <td>
                      <span
                        className={`status-pill ${
                          cliente.status === 'Ativo' ? 'status-ativo' : 'status-inativo'
                        }`}
                      >
                        {cliente.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteCliente(cliente.id)}
                        title="Remover Cliente"
                      >
                        🗑️ Excluir
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-data">
                    Nenhum cliente encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal para Cadastrar Novo Cliente */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cadastrar Novo Cliente</h2>
            <form onSubmit={handleAddCliente}>
              <div className="form-group">
                <label>Nome da Empresa</label>
                <input
                  type="text"
                  required
                  value={novoCliente.empresa}
                  onChange={(e) => setNovoCliente({ ...novoCliente, empresa: e.target.value })}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>CNPJ</label>
                  <input
                    type="text"
                    required
                    value={novoCliente.cnpj}
                    onChange={(e) => setNovoCliente({ ...novoCliente, cnpj: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Pessoa de Contato</label>
                  <input
                    type="text"
                    value={novoCliente.contato}
                    onChange={(e) => setNovoCliente({ ...novoCliente, contato: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    value={novoCliente.email}
                    onChange={(e) => setNovoCliente({ ...novoCliente, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Telefone</label>
                  <input
                    type="text"
                    value={novoCliente.telefone}
                    onChange={(e) => setNovoCliente({ ...novoCliente, telefone: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Salvar Cliente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}