import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fakeBackend from '../../services/fakeBackend';
import PermissionCheck from './PermissionCheck';
import { colors, shadows, spacing, borderRadius, typography, componentStyles } from '../../Components/Admin/AdminStyles';

const AdminNav = () => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (fakeBackend.isAuthenticated()) {
          const profile = await fakeBackend.getUserProfile();
          setCurrentUser(profile);
        }
      } catch (error) {
        console.error("Erreur lors du chargement du profil:", error);
      }
    };
    
    fetchUserProfile();
  }, []);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/admin', icon: 'grid-fill', label: 'Vue d\'ensemble' },
    { path: '/admin/dashboard', icon: 'speedometer2', label: 'Tableau de Bord' },
    { path: '/admin/users', icon: 'people', label: 'Gestion des Utilisateurs' },
    { path: '/admin/courses', icon: 'book', label: 'Gestion des Formations' },
    { path: '/admin/events', icon: 'calendar-event', label: 'Gestion des Événements' },
    { path: '/admin/system', icon: 'gear', label: 'Système', permission: 'system.manage' },
    { path: '/admin/settings', icon: 'sliders', label: 'Paramètres', permission: 'settings.edit' },
    { path: '/', icon: 'box-arrow-left', label: 'Quitter l\'Admin', type: 'exit' }
  ];

  const renderNavLink = (link) => {
    const isActiveLink = isActive(link.path);
    const isHovered = hoveredLink === link.path;
    
    const linkContent = (
      <div 
        style={{
          ...componentStyles.nav.item.base,
          ...(isActiveLink ? componentStyles.nav.item.active : {}),
          ...(isHovered ? componentStyles.nav.item.hover : {}),
          ...(link.type === 'exit' ? { color: colors.error } : {})
        }}
        onMouseEnter={() => setHoveredLink(link.path)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '24px', 
          height: '24px', 
          ...(isActiveLink && { color: colors.primary }) 
        }}>
          <i className={`bi bi-${link.icon}`}></i>
        </span>
        <span style={{ flex: 1 }}>{link.label}</span>
        {isHovered && !isActiveLink && (
          <span style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%',
            backgroundColor: link.type === 'exit' ? colors.error : colors.primary,
            transition: 'all 0.2s ease'
          }}></span>
        )}
      </div>
    );

    if (link.permission) {
      return (
        <PermissionCheck key={link.path} permission={link.permission}>
          <Link to={link.path} style={{ textDecoration: 'none' }}>
            {linkContent}
          </Link>
        </PermissionCheck>
      );
    }
    
    return (
      <Link key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
        {linkContent}
      </Link>
    );
  };
  
  return (
    <div style={{
      ...componentStyles.nav.container,
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
      boxShadow: shadows.md,
      borderRight: `1px solid ${colors.border}`,
      background: colors.background
    }} className="mb-4">
      <div style={{
        ...componentStyles.nav.header,
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(8px)',
        background: `${colors.background}F8`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h5 style={{ 
            margin: '0', 
            fontWeight: typography.fontWeight.semibold,
            fontSize: typography.fontSize.lg
          }}>
            Administration
          </h5>
          {currentUser && (
            <div style={{
              ...componentStyles.badge.base,
              ...componentStyles.badge.primary,
              backgroundColor: colors.accent,
              color: 'white',
            }}>
              Admin
            </div>
          )}
        </div>
      </div>
      
      {currentUser && (
        <div style={componentStyles.nav.profile}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
            <div style={{ 
              position: 'relative', 
              borderRadius: '50%', 
              width: '50px', 
              height: '50px',
              overflow: 'hidden',
              boxShadow: shadows.md,
              border: `2px solid ${colors.background}`
            }}>
              <img 
                src={currentUser.avatarUrl} 
                alt="Admin" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h6 style={{ 
                margin: '0',
                fontWeight: typography.fontWeight.medium,
                color: colors.text,
                fontSize: typography.fontSize.sm
              }}>
                {currentUser.firstName} {currentUser.lastName}
              </h6>
              <small style={{ 
                color: colors.textMuted,
                fontSize: typography.fontSize.xs
              }}>
                {currentUser.email}
              </small>
            </div>
          </div>
        </div>
      )}
      
      <div style={{ padding: `${spacing[2]} 0` }}>
        {navLinks.map(renderNavLink)}
      </div>
    </div>
  );
};

export default AdminNav;
