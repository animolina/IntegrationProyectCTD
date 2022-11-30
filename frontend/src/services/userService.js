import { ApiService } from './apiService';

export class UserService {
	static async listUsers() {
		return await ApiService.get('/user');
	}

	static async getUserById(id) {
		return await ApiService.get(`/user/${id}`);
	}
}
