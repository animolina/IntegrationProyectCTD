import { ajax } from '../utils/ajax';
import { CacheService } from './cacheService';

export const getReservationByProductId = async params => {
	const token = CacheService.getJwt();
	if (!token) {
		return [];
	}
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: `Bearer ${token}`,
		},
		url: `${import.meta.env.VITE_SERVER_URL}/reservation/productId/`,
		params,
	};
	return await ajax(optionsRequest);
};
