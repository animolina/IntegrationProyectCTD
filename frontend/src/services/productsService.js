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

	static async createProduct(newProduct) {
		return await ApiService.post(
			'/product',
			{
				newProduct,
			},
			true
		);
	}

	// product  required body for post method example:
	/* 
	{
    "title": "Test 1",
    "description": "Lorem Ipsum",
    "availability": "yes",
    
    "policy": {
        "id": 3
      
    },
    "category": {
        "id": 4
    },
    "city": {
        "id": 2
    },
    "characteristics": [
        {"id":1}
    ],

    "images": [
        {"title": "Prueba",
        "url":"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" }
    ]
}   
} */
}
