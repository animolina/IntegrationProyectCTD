import axios from 'axios';
import { CacheService } from './cacheService';

const API_BASE_URL = 'http://ec2-3-91-229-168.compute-1.amazonaws.com:8080';

export const AxiosClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 1000,
});

export class ApiService {
	static async get(path, isPrivate = false) {
		return await AxiosClient.get(path, this.getConfig(isPrivate)).then(
			response => response.data
		);
	}

	static async post(path, body, isPrivate = false) {
		return await AxiosClient.post(path, body, this.getConfig(isPrivate)).then(
			response => response.data
		);
	}

	static getConfig(isPrivate) {
		const config = {
			headers: { Authorization: '' },
		};
		if (isPrivate) {
			const token = CacheService.getJwt();
			config.headers.Authorization = token ? `Bearer ${token}` : '';
		}

		return config;
	}
}
