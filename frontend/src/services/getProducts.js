import { ajax } from '../utils/ajax';

export const getProducts = async params => {
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		url: `${import.meta.env.VITE_SERVER_URL}/product/filter/`,
		params,
	};
	return await ajax(optionsRequest);
};
