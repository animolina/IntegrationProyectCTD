export const validateEmail = email => {
	if (!email || !email.trim()) {
		return false;
	}

	const validRegex = /^\S+@\S+\.\S+$/;

	if (email.match(validRegex)) {
		return true;
	} else {
		return false;
	}
};
