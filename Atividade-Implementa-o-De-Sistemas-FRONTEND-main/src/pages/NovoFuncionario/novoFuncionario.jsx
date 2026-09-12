import React, { useState } from 'react';
import Header from '../../componentes/Header/header';
import './novoFuncionario.css';

export default function NovoFuncionario({ user, onLogout, onBack, onNavigate }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    nivelTecnico: 'n1',
    senha: '',
  });

  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSucesso(true);
    setTimeout(() => {
      setSucesso(false);
      if (onNavigate) {
        onNavigate('funcionarios');
      } else if (onBack) {
        onBack();
      }
    }, 1200);
  };

  return (
    <div className="novo-funcionario-container">
      <Header user={user} onLogout={onLogout} />

      <main className="novo-funcionario-content">
        <div className="page-header-actions">
          <button className="btn-back" onClick={onBack}>
            ← Voltar
          </button>
        </div>

        <div className="form-card-container">
          <div className="form-card-header">
            <h2>Cadastrar Novo Funcionário</h2>
            <p>Informe os dados de acesso e o nível do novo colaborador.</p>
          </div>

          {sucesso && (
            <div className="alert-sucesso">
              ✅ Funcionário cadastrado com sucesso! Redirecionando...
            </div>
          )}

          <form onSubmit={handleSubmit} className="funcionario-form">
            <div className="form-grid">
              {/* Nome Completo */}
              <div className="input-group full-width">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Ex: Gabriel Silva"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* E-mail Corporativo */}
              <div className="input-group">
                <label htmlFor="email">E-mail Corporativo *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="gabriel.silva@technexus.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Nível do Técnico (N1, N2, N3) */}
              <div className="input-group">
                <label htmlFor="nivelTecnico">Nível do Técnico *</label>
                <select
                  id="nivelTecnico"
                  name="nivelTecnico"
                  value={formData.nivelTecnico}
                  onChange={handleChange}
                  required
                >
                  <option value="n1">Suporte Nível 1 (N1)</option>
                  <option value="n2">Suporte Nível 2 (N2)</option>
                  <option value="n3">Suporte Nível 3 (N3)</option>
                </select>
              </div>

              {/* Senha */}
              <div className="input-group full-width">
                <label htmlFor="senha">Senha de Acesso *</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="••••••••"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onBack}>
                Cancelar
              </button>
              <button type="submit" className="btn-submit">
                Salvar Cadastramento
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}