import { ajax } from '../utils/ajax';

export const getPolicy = async () => {
	const optionsRequest = {
		method: 'GET',

		url: 'http://ec2-54-242-48-104.compute-1.amazonaws.com:8080/policy/3',
	};
	return await ajax(optionsRequest);
};
