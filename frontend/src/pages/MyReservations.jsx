/* eslint-disable no-unused-vars */
import ProductDetailsHeader from './../components/ProductDetailsHeader';
import styles from '../styles/myReservations.module.css';
import { useAppContext } from '../context/Store';
import ProductCard from './../components/ProductCard';
import ProductListCard from '../components/ProductListCard';
import { useParams, useNavigate } from 'react-router-dom';
import CartelWarning from '../components/CartelWarning';
import Button from '../components/Button';
import Unsuccessful from './Unsuccessful';

export default function MyReservations() {
	const store = useAppContext();
	const myReservations = store.myReservations;

	/* console.log(userId); */

	return (
		<div className={styles.container}>
			<ProductDetailsHeader title={'Mis reservas'} />

			<Unsuccessful text={'Aún no has efectuado ninguna reserva'} />

			{/* <div className={styles.productsContainer}>
				{products.map(product => (
					<ProductCard
						key={product?.id}
						id={product?.id}
						title={product?.title}
						description={product?.description}
						urlImg={product?.images[0]?.url}
						location={product?.city.state}
						category={product?.category.title}
					/>
				))}
			</div> */}
		</div>
	);
}
