import { ApiService } from './apiService';

export class CharacteristicsService {
	static async getCharacteristics() {
		return await ApiService.get('/characteristic');
	}
}
