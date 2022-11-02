import { ajax } from '../utils/ajax';

export const getProducts = async () => {
	const optionsRequest = {
		method: 'GET',
		url: 'http://127.0.0.1:5500/src/mockedData/products.json',
	};
	return await ajax(optionsRequest);
};
