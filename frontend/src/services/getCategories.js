import { ajax } from '../utils/ajax';

export const getCategories = async () => {
	const optionsRequest = {
		method: 'GET',

		/* headers: { 'Access-Control-Allow-Origin': '*' },

		url: 'http://localhost:8080/category', */
		url: 'http://127.0.0.1:5500/src/mockedData/categories.json',
	};
	return await ajax(optionsRequest);
};
