import React, { useState } from 'react';
import Login from '../pages/Login/login';
import HomeFuncionario from '../pages/Home/homeFuncionario';
import HomeCliente from '../pages/Home/homeCliente';
import Dashboard from '../pages/Dashboard/dashboard';
import Chamados from '../pages/Chamados/chamados';
import NovoChamado from '../pages/NovoChamado/novoChamado';
import DetalhesChamado from '../pages/DetalhesChamado/detalhesChamado';
import Clientes from '../pages/Clientes/clientes';
import UltimasAtualizacoes from '../pages/UltimasAtualizacoes/ultimasAtualizacoes';
import Funcionarios from '../pages/Funcionarios/funcionarios';
import Equipamentos from '../pages/Equipamentos/equipamentos';
import Relatorio from '../pages/Relatorio/relatorio';

export default function AppRoutes() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChamadoId, setSelectedChamadoId] = useState(null);

  if (!user) {
    return <Login onLoginSuccess={(userData) => setUser(userData)} />;
  }

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
    setSelectedChamadoId(null);
  };

  const handleNavigate = (page, param = null) => {
    if (page === 'gestaoChamados') page = 'chamados';
    if (page === 'baseClientes') page = 'clientes';
    if (page === 'relatorios') page = 'relatorio';

    if (param) setSelectedChamadoId(param);
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedChamadoId(null);
  };

  if (user.tipo === 'cliente') {
    switch (currentPage) {
      case 'novoChamado':
        return <NovoChamado user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
      case 'detalhesChamado':
        return <DetalhesChamado user={user} chamadoId={selectedChamadoId} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
      default:
        return <HomeCliente user={user} onLogout={handleLogout} onNavigate={handleNavigate} />;
    }
  }

  switch (currentPage) {
    case 'dashboard':
      return <Dashboard user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    case 'chamados':
      return <Chamados user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    case 'detalhesChamado':
      return <DetalhesChamado user={user} chamadoId={selectedChamadoId} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    case 'clientes':
      return <Clientes user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    case 'ultimasAtualizacoes':
      return <UltimasAtualizacoes user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    case 'funcionarios':
      return <Funcionarios user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    case 'equipamentos':
      return <Equipamentos user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    case 'relatorio':
      return <Relatorio user={user} onLogout={handleLogout} onBack={handleBack} onNavigate={handleNavigate} />;
    default:
      return <HomeFuncionario user={user} onLogout={handleLogout} onNavigate={handleNavigate} />;
  }
}