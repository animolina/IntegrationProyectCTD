import { createContext, useContext, useState, useEffect } from 'react';

import { getCategories } from '../services/getCategories';
import { getProducts } from '../services/getProducts';
import { getCities } from '../services/getCities';
import { getFeatures } from '../services/getFeatures';
import { getPolicy } from '../services/getPolicy';
import { getProductById } from '../services/getProductById';

const AppContext = createContext({
	categories: [],
	products: [],
	cities: [],
	features: [],
	policy: {},
	product: {},
});

export default function Store({ children }) {
	const [categories, setCategories] = useState(null);
	const [products, setProducts] = useState([]);
	const [cities, setCities] = useState([]);
	const [features, setFeatures] = useState([]);
	const [policy, setPolicy] = useState(null);
	const [product, setProduct] = useState(null);

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
	useEffect(() => {
		(async () => {
			const dataFeatures = await getFeatures();
			setFeatures(dataFeatures);
		})();
	}, []);
	useEffect(() => {
		(async () => {
			const dataPolicy = await getPolicy();
			setPolicy(dataPolicy);
		})();
	}, []);
	useEffect(() => {
		(async () => {
			const dataProduct = await getProductById();
			setProduct(dataProduct);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				categories,
				products,
				cities,
				features,
				policy,
				product,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
