import { ajax } from '../utils/ajax';

export const getReservationByProductId = async params => {
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		url: `localhost:8080/reservation/productId`,
		params,
	};
	return await ajax(optionsRequest);
};

// http://ec2-3-91-229-168.compute-1.amazonaws.com:8080/
