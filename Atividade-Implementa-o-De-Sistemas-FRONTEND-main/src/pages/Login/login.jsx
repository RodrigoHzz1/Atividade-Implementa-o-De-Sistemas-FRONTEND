import React, { useState } from 'react';
import Logo from '../../componentes/Logo/logo';
import './login.css';

export default function Login({ onLoginSuccess }) {
  const [tipoAcesso, setTipoAcesso] = useState('funcionario');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulação temporária: aceita qualquer e-mail/senha para testar as telas
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
    <div className="login-wrapper">
      {/* Coluna Esquerda: Hero / Branding */}
      <div className="login-hero">
        <div className="hero-content">
          <div className="hero-brand">
            <Logo variant="full" />
          </div>

          <div className="hero-text">
            <h1>
              Gestão Integrada <br />
              <span className="purple-gradient-text">de Chamados</span>
            </h1>
            <p>
              Conecte atendimentos, equipamentos e sua equipe na plataforma centralizada TechNexus.
            </p>
          </div>

          {/* Área de Destaques do Sistema */}
          <div className="hero-features-card">
            <div className="feature-item">
              <div className="feature-badge">⚡</div>
              <div>
                <strong>Atendimento Inteligente</strong>
                <p>Priorização automática por SLA e impacto no negócio.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-badge">🛡️</div>
              <div>
                <strong>Segurança Avançada</strong>
                <p>Controle de acesso restrito e histórico de ações auditável.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-badge">📊</div>
              <div>
                <strong>Métricas em Tempo Real</strong>
                <p>Acompanhe o desempenho da infraestrutura em um único lugar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coluna Direita: Formulário de Acesso */}
      <div className="login-form-container">
        <div className="form-card">
          <div className="form-header">
            <h2>Acesse sua conta</h2>
            <p>Informe suas credenciais para entrar no TechNexus</p>
          </div>

          {/* Abas de seleção de portal */}
          <div className="portal-selector">
            <button
              type="button"
              className={`portal-btn ${tipoAcesso === 'funcionario' ? 'active' : ''}`}
              onClick={() => setTipoAcesso('funcionario')}
            >
              Portal Funcionário
            </button>
            <button
              type="button"
              className={`portal-btn ${tipoAcesso === 'cliente' ? 'active' : ''}`}
              onClick={() => setTipoAcesso('cliente')}
            >
              Portal Cliente
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label htmlFor="email">
                E-mail {tipoAcesso === 'funcionario' ? 'corporativo' : 'do cliente'}
              </label>
              <input
                id="email"
                type="email"
                placeholder={
                  tipoAcesso === 'funcionario'
                    ? 'usuario@technexus.com'
                    : 'cliente@empresa.com'
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="••••••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                />
                <span className="label-text">Lembrar acesso</span>
              </label>
              <a href="#esqueceu" className="forgot-link">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="submit-btn">
              Entrar no Sistema
            </button>
          </form>

          <footer className="login-footer">
            © 2026 TechNexus • Todos os direitos reservados
          </footer>
        </div>
      </div>
    </div>
  );
}