import React, { useState, useMemo } from 'react';
import Header from '../../componentes/Header/header';
import './funcionarios.css';

const MOCK_DATA = [
  { id: 'usr-101', nome: 'Carlos Oliveira', email: 'carlos.oliveira@technexus.com', nivel: 'N1', status: 'ATIVO', chamadosAtendidos: 42 },
  { id: 'usr-102', nome: 'Mariana Costa', email: 'mariana.costa@technexus.com', nivel: 'N2', status: 'ATIVO', chamadosAtendidos: 89 },
  { id: 'usr-103', nome: 'Roberto Santos', email: 'roberto.santos@technexus.com', nivel: 'N3', status: 'INATIVO', chamadosAtendidos: 154 },
  { id: 'usr-104', nome: 'Amanda Limeira', email: 'amanda.limeira@technexus.com', nivel: 'N1', status: 'ATIVO', chamadosAtendidos: 18 },
];

export default function Funcionarios({ user, onLogout, onBack }) {
  const [funcionarios, setFuncionarios] = useState(MOCK_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNivel, setSelectedNivel] = useState('TODOS');
  const [userToDelete, setUserToDelete] = useState(null);

  // Cálculos de KPIs
  const stats = useMemo(() => {
    return {
      total: funcionarios.length,
      ativos: funcionarios.filter(f => f.status === 'ATIVO').length,
      inativos: funcionarios.filter(f => f.status === 'INATIVO').length,
      n3: funcionarios.filter(f => f.nivel === 'N3').length,
    };
  }, [funcionarios]);

  // Filtragem combinada
  const filteredData = useMemo(() => {
    return funcionarios.filter((item) => {
      const matchesSearch =
        item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesNivel = selectedNivel === 'TODOS' || item.nivel === selectedNivel;

      return matchesSearch && matchesNivel;
    });
  }, [funcionarios, searchTerm, selectedNivel]);

  const confirmDelete = () => {
    if (userToDelete) {
      setFuncionarios(prev => prev.filter(item => item.id !== userToDelete.id));
      setUserToDelete(null);
    }
  };

  return (
    <div className="tn-app-container">
      <Header user={user} onLogout={onLogout} />

      <main className="tn-main-layout">
        {/* Topo / Voltar */}
        <div className="tn-top-bar">
          <button className="tn-btn-ghost" onClick={onBack}>
            ← Voltar para o Início
          </button>
        </div>

        {/* Header da Página */}
        <header className="tn-header-section">
          <div>
            <h1 className="tn-heading-lg">Gestão de Colaboradores</h1>
            <p className="tn-text-subtle">
              Acompanhe a equipe técnica, níveis de suporte e status de acessos.
            </p>
          </div>
        </header>

        {/* Dashboard de Métricas (KPIs) */}
        <section className="tn-kpi-grid">
          <div className="tn-kpi-card">
            <span className="tn-kpi-title">TOTAL DE TÉCNICOS</span>
            <span className="tn-kpi-value">{stats.total}</span>
          </div>
          <div className="tn-kpi-card">
            <span className="tn-kpi-title">ATIVOS NO SISTEMA</span>
            <span className="tn-kpi-value text-success">{stats.ativos}</span>
          </div>
          <div className="tn-kpi-card">
            <span className="tn-kpi-title">INATIVOS</span>
            <span className="tn-kpi-value text-danger">{stats.inativos}</span>
          </div>
          <div className="tn-kpi-card">
            <span className="tn-kpi-title">ESPECIALISTAS N3</span>
            <span className="tn-kpi-value text-warning">{stats.n3}</span>
          </div>
        </section>

        {/* Barra de Ferramentas: Busca + Filtros */}
        <section className="tn-toolbar">
          <div className="tn-search-box">
            <input
              type="text"
              placeholder="Buscar colaborador por nome ou e-mail..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="tn-filter-tabs">
            {['TODOS', 'N1', 'N2', 'N3'].map((nivel) => (
              <button
                key={nivel}
                className={`tn-tab-btn ${selectedNivel === nivel ? 'active' : ''}`}
                onClick={() => setSelectedNivel(nivel)}
              >
                {nivel === 'TODOS' ? 'Todos os Níveis' : `Nível ${nivel}`}
              </button>
            ))}
          </div>
        </section>

        {/* Tabela de Dados */}
        <section className="tn-table-container">
          <table className="tn-data-table">
            <thead>
              <tr>
                <th>COLABORADOR</th>
                <th>NÍVEL TÉCNICO</th>
                <th>CHAMADOS RESOLVIDOS</th>
                <th>STATUS</th>
                <th className="align-right">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="tn-user-info">
                        <span className="tn-user-name">{item.nome}</span>
                        <span className="tn-user-email">{item.email}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`tn-tag tn-tag-${item.nivel.toLowerCase()}`}>
                        Suporte {item.nivel}
                      </span>
                    </td>
                    <td className="tn-text-bold">{item.chamadosAtendidos} ops</td>
                    <td>
                      <span className={`tn-status-pill ${item.status.toLowerCase()}`}>
                        <span className="dot"></span> {item.status}
                      </span>
                    </td>
                    <td className="align-right">
                      <button
                        className="tn-btn-danger-outline"
                        onClick={() => setUserToDelete(item)}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="tn-empty-row">
                    Nenhum colaborador encontrado com os critérios selecionados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>

      {/* Modal de Confirmação de Exclusão */}
      {userToDelete && (
        <div className="tn-modal-overlay">
          <div className="tn-modal-card">
            <h3>Confirmar Remoção</h3>
            <p>
              Tem certeza que deseja remover o colaborador <strong>{userToDelete.nome}</strong>?
              Esta ação revogará os acessos imediatamente.
            </p>
            <div className="tn-modal-actions">
              <button className="tn-btn-ghost" onClick={() => setUserToDelete(null)}>
                Cancelar
              </button>
              <button className="tn-btn-danger" onClick={confirmDelete}>
                Confirmar Exclusão
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}