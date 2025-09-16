import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../services/auth';

/**
 * Composant PrivateRoute pour protéger les routes qui nécessitent une authentification
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Les composants enfants à rendre si l'utilisateur est authentifié
 * @param {string} [props.redirectTo="/seconnecter"] - L'URL de redirection en cas d'absence d'authentification
 * @returns {React.ReactNode} - Redirige vers la page de connexion ou affiche les enfants
 */
const PrivateRoute = ({ children, redirectTo = "/seconnecter" }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Vérifier l'état d'authentification
    const checkAuth = () => {
      const authenticated = auth.isAuthenticated();
      console.log('PrivateRoute - Auth check:', authenticated);
      setIsAuthenticated(authenticated);
      setAuthChecked(true);
      
      // Si non authentifié, rediriger immédiatement
      if (!authenticated) {
        console.log('PrivateRoute - User not authenticated, redirecting...');
      }
    };

    checkAuth();
    
    // Vérifier l'authentification périodiquement pour plus de sécurité
    const intervalId = setInterval(checkAuth, 5000);
    
    // Vérification supplémentaire avec un délai court pour éviter les faux positifs
    const doubleCheck = setTimeout(() => {
      if (!auth.isAuthenticated()) {
        console.log('PrivateRoute - Double check failed, redirecting...');
        setIsAuthenticated(false);
      }
    }, 500);
    
    // Ajouter un écouteur pour les changements d'authentification
    window.addEventListener('storage', checkAuth);
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(doubleCheck);
      window.removeEventListener('storage', checkAuth);
    };
  }, [location]);

  if (!authChecked) {
    // Afficher un indicateur de chargement pendant la vérification
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #1c8bce',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <p style={{ color: '#64748b' }}>Vérification de l'authentification...</p>
      </div>
    );
  }

  // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
  if (!isAuthenticated) {
    console.log('PrivateRoute - Redirecting to login page from:', location.pathname);
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Si l'utilisateur est authentifié, afficher les enfants
  return children;
};

export default PrivateRoute;
