export const validateEmail = email => {
	const validRegex = /^\S+@\S+\.\S+$/;

	if (email.match(validRegex)) {
		alert('Valid email address!');

		return true;
	} else {
		alert('Invalid email address!');

		return false;
	}
};
