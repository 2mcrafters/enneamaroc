// src/Components/Payment/MesPaiements.jsx
import React, { useState, useEffect } from 'react';
import paiementService from '../../services/paiementService';

const MesPaiements = () => {
  const [paiements, setPaiements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    loadPaiements();
  }, [selectedStatus]);

  const loadPaiements = async () => {
    try {
      setLoading(true);
      const response = await paiementService.getMesPaiements(selectedStatus || null);
      setPaiements(response.paiements || []);
    } catch (error) {
      setError(error.message || 'Erreur lors du chargement des paiements');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (paiementId) => {
    try {
      await paiementService.downloadFichier(paiementId);
    } catch (error) {
      alert(error.message || 'Erreur lors du téléchargement');
    }
  };

  const getStatusBadge = (status) => {
    const color = paiementService.getStatusColor(status);
    const text = paiementService.getStatusText(status);
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}>
        {text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Chargement des paiements...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Mes Paiements</h3>
        
        {/* Filtre par statut */}
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Tous les statuts</option>
          <option value="en_attente">En attente</option>
          <option value="valide">Validé</option>
          <option value="refuse">Refusé</option>
          <option value="rembourse">Remboursé</option>
        </select>
      </div>

      {/* Messages d'erreur */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Liste des paiements */}
      {paiements.length === 0 ? (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun paiement</h3>
          <p className="mt-1 text-sm text-gray-500">
            {selectedStatus ? 'Aucun paiement trouvé pour ce statut.' : 'Vous n\'avez effectué aucun paiement.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {paiements.map((paiement) => (
            <div key={paiement.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">
                      {paiement.parcours_nom}
                    </h4>
                    {getStatusBadge(paiement.statut)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Montant:</span> {paiementService.formatMontant(paiement.montant, paiement.devise)}
                    </div>
                    <div>
                      <span className="font-medium">Type:</span> {paiementService.getTypeText(paiement.type_paiement)}
                    </div>
                    <div>
                      <span className="font-medium">Date:</span> {paiementService.formatDate(paiement.date_paiement)}
                    </div>
                    <div>
                      <span className="font-medium">Référence:</span> {paiement.reference_transaction || 'N/A'}
                    </div>
                  </div>

                  {paiement.commentaire_admin && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-md">
                      <span className="font-medium text-gray-700">Commentaire administrateur:</span>
                      <p className="text-gray-600 mt-1">{paiement.commentaire_admin}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-2 ml-4">
                  {paiement.fichier_justificatif && (
                    <button
                      onClick={() => handleDownload(paiement.id)}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger
                    </button>
                  )}
                </div>
              </div>

              {/* Détails supplémentaires pour certains types de paiement */}
              {(paiement.type_paiement === 'virement' && paiement.iban) && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">IBAN:</span> {paiement.iban}
                    {paiement.bic && (
                      <>
                        <span className="ml-4 font-medium">BIC:</span> {paiement.bic}
                      </>
                    )}
                  </div>
                </div>
              )}

              {(paiement.type_paiement === 'cheque' && paiement.numero_cheque) && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Numéro de chèque:</span> {paiement.numero_cheque}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MesPaiements;
