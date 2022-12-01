import { ajax } from '../utils/ajax';

export const getFeatures = async () => {
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		url: `${import.meta.env.VITE_SERVER_URL}/characteristic/`,
	};
	return await ajax(optionsRequest);
};
