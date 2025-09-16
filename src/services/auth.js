// Authentication service for Ennéagramme Maroc
class AuthService {
  constructor() {
    this.TOKEN_KEY = 'ennea_auth_token';
    this.USER_KEY = 'ennea_user_data';
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;
    
    try {
      // Check if token is expired (basic JWT check)
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      return false;
    }
  }

  // Check if user is admin
  async isAdmin() {
    if (!this.isAuthenticated()) return false;
    
    const userData = this.getUserData();
    return userData?.role === 'admin' || userData?.isAdmin === true;
  }

  // Get stored user data
  getUserData() {
    try {
      const userData = localStorage.getItem(this.USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }

  // Login user
  login(token, userData) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
    return true;
  }

  // Logout user
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    return true;
  }

  // Get auth token
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Get auth headers for API calls
  getAuthHeaders() {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}

// Create and export instance
export const auth = new AuthService();
export default auth;