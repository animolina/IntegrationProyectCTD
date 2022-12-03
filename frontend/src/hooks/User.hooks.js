import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { CacheItems, CacheService } from '../services/cacheService';

export const useUser = () => {
	const { user, setUser } = useContext(UserContext);
	const storedUserName = getUserFullName(
		CacheService.getItem(CacheItems.UserName),
		CacheService.getItem(CacheItems.UserLastName)
	);
	const storedUser = storedUserName
		? {
				name: CacheService.getItem(CacheItems.UserName),
				lastName: CacheService.getItem(CacheItems.UserLastName),
				email: CacheService.getItem(CacheItems.UserEmail),
		  }
		: null;

	const loggedUser = user || storedUser;

	return {
		user: loggedUser,
		setUser,
	};
};

export const getUserFullName = (name, lastName) => {
	const formatedName = name ? name.trim() : '';
	const formatedLastName = lastName ? lastName.trim() : '';
	const fullName = `${formatedName} ${formatedLastName}`;
	return fullName.trim();
};
