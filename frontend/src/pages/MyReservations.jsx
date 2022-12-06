/* eslint-disable no-unused-vars */
import ProductDetailsHeader from './../components/ProductDetailsHeader';
import styles from '../styles/myReservations.module.css';
import { useAppContext } from '../context/Store';
import ProductCard from './../components/ProductCard';
import Unsuccessful from './Unsuccessful';
import { useEffect, useState } from 'react';
import { getMyReservations } from '../services/getMyReservations';

export default function MyReservations() {
	/* const store = useAppContext(); */
	/* const myReservations = store.myReservations; */

	const [myReservations, setMyReservations] = useState([]);

	useEffect(() => {
		(async () => {
			const dataReservations = await getMyReservations();
			setMyReservations(dataReservations);
		})();
	}, []);

	return (
		<div className={styles.container}>
			<ProductDetailsHeader title={'Mis reservas'} />
			{myReservations.length ? (
				<div className={styles.productsContainer}>
					{myReservations.map(product => (
						<ProductCard
							key={product?.id}
							id={product?.product?.id}
							title={product?.product?.title}
							description={product?.product?.description}
							urlImg={product?.product?.images[0]?.url}
							location={product?.product?.city.state}
							category={product?.product?.category.title}
							startDate={product?.startDate}
							endDate={product?.startDate}
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
