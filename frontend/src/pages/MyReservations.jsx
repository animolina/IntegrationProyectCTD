import ProductDetailsHeader from './../components/ProductDetailsHeader';
import styles from '../styles/myReservations.module.css';
import { useAppContext } from '../context/Store';
import ProductCard from './../components/ProductCard';
import ProductListCard from '../components/ProductListCard';
import { useParams, useNavigate } from 'react-router-dom';
import CartelWarning from '../components/CartelWarning';
import Button from '../components/Button';

export default function MyReservations() {
	const store = useAppContext();
	const myReservations = store.myReservations;
	const products = store.products;

	const userId = useParams();
	const navigate = useNavigate();

	/* console.log(userId); */

	return (
		<div className={styles.container}>
			<ProductDetailsHeader title={'Mis reservas'} />

			{/* <div className={styles.cartelContainer}>
				<CartelWarning text={'Aún no has efectuado ninguna reserva'} />
				<Button innerText={'Volver'} handleClick={() => navigate('/')} />
			</div> */}
			<div className={styles.productsContainer}>
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
			</div>
		</div>
	);
}
