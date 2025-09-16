import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Composant Toast pour afficher des notifications à l'utilisateur
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.message - Le message à afficher
 * @param {string} props.type - Le type de notification (success, error, warning, info)
 * @param {number} props.duration - La durée d'affichage en millisecondes
 * @param {Function} props.onClose - La fonction à exécuter lors de la fermeture
 * @returns {React.ReactNode} - Le composant Toast
 */
const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      
      // Attendre que l'animation de fermeture soit terminée
      const closeTimer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 300);
      
      return () => clearTimeout(closeTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  // Définir les styles selon le type
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          background: '#e6f7ee',
          color: '#0d9f4f',
          borderLeft: '4px solid #0d9f4f',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          )
        };
      case 'error':
        return {
          background: '#fee2e2',
          color: '#ef4444',
          borderLeft: '4px solid #ef4444',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          )
        };
      case 'warning':
        return {
          background: '#fef9c3',
          color: '#eab308',
          borderLeft: '4px solid #eab308',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          )
        };
      case 'info':
      default:
        return {
          background: '#e0f2fe',
          color: '#0284c7',
          borderLeft: '4px solid #0284c7',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          )
        };
    }
  };

  const typeStyles = getTypeStyles();

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    maxWidth: '320px',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    zIndex: 1000,
    opacity: closing ? 0 : 1,
    transform: closing ? 'translateX(20px)' : 'translateX(0)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    ...typeStyles
  };

  const closeStyle = {
    background: 'transparent',
    border: 'none',
    color: 'currentColor',
    padding: '0',
    cursor: 'pointer',
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  return (
    <div style={containerStyle}>
      <div>{typeStyles.icon}</div>
      <div style={{ flex: 1 }}>{message}</div>
      <button onClick={handleClose} style={closeStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func
};

/**
 * Créateur de Toast pour afficher des notifications à l'utilisateur
 */
export const createToast = () => {
  let container = document.getElementById('toast-container');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  return {
    /**
     * Affiche un toast avec un message et un type spécifique
     * @param {string} message - Le message à afficher
     * @param {string} type - Le type de notification (success, error, warning, info)
     * @param {number} duration - La durée d'affichage en millisecondes
     */
    show: (message, type = 'info', duration = 3000) => {
      const toastId = `toast-${Date.now()}`;
      const toastElement = document.createElement('div');
      toastElement.id = toastId;
      container.appendChild(toastElement);

      const root = ReactDOM.createRoot(toastElement);
      root.render(
        <Toast 
          message={message} 
          type={type} 
          duration={duration} 
          onClose={() => {
            root.unmount();
            toastElement.remove();
          }} 
        />
      );
    },
    
    /**
     * Affiche un toast de succès
     * @param {string} message - Le message à afficher
     * @param {number} duration - La durée d'affichage en millisecondes
     */
    success: (message, duration = 3000) => {
      createToast().show(message, 'success', duration);
    },
    
    /**
     * Affiche un toast d'erreur
     * @param {string} message - Le message à afficher
     * @param {number} duration - La durée d'affichage en millisecondes
     */
    error: (message, duration = 3000) => {
      createToast().show(message, 'error', duration);
    },
    
    /**
     * Affiche un toast d'avertissement
     * @param {string} message - Le message à afficher
     * @param {number} duration - La durée d'affichage en millisecondes
     */
    warning: (message, duration = 3000) => {
      createToast().show(message, 'warning', duration);
    },
    
    /**
     * Affiche un toast d'information
     * @param {string} message - Le message à afficher
     * @param {number} duration - La durée d'affichage en millisecondes
     */
    info: (message, duration = 3000) => {
      createToast().show(message, 'info', duration);
    }
  };
};

export default Toast;
