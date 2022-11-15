import styles from '../styles/detailsCard.module.css';
import imgDetails from '../assets/imgs/testHotel.jpg';
import locationIcon from '../assets/icons/location-dot-solid.svg';
import Button from './Button';
import { useAppContext } from '../context/Store';

export default function DetailsCard() {
	const store = useAppContext();
	const product = store.product;

	return (
		<div className={styles.detailsCard}>
			<h3 className={styles.detailsCardTitle}>Detalle de la reserva</h3>
			<img
				className={styles.detailsCardImg}
				src={imgDetails}
				alt='Details Image'
			/>
			<div className={styles.detailsCardBody}>
				<div className={styles.container}>
					<p className={styles.detailsCategory}>{product?.category.title}</p>
					<h2 className={styles.detailsTitle}>{product?.title}</h2>
					<span className={styles.detailsStars}>★ ★ ★ ★ ★ </span>
					<div className={styles.locationContainer}>
						<img src={locationIcon} alt='Location Icon' />

						<p className={styles.locationText}>
							{product.city.city}, {product?.city.state},{product?.city.country}
						</p>
					</div>

					<div className={styles.timeCheck}>
						<span>Check in</span>
						<span>__/__/____</span>
					</div>
					<div className={styles.timeCheck}>
						<span>Check out</span>
						<span>__/__/____</span>
					</div>

					<div className={styles.reservationButton}>
						<Button innerText={'Confirmar reserva'} />
					</div>
				</div>
			</div>
		</div>
	);
}
