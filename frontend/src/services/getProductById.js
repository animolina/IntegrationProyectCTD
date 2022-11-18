import { ajax } from '../utils/ajax';

export const getProductById = async id => {
	const optionsRequest = {
		method: 'GET',
		url: `http://ec2-3-91-229-168.compute-1.amazonaws.com:8080/${id}`,
	};
	return await ajax(optionsRequest);
};
