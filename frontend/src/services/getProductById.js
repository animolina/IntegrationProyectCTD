import { ajax } from '../utils/ajax';

export const getProductById = async id => {
	const optionsRequest = {
		method: 'GET',
		url: `http://ec2-54-242-48-104.compute-1.amazonaws.com:8080/product/${id}`,
	};
	return await ajax(optionsRequest);
};
