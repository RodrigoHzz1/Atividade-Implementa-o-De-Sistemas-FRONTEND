import React, { useState } from 'react';
import Login from '../pages/Login/login';
import HomeFuncionario from '../pages/Home/homeFuncionario';
import HomeCliente from '../pages/Home/homeCliente';
import Dashboard from '../pages/Dashboard/dashboard';
import Chamados from '../pages/Chamados/chamados';
import NovoChamado from '../pages/NovoChamado/novoChamado';
import DetalhesChamado from '../pages/DetalhesChamado/detalhesChamado';
import Clientes from '../pages/Clientes/clientes';
import Funcionarios from '../pages/Funcionarios/funcionarios';
import Equipamentos from '../pages/Equipamentos/equipamentos';
import Relatorio from '../pages/Relatorio/relatorio';

export default function AppRoutes() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  // Se não estiver logado, exibe a tela de Login
  if (!user) {
    return <Login onLoginSuccess={(userData) => setUser(userData)} />;
  }

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  // Renderização condicional para o Portal do Cliente
  if (user.tipo === 'cliente') {
    if (currentPage === 'novoChamado') {
      return <NovoChamado user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    }
    if (currentPage === 'detalhesChamado') {
      return <DetalhesChamado user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    }
    return <HomeCliente user={user} onLogout={handleLogout} onNavigate={handleNavigate} />;
  }

  // Renderização condicional para o Portal do Funcionário
  return (
    <div>
      {currentPage === 'home' && (
        <HomeFuncionario user={user} onLogout={handleLogout} onNavigate={handleNavigate} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />
      )}
      {currentPage === 'chamados' && (
        <Chamados user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />
      )}
      {currentPage === 'clientes' && (
        <Clientes user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />
      )}
      {currentPage === 'funcionarios' && (
        <Funcionarios user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />
      )}
      {currentPage === 'equipamentos' && (
        <Equipamentos user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />
      )}
      {currentPage === 'relatorio' && (
        <Relatorio user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />
      )}
    </div>
  );
}