import styles from '../styles/productDetailsLocation.module.css';
import locationIcon from '../assets/icons/location-dot-solid.svg';
import { useAppContext } from '../context/Store';
import StarRating from '../utils/StarRating';
import Loader from '../utils/Loader';

export default function ProductDetailsLocation() {
	const store = useAppContext();
	const product = store.product;

	if (product === null) {
		return <Loader />;
	}

	return (
		<div className={styles.productDetailsLocation}>
			<div className={styles.locationContainer}>
				<img
					className={styles.locationIcon}
					src={locationIcon}
					alt='Ícono localización'
				/>
				<div className={styles.locationText}>
					<p>
						{product.city.city}, {product.city.state}, {product.city.country}
					</p>
					{/* 	<span>A 940 m del centro</span> */}
				</div>
			</div>
			<div className={styles.scoreContaniner}>
				<div>
					<p className={styles.scoreOpinion}>Muy bueno</p>
					{/* <span className={styles.scoreStars}>★ ★ ★ ★ ★ </span> */}
					<StarRating starScore={5} />
				</div>

				<div className={styles.scoreNumber}>5</div>
			</div>
		</div>
	);
}
