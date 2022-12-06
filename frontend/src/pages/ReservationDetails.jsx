import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import GalleryProduct from '../utils/GalleryProduct';
import ProductDetailsLocation from './../components/ProductDetailsLocation';
import ProductDetailsDescription from './../components/ProductDetailsDescription';
import ProductDetailsFeature from '../components/ProductDetailsFeature.jsx';
import ProductDetailsPolicy from './../components/ProductDetailsPolicy';
import ShareProduct from '../utils/ShareProduct';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/Store';
import { useEffect } from 'react';
import ProductDetailsMap from './../components/ProductDetailsMap';
import { useUser } from '../hooks/User.hooks';

export default function ProductDetails() {
	const store = useAppContext();
	const { id } = useParams();
	const navigate = useNavigate();
	const { user } = useUser();
	const reservations = store.reservations;

	useEffect(() => {
		store.setIdProduct(id);
		store.setSelectedProductId(id);
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (reservations.error && !user) {
			navigate('/login', {
				state: {
					alert: { type: 'warning', text: reservations.error },
					forwardingRoute: `/reservation-details/${id}`,
				},
			});
		}
	}, [reservations]);

	return (
		<div className={styles.productDetailsContainer}>
			<ProductDetailsHeader linkPath={'/:userId/reservations'} />
			<ProductDetailsLocation />
			<ShareProduct />
			<GalleryProduct />
			<ProductDetailsDescription />
			<ProductDetailsFeature />
			<ProductDetailsMap />
			<ProductDetailsPolicy />
		</div>
	);
}
