import { ajax } from '../utils/ajax';

export const getProducts = async () => {
	const optionsRequest = {
		method: 'GET',
		url: 'http://ec2-54-242-48-104.compute-1.amazonaws.com:8080/category',
	};
	return await ajax(optionsRequest);
};
