import axiosInstance from './axios.config';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'patient' | 'doctor';
  specialization?: string;
}

export interface AuthResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await axiosInstance.post('/auth/login', credentials);
    if (response.data.token) {
      this.setAuthData(response.data);
    }
    return response.data;
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await axiosInstance.post('/auth/register', data);
    if (response.data.token) {
      this.setAuthData(response.data);
    }
    return response.data;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getCurrentUser(): AuthResponse | null {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  }

  private setAuthData(data: AuthResponse): void {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
  }
}

export default new AuthService(); 