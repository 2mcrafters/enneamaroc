import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Composant FormInput amélioré avec des animations et une validation
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.label - Le libellé du champ
 * @param {string} props.name - Le nom du champ
 * @param {string} props.type - Le type de champ (text, email, password, etc.)
 * @param {string} props.value - La valeur du champ
 * @param {Function} props.onChange - La fonction à exécuter lors du changement de valeur
 * @param {string} props.placeholder - Le texte d'espace réservé
 * @param {boolean} props.required - Indique si le champ est obligatoire
 * @param {string} props.error - Le message d'erreur à afficher
 * @param {Object} props.style - Styles CSS supplémentaires
 * @returns {React.ReactNode} - Le composant FormInput
 */
const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  style = {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = {
    marginBottom: '16px',
    ...style
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    fontSize: '14px',
    color: error ? '#ef4444' : '#0f172a',
    transition: 'color 0.3s ease'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: `2px solid ${error ? '#ef4444' : isFocused ? '#1c8bce' : '#e2e8f0'}`,
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: error ? '#fff5f5' : '#ffffff',
    color: '#333333' // Ensuring text is dark and visible
  };

  const errorStyle = {
    fontSize: '12px',
    color: '#ef4444',
    marginTop: '4px'
  };

  return (
    <div style={containerStyle}>
      {label && (
        <label htmlFor={name} style={labelStyle}>
          {label}
          {required && <span style={{ color: '#ef4444' }}> *</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        {...props}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  style: PropTypes.object
};

export default FormInput;
