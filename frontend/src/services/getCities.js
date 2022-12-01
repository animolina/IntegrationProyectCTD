import { ajax } from '../utils/ajax';

export const getCities = async () => {
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		url: `${import.meta.env.VITE_SERVER_URL}/city`,
	};
	return await ajax(optionsRequest);
};
