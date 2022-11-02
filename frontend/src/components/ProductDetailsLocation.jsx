import styles from '../styles/productDetailsLocation.module.css';
import locationIcon from '../assets/icons/location-dot-solid.svg';
export default function ProductDetailsLocation() {
	return (
		<div className={styles.productDetailsLocation}>
			<div className={styles.locationContainer}>
				<img src={locationIcon} alt='' />
				<div className={styles.locationText}>
					<p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
					<spam>A 940 m del centro</spam>
				</div>
			</div>
			<div className={styles.scoreContaniner}>
				<div className={styles.scoreOpinion}>
					<p>Muy bueno</p>
					<span className={styles.scoreStars}>★ ★ ★ ★ ★ </span>
				</div>

				<div className={styles.scoreNumber}>5</div>
			</div>
		</div>
	);
}
