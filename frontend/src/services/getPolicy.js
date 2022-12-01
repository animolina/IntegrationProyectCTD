import { ajax } from '../utils/ajax';

export const getPolicy = async () => {
	const optionsRequest = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		url: `${import.meta.env.VITE_SERVER_URL}/policy/3`,
	};
	return await ajax(optionsRequest);
};
