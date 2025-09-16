// Service de gestion des parcours
import { auth } from './auth';

class ParcoursService {
  constructor() {
    this.baseURL = '/api/parcours';
  }

  // Obtenir tous les parcours
  async getAll() {
    try {
      // Simulation de données pour le développement
      const mockParcours = [
        {
          id: 1,
          titre: 'Découvrir l\'ennéagramme',
          description: 'Formation initiale pour découvrir les 9 types de personnalité de l\'ennéagramme',
          duree: '2 jours',
          prix: 299,
          niveau: 'débutant',
          image: '/assets/images/parcours/decouvrir.jpg',
          objectifs: [
            'Comprendre les 9 types de l\'ennéagramme',
            'Identifier son type de personnalité',
            'Améliorer sa connaissance de soi'
          ],
          programme: [
            'Introduction à l\'ennéagramme',
            'Les 9 types de personnalité',
            'Test et identification du type',
            'Applications pratiques'
          ]
        },
        {
          id: 2,
          titre: 'Approfondir sa connaissance',
          description: 'Formation avancée pour approfondir sa compréhension de l\'ennéagramme',
          duree: '3 jours',
          prix: 449,
          niveau: 'intermédiaire',
          image: '/assets/images/parcours/approfondir.jpg',
          objectifs: [
            'Maîtriser les subtilités de son type',
            'Comprendre les ailes et les flèches',
            'Développer ses compétences relationnelles'
          ],
          programme: [
            'Approfondissement du type personnel',
            'Les ailes et les instincts',
            'Les flèches de désintégration et d\'intégration',
            'Applications en développement personnel'
          ]
        },
        {
          id: 3,
          titre: 'Transmettre l\'ennéagramme',
          description: 'Formation de formateur pour enseigner l\'ennéagramme',
          duree: '5 jours',
          prix: 899,
          niveau: 'expert',
          image: '/assets/images/parcours/transmettre.jpg',
          objectifs: [
            'Acquérir les compétences de transmission',
            'Maîtriser les outils pédagogiques',
            'Obtenir la certification de formateur'
          ],
          programme: [
            'Pédagogie de l\'ennéagramme',
            'Outils et techniques d\'animation',
            'Gestion des groupes',
            'Certification et éthique'
          ]
        }
      ];

      return { data: mockParcours };
    } catch (error) {
      console.error('Erreur lors de la récupération des parcours:', error);
      throw error;
    }
  }

  // Obtenir un parcours par ID
  async getById(id) {
    try {
      const allParcours = await this.getAll();
      const parcours = allParcours.data.find(p => p.id === parseInt(id));
      
      if (!parcours) {
        throw new Error('Parcours non trouvé');
      }

      return { data: parcours };
    } catch (error) {
      console.error('Erreur lors de la récupération du parcours:', error);
      throw error;
    }
  }

  // Obtenir les intérêts de l'utilisateur
  async getUserInterests() {
    try {
      const token = auth.getToken();
      if (!token) {
        return { data: [] };
      }

      // Simulation des intérêts utilisateur
      const mockInterests = [
        { id: 1, parcours_id: 1, user_id: 1 },
        { id: 2, parcours_id: 2, user_id: 1 }
      ];

      return { data: mockInterests };
    } catch (error) {
      console.error('Erreur lors de la récupération des intérêts:', error);
      throw error;
    }
  }

  // Ajouter un intérêt pour un parcours
  async addInterest(parcoursId) {
    try {
      const token = auth.getToken();
      if (!token) {
        throw new Error('Authentification requise');
      }

      // Simulation d'ajout d'intérêt
      const mockInterest = {
        id: Date.now(),
        parcours_id: parcoursId,
        user_id: auth.getUserData()?.id || 1,
        created_at: new Date().toISOString()
      };

      await new Promise(resolve => setTimeout(resolve, 500));

      return { data: mockInterest };
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'intérêt:', error);
      throw error;
    }
  }

  // Supprimer un intérêt pour un parcours
  async removeInterest(parcoursId) {
    try {
      const token = auth.getToken();
      if (!token) {
        throw new Error('Authentification requise');
      }

      // Simulation de suppression d'intérêt
      await new Promise(resolve => setTimeout(resolve, 500));

      return { data: { success: true } };
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'intérêt:', error);
      throw error;
    }
  }

  // Vérifier si l'utilisateur est intéressé par un parcours
  async isUserInterested(parcoursId) {
    try {
      const interests = await this.getUserInterests();
      return interests.data.some(interest => interest.parcours_id === parcoursId);
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'intérêt:', error);
      return false;
    }
  }

  // Rechercher des parcours
  async search(query) {
    try {
      const allParcours = await this.getAll();
      const filteredParcours = allParcours.data.filter(parcours =>
        parcours.titre.toLowerCase().includes(query.toLowerCase()) ||
        parcours.description.toLowerCase().includes(query.toLowerCase())
      );

      return { data: filteredParcours };
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      throw error;
    }
  }
}

// Créer et exporter l'instance
export const parcoursService = new ParcoursService();
export default parcoursService;
