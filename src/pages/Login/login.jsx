import React, { useState } from 'react';
import Logo from '../../componentes/Logo/logo';
import './login.css';

export default function Login({ onLoginSuccess }) {
  const [tipoAcesso, setTipoAcesso] = useState('funcionario');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      tipo: tipoAcesso,
      nome: tipoAcesso === 'funcionario' ? 'Técnico TechNexus' : 'Cliente Corporativo',
    };
    if (onLoginSuccess) {
      onLoginSuccess(userData);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Logo variant="full" />
          <p className="login-subtitle">Acesse o portal da plataforma</p>
        </div>

        <div className="access-tabs">
          <button
            type="button"
            className={`tab-btn ${tipoAcesso === 'funcionario' ? 'active' : ''}`}
            onClick={() => setTipoAcesso('funcionario')}
          >
            Portal do Funcionário
          </button>
          <button
            type="button"
            className={`tab-btn ${tipoAcesso === 'cliente' ? 'active' : ''}`}
            onClick={() => setTipoAcesso('cliente')}
          >
            Portal do Cliente
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder={tipoAcesso === 'funcionario' ? 'usuario@technexus.com' : 'cliente@empresa.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Entrar como {tipoAcesso === 'funcionario' ? 'Funcionário' : 'Cliente'}
          </button>
        </form>
      </div>
    </div>
  );
}