import { ajax } from '../utils/ajax';

export const getProductById = async id => {
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		url: `${import.meta.env.VITE_SERVER_URL}/product/${id}`,
	};
	return await ajax(optionsRequest);
};
