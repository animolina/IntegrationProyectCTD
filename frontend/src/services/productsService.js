import { ApiService } from './apiService';

export class ProductsService {
	static async getProducts(category, city, startDate, endDate) {
		return await ApiService.get('/product/filter', {
			category,
			city,
			startDate,
			endDate,
		});
	}

	static async getProductById(productId) {
		return await ApiService.get(`/product/${productId}`);
	}
}
