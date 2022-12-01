import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { CacheItems, CacheService } from '../services/cacheService';

export const useUser = () => {
	const { user, setUser } = useContext(UserContext);
	const storedUserName = CacheService.getItem(CacheItems.UserName);
	const storedUser = storedUserName
		? {
				name: storedUserName,
				email: CacheService.getItem(CacheItems.UserEmail),
		  }
		: null;

	const loggedUser = user || storedUser;

	return {
		user: loggedUser,
		setUser,
	};
};
