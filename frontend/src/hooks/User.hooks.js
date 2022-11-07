import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useUser = () => {
	const { user, setUser } = useContext(UserContext);
	const storedUser = sessionStorage.getItem('name')
		? {
				name: sessionStorage.getItem('name'),
				email: sessionStorage.getItem('email'),
		  }
		: null;

	const loggedUser = user || storedUser;

	return {
		user: loggedUser,
		setUser,
	};
};
