import React, { useState, useEffect } from 'react';
import fakeBackend from '../../services/fakeBackend';

// Composant pour vérifier si l'utilisateur a les permissions requises
const PermissionCheck = ({ permission, children, fallback = null }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const permitted = await fakeBackend.hasPermission(permission);
        setHasPermission(permitted);
      } catch (error) {
        console.error('Erreur lors de la vérification des permissions:', error);
        setHasPermission(false);
      } finally {
        setLoading(false);
      }
    };

    checkPermission();
  }, [permission]);

  if (loading) {
    return <div className="spinner-border spinner-border-sm" role="status"></div>;
  }

  return hasPermission ? children : fallback;
};

export default PermissionCheck;
