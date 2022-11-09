import { createContext, useContext, useState, useEffect } from 'react';

import { getCategories } from '../services/getCategories';
import { getProducts } from '../services/getProducts';
import { getCities } from '../services/getCities';
import { getFeatures } from '../services/getFeatures';

const AppContext = createContext({
	categories: [],
	products: [],
	cities: [],
	features: [],
});

export default function Store({ children }) {
	const [categories, setCategories] = useState(null);
	const [products, setProducts] = useState([]);
	const [cities, setCities] = useState([]);
	const [features, setFeatures] = useState([]);

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
	useEffect(() => {
		(async () => {
			const dataFeatures = await getFeatures();
			setFeatures(dataFeatures);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				categories,
				products,
				cities,
				features,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
