import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Composant Button amélioré avec des animations et des effets au survol
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Le contenu du bouton
 * @param {Function} props.onClick - La fonction à exécuter lors du clic
 * @param {string} props.variant - La variante du bouton (primary, secondary, outline, danger)
 * @param {string} props.size - La taille du bouton (small, medium, large)
 * @param {boolean} props.disabled - Indique si le bouton est désactivé
 * @param {boolean} props.isLoading - Indique si le bouton est en cours de chargement
 * @param {string} props.className - Classes CSS supplémentaires
 * @param {Object} props.style - Styles CSS supplémentaires
 * @returns {React.ReactNode} - Le composant Button
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  className = '',
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Définir les styles de base
  const getBaseStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.7 : 1,
    boxShadow: isHovered && !disabled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    transform: isHovered && !disabled ? 'translateY(-2px)' : 'translateY(0)',
    ...style
  });

  // Définir les styles selon la variante
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: isHovered && !disabled ? '#1872a7' : '#1c8bce',
          color: '#ffffff',
          border: 'none',
        };
      case 'secondary':
        return {
          background: isHovered && !disabled ? '#e2e8f0' : '#f1f5f9',
          color: '#334155',
          border: '1px solid #cbd5e1',
        };
      case 'outline':
        return {
          background: 'transparent',
          color: '#1c8bce',
          border: '1px solid #1c8bce',
        };
      case 'danger':
        return {
          background: isHovered && !disabled ? '#dc2626' : '#ef4444',
          color: '#ffffff',
          border: 'none',
        };
      default:
        return {
          background: '#1c8bce',
          color: '#ffffff',
          border: 'none',
        };
    }
  };

  // Définir les styles selon la taille
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '6px 12px',
          fontSize: '14px',
        };
      case 'medium':
        return {
          padding: '10px 20px',
          fontSize: '16px',
        };
      case 'large':
        return {
          padding: '12px 24px',
          fontSize: '18px',
        };
      default:
        return {
          padding: '10px 20px',
          fontSize: '16px',
        };
    }
  };

  // Combiner tous les styles
  const buttonStyles = {
    ...getBaseStyles(),
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  // Rendu du contenu du bouton
  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <span style={{ 
            width: '16px', 
            height: '16px',
            borderRadius: '50%',
            border: '2px solid',
            borderColor: 'currentColor transparent currentColor transparent',
            animation: 'spin 1s linear infinite'
          }}></span>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <span>Chargement...</span>
        </>
      );
    }
    return children;
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={buttonStyles}
      className={className}
      disabled={disabled || isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
