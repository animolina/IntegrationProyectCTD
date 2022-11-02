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
			const dataCategories = await getCategories();
			setCategories(dataCategories);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const dataProducts = await getProducts();
			setProducts(dataProducts);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const dataCities = await getCities();
			setCities(dataCities);
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
