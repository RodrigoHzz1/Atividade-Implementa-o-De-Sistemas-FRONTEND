import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import "./Cliente.css";

export default function Clientes({ user, onLogout, onBack }) {
  const [busca, setBusca] = useState('');
  const [funcionarios, setFuncionarios] = useState([
    {
      id: 1,
      nome: 'Carlos Oliveira',
      email: 'carlos.oliveira@empresa.com',
      setor: 'Financeiro',
      status: 'Ativo'
    },
    {
      id: 2,
      nome: 'Mariana Costa',
      email: 'mariana.costa@empresa.com',
      setor: 'Recursos Humanos',
      status: 'Ativo'
    },
    {
      id: 3,
      nome: 'Roberto Santos',
      email: 'roberto.santos@empresa.com',
      setor: 'Tecnologia da Informação',
      status: 'Inativo'
    }
  ]);

  const handleExcluir = (id) => {
    setFuncionarios(funcionarios.filter((item) => item.id !== id));
  };

  const funcionariosFiltrados = funcionarios.filter(
    (item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase()) ||
      item.email.toLowerCase().includes(busca.toLowerCase()) ||
      item.setor.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="clientes-container">
      <Header user={user} onLogout={onLogout} />

      <main className="clientes-content">
        <button className="btn-voltar" onClick={onBack}>
          ← Voltar para o Início
        </button>

        <div className="clientes-header-section">
          <div>
            <h1>Gerenciamento de Funcionários</h1>
            <p>Cadastro e controle de acesso dos colaboradores.</p>
          </div>
          <button className="btn-novo">+ Novo Funcionário</button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por nome, e-mail ou setor..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="table-card">
          <table className="clientes-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Setor</th>
                <th>Status</th>
                <th style={{ textAlign: 'center' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {funcionariosFiltrados.map((item) => (
                <tr key={item.id}>
                  <td className="col-nome">{item.nome}</td>
                  <td className="col-email">{item.email}</td>
                  <td>
                    <span className="badge-setor">{item.setor}</span>
                  </td>
                  <td>
                    <span
                      className={`status-badge ${
                        item.status === 'Ativo' ? 'status-ativo' : 'status-inativo'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      className="btn-excluir"
                      onClick={() => handleExcluir(item.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}