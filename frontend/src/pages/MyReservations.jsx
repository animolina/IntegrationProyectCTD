/* eslint-disable no-unused-vars */
import ProductDetailsHeader from './../components/ProductDetailsHeader';
import styles from '../styles/myReservations.module.css';
import ProductCard from './../components/ProductCard';
import Unsuccessful from './Unsuccessful';
import { useState, useEffect } from 'react';
import { ReservationsService } from '../services/reservationsService';

export default function MyReservations() {
	const [myReservations, setMyReservations] = useState([]);
	useEffect(() => {
		(async () => {
			const dataReservations = await ReservationsService.getMyReservations();
			setMyReservations(dataReservations);
		})();
	}, []);

	return (
		<div className={styles.container}>
			<ProductDetailsHeader title={'Mis reservas'} />
			{myReservations?.length ? (
				<div className={styles.productsContainer}>
					{myReservations.map(product => (
						<ProductCard
							type={'reservation'}
							key={product?.id}
							id={product?.product?.id}
							title={product?.product?.title}
							description={product?.product?.description}
							urlImg={product?.product?.images[0]?.url}
							location={product?.product?.city.state}
							category={product?.product?.category.title}
							startDate={product?.startDate}
							endDate={product?.endDate}
							noRating={true}
						/>
					))}
				</div>
			) : (
				<Unsuccessful text={'Aún no has efectuado ninguna reserva'} />
			)}
		</div>
	);
}
