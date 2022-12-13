import { ApiService } from './apiService';

export class AuthService {
	static async signIn(email, password) {
		return await ApiService.post('/login', { username: email, password });
	}

	static async signUp(requestObject) {
		return await ApiService.post('/user', requestObject);
	}
}
