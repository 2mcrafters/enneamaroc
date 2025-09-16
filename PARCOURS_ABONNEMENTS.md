# Système de Parcours et Abonnements - Ennea Morocco

## 📋 Vue d'ensemble

Ce système remplace les anciens "centres d'intérêt" par un système complet de **parcours** avec **abonnements** payants.

## 🗄️ Structure de la base de données

### Tables créées

#### 1. `parcours`
- Remplace les anciens centres d'intérêt
- Contient les programmes payants
- **Colonnes:**
  - `id` - Identifiant unique
  - `nom` - Nom du parcours
  - `description` - Description détaillée
  - `prix` - Prix en euros
  - `duree_mois` - Durée en mois
  - `actif` - Statut actif/inactif

#### 2. `abonnement`
- Gère les inscriptions payantes aux parcours
- **Colonnes:**
  - `id` - Identifiant unique
  - `user_id` - Référence utilisateur
  - `parcours_id` - Référence parcours
  - `statut` - actif, suspendu, expire, annule
  - `date_debut` / `date_fin` - Période d'abonnement
  - `montant_paye` - Montant payé
  - `methode_paiement` - Mode de paiement

#### 3. `user_parcours_interesse`
- Intérêts des utilisateurs (avant abonnement)
- Relation many-to-many entre users et parcours

### Parcours par défaut
- **À la découverte de soi** - 29.99€ (3 mois)
- **Voyage intérieur** - 39.99€ (6 mois)  
- **Transmission et transformation** - 59.99€ (12 mois)

## 🚀 Migration

Pour installer ce système :

```bash
cd backend
node run_migration_abonnement.js
```

## 🧪 Tests

Pour tester les fonctionnalités :

```bash
cd backend
node test_parcours_abonnement.js
```

## 📡 API Endpoints

### Parcours (`/api/parcours`)
- `GET /` - Liste tous les parcours
- `GET /:id` - Récupère un parcours
- `POST /` - Crée un parcours (admin)
- `PUT /:id` - Modifie un parcours (admin)
- `DELETE /:id` - Supprime un parcours (admin)
- `POST /:id/interest` - Ajouter un intérêt
- `DELETE /:id/interest` - Retirer un intérêt
- `GET /user/interests` - Mes intérêts

### Abonnements (`/api/abonnements`)
- `GET /` - Mes abonnements / tous (admin)
- `GET /:id` - Détails d'un abonnement
- `POST /` - Créer un abonnement
- `PUT /:id/status` - Changer le statut (admin)
- `POST /:id/suspend` - Suspendre (admin)
- `POST /:id/reactivate` - Réactiver (admin)
- `POST /:id/cancel` - Annuler
- `GET /statistics` - Statistiques (admin)
- `GET /expiring` - Expirant bientôt (admin)

## 💻 Frontend

### Services créés
- `src/services/parcoursService.js` - Gestion des parcours
- `src/services/abonnementService.js` - Gestion des abonnements

### Modifications
- `Register.jsx` - Terminologie "parcours" au lieu de "centres d'intérêt"
- Checkbox personnalisées avec icônes check

## 🎯 Fonctionnalités

### Pour les utilisateurs
- Découvrir les parcours disponibles
- Exprimer l'intérêt pour des parcours
- S'abonner à des parcours
- Gérer ses abonnements
- Annuler ses abonnements

### Pour les administrateurs
- Créer/modifier/supprimer des parcours
- Gérer tous les abonnements
- Suspendre/réactiver des abonnements
- Voir les statistiques
- Voir les abonnements expirant

## 📊 Vues de base de données

### `abonnements_actifs`
Vue des abonnements actifs avec informations utilisateur et parcours

### `user_parcours_summary`
Résumé des intérêts et abonnements par utilisateur

## 🔐 Sécurité

- Authentification JWT requise
- Contrôle des rôles (admin/utilisateur)
- Validation des données
- Protection des données sensibles

## 📝 Prochaines étapes

1. Interface de gestion des parcours (admin)
2. Interface d'abonnement utilisateur
3. Intégration paiement (Stripe/PayPal)
4. Notifications d'expiration
5. Rapports et analytics
