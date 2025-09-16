// src/Components/Profile/ProfileTabs.jsx
import React from 'react';

/**
 * ProfileTabs component for displaying user profile tabs
 * @param {Object} props
 * @param {string} props.activeTab - The currently active tab
 * @param {Function} props.setActiveTab - Function to change the active tab
 * @param {Object} props.profile - User profile data
 * @param {boolean} props.isOwner - Whether the current user is the profile owner
 */
const ProfileTabs = ({ activeTab, setActiveTab, profile, isOwner }) => {
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: 'bi-house-door', alwaysVisible: true },
    { id: 'courses', label: 'Formations', icon: 'bi-book', ownerOnly: true },
    { id: 'abonnements', label: 'Mes abonnements', icon: 'bi-credit-card', ownerOnly: true },
    { id: 'paiements', label: 'Mes paiements', icon: 'bi-wallet', ownerOnly: true },
    { id: 'events', label: 'Événements', icon: 'bi-calendar-event', ownerOnly: true },
    { id: 'info', label: 'Informations', icon: 'bi-person', alwaysVisible: true },
  ];

  const visibleTabs = tabs.filter(tab => 
    tab.alwaysVisible || (isOwner && tab.ownerOnly)
  );

  // Styles for tabs
  const styles = {
    tabContainer: {
      display: 'flex',
      borderBottom: '1px solid #e5e7eb',
      marginBottom: '24px',
      flexWrap: 'wrap'
    },
    tab: (active) => ({
      padding: '12px 20px',
      fontSize: '1rem',
      fontWeight: active ? '600' : '400',
      color: active ? '#3b82f6' : '#6b7280',
      cursor: 'pointer',
      borderBottom: active ? '2px solid #3b82f6' : 'none',
      marginBottom: '-1px',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      transition: 'all 0.2s ease'
    }),
    icon: {
      marginRight: '8px'
    }
  };

  return (
    <div style={styles.tabContainer}>
      {visibleTabs.map((tab) => (
        <button 
          key={tab.id}
          style={{
            ...styles.tab(activeTab === tab.id),
          }}
          onClick={() => setActiveTab(tab.id)} 
        >
          <i className={tab.icon} style={styles.icon}></i>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
