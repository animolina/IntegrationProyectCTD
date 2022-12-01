import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import GalleryProduct from '../utils/GalleryProduct';
import ProductDetailsLocation from './../components/ProductDetailsLocation';
import ProductDetailsDescription from './../components/ProductDetailsDescription';
import ProductDetailsFeature from '../components/ProductDetailsFeature.jsx';
import ProductDetailsPolicy from './../components/ProductDetailsPolicy';
import BookingBlock from './../components/BookingBlock';

import ShareProduct from '../utils/ShareProduct';

import { useParams } from 'react-router-dom';

import { useAppContext } from '../context/Store';
import { useEffect } from 'react';
import ProductDetailsMap from './../components/ProductDetailsMap';

export default function ProductDetails() {
	const store = useAppContext();
	const { id } = useParams();

	useEffect(() => {
		store.setIdProduct(id);
		store.setSelectedProductId(id);
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.productDetailsContainer}>
			<ProductDetailsHeader />
			<ProductDetailsLocation />
			<ShareProduct />
			<GalleryProduct />
			<ProductDetailsDescription />
			<ProductDetailsFeature />
			<BookingBlock />
			<ProductDetailsMap />
			<ProductDetailsPolicy />
		</div>
	);
}
