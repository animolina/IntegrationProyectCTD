/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from 'react';

import { getCategories } from '../services/getCategories';
import { getProducts } from '../services/getProducts';
import { getCities } from '../services/getCities';
import { getProductById } from '../services/getProductById';
import { getFeatures } from '../services/getFeatures';
import { getPolicy } from '../services/getPolicy';
import { getMyReservations } from './../services/getMyReservations';

const AppContext = createContext({
	selectedCategory: undefined,
	selectedCity: undefined,
	selectedStartDate: undefined,
	selectedEndDate: undefined,
	categories: [],
	products: [],
	cities: [],
	product: {},
	features: [],
	policy: {},
	myReservations: {},
	setIdProduct: id => {},
	setSelectedCategory: selectedCategory => {},
	setSelectedCity: selectedCity => {},
	setSelectedStartDate: selectedStartDate => {},
	setSelectedEndDate: selectedEndDate => {},
});

export default function Store({ children }) {
	const [selectedCity, setSelectedCity] = useState();
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedStartDate, setSelectedStartDate] = useState();
	const [selectedEndDate, setSelectedEndDate] = useState();
	const [categories, setCategories] = useState(null);
	const [products, setProducts] = useState([]);
	const [cities, setCities] = useState([]);
	const [product, setProduct] = useState(null);
	const [features, setFeatures] = useState([]);
	const [policy, setPolicy] = useState(null);
	const [idProduct, setIdProduct] = useState(1);
	const [myReservations, setMyReservations] = useState(null);

	useEffect(() => {
		const loadCategories = async () => {
			const dataCategories = await getCategories();
			setCategories(dataCategories);
		};

		const loadCities = async () => {
			const dataCities = await getCities();
			setCities(dataCities);
		};
		loadCategories();
		loadCities();
	}, []);

	useEffect(() => {
		const loadProducts = async () => {
			const dataProducts = await getProducts({
				category: selectedCategory,
				city: selectedCity,
				startDate: selectedStartDate,
				endDate: selectedEndDate,
			});
			setProducts(dataProducts);
		};
		loadProducts();
	}, [selectedCategory, selectedStartDate, selectedEndDate, selectedCity]);

	useEffect(() => {
		(async () => {
			const dataProduct = await getProductById(idProduct);
			setProduct(dataProduct);
		})();
	}, [idProduct]);

	useEffect(() => {
		(async () => {
			const myReservations = await getMyReservations({ clientId: 2 });
			console.log(myReservations);

			setMyReservations(myReservations);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				categories,
				products,
				cities,
				product,
				features,
				policy,
				myReservations,
				setMyReservations,
				setIdProduct,
				setSelectedCategory,
				setSelectedEndDate,
				setSelectedStartDate,
				setSelectedCity,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
