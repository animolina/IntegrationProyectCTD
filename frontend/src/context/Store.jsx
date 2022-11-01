import { createContext, useContext, useState, useEffect } from 'react';

import { getCategories } from '../services/getCategories';
import { getProducts } from '../services/getProducts';
import { getCities } from '../services/getCities';

const AppContext = createContext({
	categories: [],
	products: [],
	cities: [],
});

export default function Store({ children }) {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [cities, setCities] = useState([]);

	useEffect(() => {
		(async () => {
			const test = await getCategories();
			/* console.log(test); */
			setCategories(test);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const test = await getProducts();
			/* console.log(test); */
			setProducts(test);
		})();
	}, []);
	useEffect(() => {
		(async () => {
			const test = await getCities();
			/* console.log(test); */
			setCities(test);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				categories,
				products,
				cities,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
