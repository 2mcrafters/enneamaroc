# Démo de Données Ennea Maroc

Cette démo présente un ensemble complet de données simulées pour l'application Ennea Maroc. Elle montre comment les données sont structurées et comment interagir avec le backend simulé.

## Accès à la démo

Pour accéder à la démo des données :
1. Démarrez l'application avec `npm run dev`
2. Naviguez vers la page d'accueil
3. Dans le menu principal, cliquez sur "Home" puis sélectionnez "Démo de données"
4. Alternativement, accédez directement à l'URL : `/data-showcase`

## Fonctionnalités démontrées

La démo illustre les fonctionnalités suivantes :

### Authentification
- Connexion avec des utilisateurs prédéfinis
- Inscription de nouveaux utilisateurs
- Affichage du profil utilisateur
- Déconnexion

### Cours
- Affichage du catalogue de cours
- Inscription à des sessions de cours
- Affichage des cours auxquels l'utilisateur est inscrit
- Suivi de la progression des cours

### Événements
- Affichage des événements à venir
- Inscription à des événements
- Affichage des événements auxquels l'utilisateur est inscrit

### Blog
- Affichage des articles de blog
- Détails des articles (auteur, date, etc.)

### Témoignages
- Affichage des témoignages d'utilisateurs
- Détails des témoignages (cours/événements concernés)

### FAQs
- Affichage des questions fréquemment posées par catégorie

## Utilisateurs de test

Pour tester les différentes fonctionnalités, vous pouvez utiliser les comptes suivants :

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| Admin | chafik@ennea-maroc.com | Password123! |
| Premium | sofia@example.com | Sofia2024! |
| Standard | karim@example.com | Karim2024! |
| Test | test@example.com | Test1234! |

## Structure des données simulées

Les données sont organisées selon le schéma suivant :

```javascript
// Structure simplifiée du backend simulé
const enneaDB = {
  users: [/* utilisateurs */],
  profiles: {/* profils utilisateurs */},
  courses: [/* cours disponibles */],
  userCourses: {/* progression des cours par utilisateur */},
  events: [/* événements */],
  blogs: [/* articles de blog */],
  testimonials: [/* témoignages */],
  faqs: [/* questions fréquentes */]
};
```

## Intégration avec votre projet

Le backend simulé est implémenté dans le fichier `src/services/enhancedFakeBackend.js` et peut être importé et utilisé dans n'importe quel composant de l'application.

Exemple d'utilisation :

```javascript
import { enhancedFakeBackend } from '../services/enhancedFakeBackend';

// Authentification
const loginResult = await enhancedFakeBackend.login(email, password);

// Récupération des données
const courses = await enhancedFakeBackend.getAllCourses();
const userEvents = await enhancedFakeBackend.getUserEvents();
```

## API disponible

Le backend simulé expose les méthodes suivantes :

### Authentification
- `login(email, password)`
- `register(userData)`
- `logout()`
- `isAuthenticated()`
- `isAdmin()`
- `getCurrentUser()`

### Gestion des utilisateurs
- `updateUserProfile(userData)`
- `changePassword(oldPassword, newPassword)`
- `getAllUsers()` (admin uniquement)

### Gestion des cours
- `getAllCourses(category)`
- `getCourseById(courseId)`
- `getUserCourses()`
- `enrollInCourse(courseId, sessionId)`

### Gestion des événements
- `getAllEvents()`
- `getEventById(eventId)`
- `getUserEvents()`
- `registerForEvent(eventId)`

### Blog
- `getBlogArticles(options)`
- `getBlogArticleBySlug(slug)`

### Témoignages et FAQs
- `getTestimonials()`
- `addTestimonial(testimonialData)`
- `getFAQs(category)`
