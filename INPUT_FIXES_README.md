# Correctifs pour la visibilité des champs de saisie

## Problème résolu
Ce correctif résout les problèmes de visibilité du texte dans les champs de saisie sur différents formulaires de l'application. Auparavant, le texte saisi dans certains champs n'était pas clairement visible en raison de problèmes de contraste ou de couleurs de fond.

## Solution implémentée

### 1. CSS Global
Le fichier `src/assets/input-fixes.css` contient des styles globaux pour améliorer la visibilité:
- Fond blanc pour tous les champs de saisie
- Texte de couleur foncée pour un meilleur contraste
- Styles spécifiques pour les états focus et erreur
- Traitement spécial pour les cases à cocher et boutons radio

### 2. Composant FormFixWrapper
Un composant React réutilisable a été créé pour envelopper les formulaires problématiques:
- `src/Components/Common/FormFixWrapper.jsx` applique des styles locaux
- Permet d'appliquer les correctifs à des formulaires spécifiques sans affecter toute l'application

### 3. Fichiers modifiés
Les fichiers suivants ont été mis à jour pour utiliser le composant FormFixWrapper:

#### Profile.jsx
- Le formulaire "Informations personnelles" a été enveloppé avec FormFixWrapper
- Le formulaire "Sécurité" a été enveloppé avec FormFixWrapper

#### AuthPage.jsx
- Le formulaire de connexion a été enveloppé avec FormFixWrapper
- Le formulaire d'inscription a été enveloppé avec FormFixWrapper

#### main.jsx
- L'import de `input-fixes.css` a été ajouté pour garantir l'application des styles globaux

## Test et validation
Les changements permettent maintenant aux utilisateurs de voir clairement ce qu'ils tapent dans les champs de formulaire, avec un contraste suffisant entre le texte et l'arrière-plan.
