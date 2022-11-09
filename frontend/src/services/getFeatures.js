import { ajax } from '../utils/ajax';

export const getFeatures = async () => {
	const optionsRequest = {
		method: 'GET',

		url: 'http://ec2-54-242-48-104.compute-1.amazonaws.com:8080/characteristic',
	};
	return await ajax(optionsRequest);
};
