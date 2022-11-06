import { ajax } from '../utils/ajax';

export const getCities = async () => {
	const optionsRequest = {
		method: 'GET',
		url: 'http://127.0.0.1:5500/grupo-01/frontend/src/mockedData/cities.json',
	};
	return await ajax(optionsRequest);
};
