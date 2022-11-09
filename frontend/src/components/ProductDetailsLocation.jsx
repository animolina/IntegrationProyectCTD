import styles from '../styles/productDetailsLocation.module.css';
import locationIcon from '../assets/icons/location-dot-solid.svg';
import { useAppContext } from '../context/Store';

export default function ProductDetailsLocation() {
	const store = useAppContext();
	const product = store.product;

	if (product === null) {
		return (
			<div style={{ backgroundColor: 'red', width: '50rem' }}>Loading</div>
		);
	}

	return (
		<div className={styles.productDetailsLocation}>
			<div className={styles.locationContainer}>
				<img src={locationIcon} alt='' />
				<div className={styles.locationText}>
					<p>
						{product.city.state}, Ciudad Autónoma de Buenos Aires,{' '}
						{product.city.country}
					</p>
					{/* 	<span>A 940 m del centro</span> */}
				</div>
			</div>
			<div className={styles.scoreContaniner}>
				<div>
					<p className={styles.scoreOpinion}>Muy bueno</p>
					<span className={styles.scoreStars}>★ ★ ★ ★ ★ </span>
				</div>

				<div className={styles.scoreNumber}>5</div>
			</div>
		</div>
	);
}
