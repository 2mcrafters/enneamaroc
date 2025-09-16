// src/Pages/ParcoursPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { parcoursService } from '../services/parcoursService';
import { abonnementService } from '../services/abonnementService';
import { auth } from '../services/auth';

const ParcoursPage = () => {
  const [parcours, setParcours] = useState([]);
  const [userInterests, setUserInterests] = useState([]);
  const [userAbonnements, setUserAbonnements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const colors = {
    primary: '#1c8bce',
    success: '#059669',
    warning: '#ea580c',
    danger: '#dc2626',
    gray: '#6b7280',
    lightGray: '#f3f4f6'
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [parcoursResponse, interestsResponse, abonnementsResponse] = await Promise.all([
        parcoursService.getAll(),
        parcoursService.getUserInterests(),
        abonnementService.getMySubscriptions()
      ]);

      setParcours(parcoursResponse.data || []);
      setUserInterests(interestsResponse.data || []);
      setUserAbonnements(abonnementsResponse.data || []);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      setMessage({ type: 'error', text: 'Erreur lors du chargement des données' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (parcoursId) => {
    if (!auth.isAuthenticated()) {
      navigate('/seconnecter');
      return;
    }

    setSubscribing(parcoursId);
    try {
      await abonnementService.create({
        parcours_id: parcoursId,
        methode_paiement: 'stripe' // ou autre méthode
      });

      setMessage({ 
        type: 'success', 
        text: 'Abonnement créé avec succès!' 
      });

      // Recharger les données
      loadData();
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Erreur lors de la souscription' 
      });
    } finally {
      setSubscribing(null);
    }
  };

  const handleToggleInterest = async (parcoursId) => {
    if (!auth.isAuthenticated()) {
      navigate('/seconnecter');
      return;
    }

    try {
      const isInterested = userInterests.some(interest => interest.id === parcoursId);
      
      if (isInterested) {
        await parcoursService.removeInterest(parcoursId);
      } else {
        await parcoursService.addInterest(parcoursId);
      }

      // Recharger les intérêts
      const interestsResponse = await parcoursService.getUserInterests();
      setUserInterests(interestsResponse.data || []);
    } catch (error) {
      console.error('Erreur intérêt:', error);
    }
  };

  const isUserSubscribed = (parcoursId) => {
    return userAbonnements.some(abonnement => 
      abonnement.parcours_id === parcoursId && abonnement.statut === 'actif'
    );
  };

  const isUserInterested = (parcoursId) => {
    return userInterests.some(interest => interest.id === parcoursId);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <section style={{ padding: '120px 0 80px', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 style={{ color: colors.primary, fontWeight: '700', marginBottom: '16px' }}>
              Nos Parcours de Développement
            </h2>
            <p style={{ color: colors.gray, fontSize: '1.1rem' }}>
              Découvrez nos parcours d'accompagnement personnalisés pour votre développement personnel et professionnel
            </p>
          </div>
        </div>

        {message && (
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8">
              <div className={`alert alert-${message.type === 'error' ? 'danger' : 'success'} alert-dismissible`}>
                {message.text}
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setMessage(null)}
                ></button>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {parcours.map(parcour => (
            <div key={parcour.id} className="col-lg-4 col-md-6 mb-4">
              <div style={{
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              className="hover-card">
                
                {/* Header avec prix */}
                <div style={{
                  background: `linear-gradient(135deg, ${colors.primary}, #2563eb)`,
                  color: 'white',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>
                    {parcour.nom}
                  </h4>
                  <div style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '4px' }}>
                    {parcour.prix}€
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>
                    {parcour.duree_mois} mois d'accompagnement
                  </div>
                </div>

                {/* Contenu */}
                <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ 
                    color: colors.gray, 
                    lineHeight: '1.6', 
                    marginBottom: '24px',
                    flex: '1'
                  }}>
                    {parcour.description || 'Un parcours complet pour votre développement personnel'}
                  </p>

                  {/* Statut utilisateur */}
                  <div style={{ marginBottom: '16px' }}>
                    {isUserSubscribed(parcour.id) ? (
                      <div style={{
                        background: colors.success,
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                        <i className="bi bi-check-circle me-2"></i>
                        Abonné
                      </div>
                    ) : isUserInterested(parcour.id) ? (
                      <div style={{
                        background: colors.warning,
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                        <i className="bi bi-heart-fill me-2"></i>
                        Intéressé
                      </div>
                    ) : null}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {!isUserSubscribed(parcour.id) && (
                      <button
                        onClick={() => handleSubscribe(parcour.id)}
                        disabled={subscribing === parcour.id}
                        style={{
                          flex: '1',
                          background: colors.primary,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          opacity: subscribing === parcour.id ? '0.7' : '1'
                        }}
                      >
                        {subscribing === parcour.id ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Souscription...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-credit-card me-2"></i>
                            S'abonner
                          </>
                        )}
                      </button>
                    )}

                    <button
                      onClick={() => handleToggleInterest(parcour.id)}
                      style={{
                        background: isUserInterested(parcour.id) ? colors.danger : colors.lightGray,
                        color: isUserInterested(parcour.id) ? 'white' : colors.gray,
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        cursor: 'pointer',
                        minWidth: '50px'
                      }}
                    >
                      <i className={`bi ${isUserInterested(parcour.id) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {parcours.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-book" style={{ fontSize: '3rem', color: colors.gray, marginBottom: '16px' }}></i>
            <h5 style={{ color: colors.gray }}>Aucun parcours disponible pour le moment</h5>
          </div>
        )}
      </div>

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
      `}</style>
    </section>
  );
};

export default ParcoursPage;
