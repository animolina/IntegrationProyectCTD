import styles from '../styles/productDetailsMap.module.css';
import GoogleMap from '../utils/GoogleMap';

export default function ProductDetailsMap() {
	return (
		<div>
			<h2 className={styles.mapTitle}>¿Dónde vas a estar?</h2>
			<div className={styles.mapContainer}>
				<GoogleMap />
			</div>
		</div>
	);
}
