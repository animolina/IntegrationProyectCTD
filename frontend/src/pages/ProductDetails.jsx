import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import GalleryProduct from '../utils/GalleryProduct';
import ProductDetailsLocation from './../components/ProductDetailsLocation';
import ProductDetailsDescription from './../components/ProductDetailsDescription';
import ProductDetailsFeature from '../components/ProductDetailsFeature.jsx';
import ProductDetailsPolicy from './../components/ProductDetailsPolicy';
import BookingBlock from './../components/BookingBlock';
import ShareProduct from '../utils/ShareProduct';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/Store';
import { useEffect, useState } from 'react';
import ProductDetailsMap from './../components/ProductDetailsMap';
import { useUser } from '../hooks/User.hooks';

export default function ProductDetails() {
	const [disabledDates, setDisabledDates] = useState([]);
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
		if (reservations && reservations.length > 0) {
			setDisabledDates(
				reservations.map(reservation => ({
					start: new Date(reservation.startDate),
					end: new Date(reservation.endDate),
				}))
			);
		}

		if (reservations.error && !user) {
			navigate('/login', {
				state: {
					alert: { type: 'warning', text: reservations.error },
					forwardingRoute: `/product-details/${id}`,
				},
			});
		}
	}, [reservations]);

	return (
		<div className={styles.productDetailsContainer}>
			<ProductDetailsHeader />
			<ProductDetailsLocation />
			<ShareProduct />
			<GalleryProduct />
			<ProductDetailsDescription />
			<ProductDetailsFeature />
			<BookingBlock disabledDates={disabledDates} />
			<ProductDetailsMap />
			<ProductDetailsPolicy />
		</div>
	);
}
