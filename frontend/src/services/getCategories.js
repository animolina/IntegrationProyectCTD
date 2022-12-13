import { ajax } from '../utils/ajax';

export const getCategories = async () => {
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		url: `${import.meta.env.VITE_SERVER_URL}/category`,
	};
	return await ajax(optionsRequest);
};
