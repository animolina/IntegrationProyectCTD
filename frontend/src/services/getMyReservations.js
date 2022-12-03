import { ajax } from '../utils/ajax';
import { CacheService } from './cacheService';

export const getMyReservations = async params => {
	const token = CacheService.getJwt();
	/* console.log('🧉 ~ getMyReservations ~ token', token); */

	if (!token) {
		return [];
	}
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: `Bearer ${token}`,
		},
		url: `http://ec2-3-91-229-168.compute-1.amazonaws.com:8080/reservation/clientId`,
		params,
		/* 	url: `http://ec2-3-91-229-168.compute-1.amazonaws.com:8080/reservation/${params}`, */
		/* 	url: `http://ec2-3-91-229-168.compute-1.amazonaws.com:8080/reservation/clientId/${params}`, */
	};

	console.log(optionsRequest);
	return await ajax(optionsRequest);
};
