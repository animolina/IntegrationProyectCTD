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
	const [categories, setCategories] = useState(null);
	const [products, setProducts] = useState([]);
	const [cities, setCities] = useState([]);

	useEffect(() => {
		const loadCategories = async () => {
			const dataCategories = await getCategories();
			setCategories(dataCategories);
		};
		const loadProducts = async () => {
			const dataProducts = await getProducts();
			setProducts(dataProducts);
		};
		const loadCities = async () => {
			const dataCities = await getCities();
			setCities(dataCities);
		};
		loadCategories();
		loadProducts();
		loadCities();
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
