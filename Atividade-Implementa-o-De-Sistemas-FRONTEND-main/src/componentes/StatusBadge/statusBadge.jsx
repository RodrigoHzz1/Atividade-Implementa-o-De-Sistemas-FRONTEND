import React from 'react';
import './statusBadge.css';

export default function StatusBadge({ status }) {
  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case 'aberto': return 'badge-open';
      case 'em andamento': return 'badge-progress';
      case 'concluido': return 'badge-closed';
      default: return 'badge-default';
    }
  };

  return (
    <span className={`status-badge ${getStatusClass()}`}>
      {status}
    </span>
  );
}