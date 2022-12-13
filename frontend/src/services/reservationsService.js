import { ApiService } from './apiService';
import { CacheService } from './cacheService';

export class ReservationsService {
	static async getReservationsByProductId(productId) {
		return await ApiService.get(
			'/reservation/productId/',
			{
				productId,
			},
			true
		);
	}

	static async createReservation(startTime, startDate, endDate, productId) {
		return await ApiService.post(
			'/reservation',
			{
				startTime,
				startDate,
				endDate,
				product: {
					id: productId,
				},
			},
			true
		);
	}

	static async getMyReservations() {
		if (CacheService.getJwt()) {
			return await ApiService.get('/reservation/booked/', {}, true);
		}

		return null;
	}
}
