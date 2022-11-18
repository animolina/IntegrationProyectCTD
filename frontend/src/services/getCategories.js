import { ajax } from '../utils/ajax';

export const getCategories = async () => {
	const optionsRequest = {
		method: 'GET',
		url: 'http://ec2-3-91-229-168.compute-1.amazonaws.com:8080/category',
	};
	return await ajax(optionsRequest);
};
