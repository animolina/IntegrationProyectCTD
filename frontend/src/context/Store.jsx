/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from 'react';

import { getCategories } from '../services/getCategories';
import { getCities } from '../services/getCities';
import { getFeatures } from '../services/getFeatures';
import { getPolicy } from '../services/getPolicy';
import { ProductsService } from '../services/productsService';
import { ReservationsService } from '../services/reservationsService';
import { getMyReservations } from './../services/getMyReservations';
const AppContext = createContext({
	selectedCategory: undefined,
	selectedCity: undefined,
	selectedStartDate: undefined,
	selectedEndDate: undefined,
	selectedProductId: undefined,
	categories: [],
	products: [],
	cities: [],
	product: {},
	features: [],
	policy: {},
	reservations: [],
	myReservations: [],
	setIdProduct: id => {},
	setSelectedCategory: selectedCategory => {},
	setSelectedCity: selectedCity => {},
	setSelectedStartDate: selectedStartDate => {},
	setSelectedEndDate: selectedEndDate => {},
	setSelectedProductId: selectedProductId => {},
});

export default function Store({ children }) {
	const [selectedCity, setSelectedCity] = useState();
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedStartDate, setSelectedStartDate] = useState();
	const [selectedEndDate, setSelectedEndDate] = useState();
	const [selectedProductId, setSelectedProductId] = useState();
	const [categories, setCategories] = useState(null);
	const [products, setProducts] = useState([]);
	const [cities, setCities] = useState([]);
	const [product, setProduct] = useState(null);
	const [features, setFeatures] = useState([]);
	const [policy, setPolicy] = useState(null);
	const [idProduct, setIdProduct] = useState(1);
	const [reservations, setReservations] = useState([]);
	const [myReservations, setMyReservations] = useState([]);

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
			const dataProducts = await ProductsService.getProducts(
				selectedCategory,
				selectedCity,
				selectedStartDate,
				selectedEndDate
			);
			setProducts(dataProducts);
		};
		loadProducts();
	}, [selectedCategory, selectedStartDate, selectedEndDate, selectedCity]);

	useEffect(() => {
		(async () => {
			const dataPolicy = await getPolicy();
			setPolicy(dataPolicy);
		})();
	}, []);
	useEffect(() => {
		(async () => {
			const dataProduct = await ProductsService.getProductById(idProduct);
			setProduct(dataProduct);
		})();
	}, [idProduct]);

	useEffect(() => {
		const loadReservations = async () => {
			const result = await ReservationsService.getReservationsByProductId(
				selectedProductId
			);
			setReservations(
				result.status === 403
					? { error: 'Inicia sesión para continuar' }
					: result
			);
		};
		if (selectedProductId !== undefined) {
			loadReservations();
		}
	}, [selectedProductId]);

	/* 	useEffect(() => {
		(async () => {
			const dataReservations = await getMyReservations();
			setMyReservations(dataReservations);
		})();
	}, []); */

	return (
		<AppContext.Provider
			value={{
				categories,
				products,
				cities,
				product,
				features,
				policy,
				reservations,
				myReservations,
				setIdProduct,
				setSelectedCategory,
				setSelectedEndDate,
				setSelectedStartDate,
				setSelectedCity,
				setSelectedProductId,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
