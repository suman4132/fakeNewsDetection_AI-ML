/**
 * API Service for contacting the Backend
 */

const API_BASE_URL = 'http://localhost:8000';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

export const api = {
  auth: {
    login: async (email, password) => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
           const err = await response.json();
           throw new Error(err.detail || 'Login failed');
        }
        
        const data = await response.json();
        // Backend returns { access_token, token_type, user }
        return {
           user: data.user,
           token: data.access_token
        };
      } catch (error) {
        throw error;
      }
    },
    
    register: async (userData) => {
      // userData expects { name, email, password }
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
        
        if (!response.ok) {
           const err = await response.json();
           throw new Error(err.detail || 'Registration failed');
        }
        
        const data = await response.json();
        // Assuming backend auto-logs in on register
        return { success: true, user: data.user, token: data.access_token };
      } catch (error) {
        throw error;
      }
    },
    
    logout: async () => {
      // Client-side logout
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return Promise.resolve();
    }
  },
  
  news: {
    analyze: async (data) => {
       const formData = new FormData();
       if (data.image) {
           formData.append('file', data.image);
       }
       
       try {
           const response = await fetch(`${API_BASE_URL}/api/analyze`, {
               method: 'POST',
               headers: { ...getHeaders() }, // File upload: do NOT set Content-Type!
               body: formData,
           });
           
           if (!response.ok) {
               if (response.status === 401) throw new Error('Unauthorized');
               throw new Error('Analysis failed');
           }
           
           return await response.json();
       } catch (error) {
           console.error("API Error:", error);
           throw error;
       }
    },
    
    getHistory: async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/history`, {
          method: 'GET',
          headers: { 
             'Content-Type': 'application/json',
             ...getHeaders()
          },
        });

        if (!response.ok) throw new Error('Failed to fetch history');
        return await response.json();
      } catch (error) {
        console.error("API Error:", error);
        return []; // Return empty on error to prevent crash
      }
    }
  }
};
