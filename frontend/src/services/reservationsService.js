import { ApiService } from './apiService';

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
}
