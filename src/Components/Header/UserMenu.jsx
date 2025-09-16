import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services/auth';

const UserMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = auth.isAuthenticated();
      setIsLoggedIn(loggedIn);
      
      if (loggedIn) {
        try {
          const isAdminUser = await auth.isAdmin();
          setIsAdmin(isAdminUser);
        } catch (error) {
          console.error('Erreur lors de la vérification du rôle admin:', error);
        }
      }
    };
    
    checkAuth();
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    setIsAdmin(false);
    setDropdownOpen(false);
    window.location.href = '/';
  };

  return (
    <div className="user-menu-container">
      {isLoggedIn ? (
        <div className="user-dropdown">
          <button 
            className="user-menu-button" 
            onClick={toggleDropdown}
          >
            <i className="fas fa-user-circle"></i>
            <span className="ml-2">Mon compte</span>
          </button>
          
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                <i className="fas fa-user mr-2"></i> Mon profil
              </Link>
              
              {isAdmin && (
                <Link to="/admin" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <i className="fas fa-users-cog mr-2"></i> Admin
                </Link>
              )}
              
              <button className="dropdown-item logout-button" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt mr-2"></i> Se déconnecter
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="auth-buttons">
          <Link to="/seconnecter" className="login-button">
            Se connecter
          </Link>
          <Link to="/register" className="register-button">
            S'inscrire
          </Link>
        </div>
      )}

      <style jsx>{`
        .user-menu-container {
          position: relative;
          display: inline-block;
        }
        
        .user-menu-button {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 8px 12px;
          color: #333;
          font-weight: 500;
          transition: all 0.2s;
        }
        
        .user-menu-button:hover {
          color: #e13734;
        }
        
        .dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          background: white;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 180px;
          z-index: 100;
        }
        
        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          color: #333;
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .dropdown-item:hover {
          background: #f8f9fa;
          color: #e13734;
        }
        
        .logout-button {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-top: 1px solid #eee;
        }
        
        .auth-buttons {
          display: flex;
          gap: 10px;
        }
        
        .login-button, .register-button {
          padding: 6px 12px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s;
        }
        
        .login-button {
          color: #333;
        }
        
        .register-button {
          background: #e13734;
          color: white;
        }
        
        .login-button:hover {
          color: #e13734;
        }
        
        .register-button:hover {
          background: #c62a27;
        }
        
        .mr-2 {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default UserMenu;
