// src/Components/Payment/NouveauPaiement.jsx
import React, { useState, useEffect } from 'react';
import paiementService from '../../services/paiementService';
import parcoursService from '../../services/parcoursService';

const NouveauPaiement = ({ onSuccess, onCancel, preselectedParcours = null }) => {
  const [formData, setFormData] = useState({
    parcours_id: preselectedParcours || '',
    montant: '',
    devise: 'EUR',
    type_paiement: '',
    methode_paiement: '',
    reference_transaction: '',
    reference_externe: '',
    numero_cheque: '',
    date_paiement: new Date().toISOString().split('T')[0],
    date_echeance: '',
    nom_banque: '',
    iban: '',
    bic: '',
    notes: ''
  });

  const [fichier, setFichier] = useState(null);
  const [parcours, setParcours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadParcours();
  }, []);

  const loadParcours = async () => {
    try {
      const response = await parcoursService.getAll();
      setParcours(response.parcours || []);
    } catch (error) {
      console.error('Erreur chargement parcours:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validation du fichier
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          fichier: 'Le fichier ne doit pas dépasser 10MB'
        }));
        return;
      }
      
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          fichier: 'Format de fichier non autorisé (JPG, PNG, PDF, DOC, DOCX)'
        }));
        return;
      }
      
      setFichier(file);
      setErrors(prev => ({
        ...prev,
        fichier: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const validation = paiementService.validatePaiementData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    try {
      setLoading(true);
      await paiementService.createPaiement(formData, fichier);
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setErrors({ submit: error.message || 'Erreur lors de la création du paiement' });
    } finally {
      setLoading(false);
    }
  };

  const typesPaiement = [
    { value: 'carte_bancaire', label: 'Carte bancaire' },
    { value: 'virement', label: 'Virement bancaire' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'stripe', label: 'Stripe' },
    { value: 'especes', label: 'Espèces' },
    { value: 'cheque', label: 'Chèque' },
    { value: 'crypto', label: 'Cryptomonnaie' },
    { value: 'autre', label: 'Autre' }
  ];

  const methodesPaiement = [
    { value: 'immediate', label: 'Paiement immédiat' },
    { value: 'echelonne', label: 'Paiement échelonné' },
    { value: 'mensuel', label: 'Paiement mensuel' },
    { value: 'unique', label: 'Paiement unique' }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Nouveau Paiement</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sélection du parcours */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Parcours *
          </label>
          <select
            name="parcours_id"
            value={formData.parcours_id}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={preselectedParcours}
          >
            <option value="">Sélectionner un parcours</option>
            {parcours.map(p => (
              <option key={p.id} value={p.id}>
                {p.nom} - {paiementService.formatMontant(p.prix, 'EUR')}
              </option>
            ))}
          </select>
          {errors.parcours_id && <p className="text-red-500 text-sm mt-1">{errors.parcours_id}</p>}
        </div>

        {/* Montant et devise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Montant *
            </label>
            <input
              type="number"
              name="montant"
              value={formData.montant}
              onChange={handleInputChange}
              min="0"
              step="0.01"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.00"
            />
            {errors.montant && <p className="text-red-500 text-sm mt-1">{errors.montant}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Devise
            </label>
            <select
              name="devise"
              value={formData.devise}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="MAD">MAD</option>
            </select>
          </div>
        </div>

        {/* Type et méthode de paiement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de paiement *
            </label>
            <select
              name="type_paiement"
              value={formData.type_paiement}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sélectionner un type</option>
              {typesPaiement.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.type_paiement && <p className="text-red-500 text-sm mt-1">{errors.type_paiement}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Méthode de paiement *
            </label>
            <select
              name="methode_paiement"
              value={formData.methode_paiement}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sélectionner une méthode</option>
              {methodesPaiement.map(methode => (
                <option key={methode.value} value={methode.value}>
                  {methode.label}
                </option>
              ))}
            </select>
            {errors.methode_paiement && <p className="text-red-500 text-sm mt-1">{errors.methode_paiement}</p>}
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date de paiement
            </label>
            <input
              type="date"
              name="date_paiement"
              value={formData.date_paiement}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date d'échéance
            </label>
            <input
              type="date"
              name="date_echeance"
              value={formData.date_echeance}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Champs spécifiques selon le type de paiement */}
        {formData.type_paiement === 'virement' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                IBAN *
              </label>
              <input
                type="text"
                name="iban"
                value={formData.iban}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"
              />
              {errors.iban && <p className="text-red-500 text-sm mt-1">{errors.iban}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                BIC/SWIFT
              </label>
              <input
                type="text"
                name="bic"
                value={formData.bic}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="BNPAFRPP"
              />
            </div>
          </div>
        )}

        {formData.type_paiement === 'cheque' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Numéro de chèque *
            </label>
            <input
              type="text"
              name="numero_cheque"
              value={formData.numero_cheque}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Numéro du chèque"
            />
            {errors.numero_cheque && <p className="text-red-500 text-sm mt-1">{errors.numero_cheque}</p>}
          </div>
        )}

        {/* Références */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Référence de transaction
            </label>
            <input
              type="text"
              name="reference_transaction"
              value={formData.reference_transaction}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="REF123456"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Référence externe
            </label>
            <input
              type="text"
              name="reference_externe"
              value={formData.reference_externe}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Référence du système externe"
            />
          </div>
        </div>

        {/* Fichier justificatif */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fichier justificatif
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Formats acceptés: JPG, PNG, PDF, DOC, DOCX (max. 10MB)
          </p>
          {errors.fichier && <p className="text-red-500 text-sm mt-1">{errors.fichier}</p>}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Informations supplémentaires..."
          />
        </div>

        {/* Erreur de soumission */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-800">{errors.submit}</p>
          </div>
        )}

        {/* Boutons */}
        <div className="flex justify-end space-x-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Annuler
            </button>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Création...' : 'Créer le paiement'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NouveauPaiement;
