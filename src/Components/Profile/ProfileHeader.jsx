// src/Components/Profile/ProfileHeader.jsx
import React from 'react';

/**
 * ProfileHeader component for displaying the user profile header
 * @param {Object} props
 * @param {Object} props.profile - User profile data
 * @param {boolean} props.isOwner - Whether the current user is the profile owner
 * @param {Function} props.onEditPersonalInfo - Function to handle editing personal information
 * @param {Function} props.onLogout - Function to handle logout
 */
const ProfileHeader = ({ profile, isOwner, onEditPersonalInfo, onLogout }) => {
  if (!profile) return null;
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px',
      background: 'white',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        {/* Avatar */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)'
        }}>
          <img 
            src={profile.avatarUrl || '/assets/imgss001/coaching (16).jpg'} 
            alt={`${profile.firstName} ${profile.lastName}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        
        {/* Profile info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: '700', margin: '0 0 8px 0' }}>
                {profile.firstName} {profile.lastName}
              </h1>
              
              {profile.typeName && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 12px 0' }}>
                  <span style={{
                    background: '#e6f0ff',
                    color: '#2563eb',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    Type {profile.enneagramType} — {profile.typeName}
                  </span>
                </div>
              )}
              
              <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                <div style={{ marginBottom: '4px' }}>
                  <i className="bi bi-envelope" style={{ marginRight: '8px' }}></i>
                  {profile.email}
                </div>
                
                {profile.phone && (
                  <div style={{ marginBottom: '4px' }}>
                    <i className="bi bi-telephone" style={{ marginRight: '8px' }}></i>
                    {profile.phone}
                  </div>
                )}
                
                {profile.address && (
                  <div style={{ marginBottom: '4px' }}>
                    <i className="bi bi-geo-alt" style={{ marginRight: '8px' }}></i>
                    {profile.address}{profile.city ? `, ${profile.city}` : ''}{profile.country ? `, ${profile.country}` : ''}
                  </div>
                )}
              </div>
            </div>
            
            {/* Buttons for profile owner */}
            {isOwner && (
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <button 
                  className="btn btn-outline-primary btn-sm"
                  onClick={onEditPersonalInfo}
                >
                  <i className="bi bi-pencil-square me-1"></i>
                  Modifier
                </button>
                <button 
                  className="btn btn-outline-danger btn-sm"
                  onClick={onLogout}
                >
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Biography section */}
      {profile.bio && (
        <div style={{ marginTop: '16px', color: '#4b5563', lineHeight: '1.6' }}>
          <h5 style={{ fontSize: '1rem', marginBottom: '8px', fontWeight: '600' }}>Biographie</h5>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            {profile.bio}
          </p>
        </div>
      )}
      
      {/* Account information */}
      <div style={{ 
        display: 'flex', 
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '16px',
        paddingTop: '16px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div>
          <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '4px' }}>
            Membre depuis
          </div>
          <div style={{ fontWeight: '600' }}>
            {new Date(profile.memberSince).toLocaleDateString()}
          </div>
        </div>
        
        <div>
          <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '4px' }}>
            Type de compte
          </div>
          <div style={{ 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>{profile.accountType}</span>
            {profile.accountType.toLowerCase().includes('premium') && (
              <span style={{
                background: '#fdf4e7',
                color: '#ea580c',
                padding: '2px 8px',
                borderRadius: '999px',
                fontSize: '0.7rem',
                fontWeight: '600'
              }}>
                PREMIUM
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
