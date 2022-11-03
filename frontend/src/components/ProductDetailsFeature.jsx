import styles from '../styles/productDetailsFeature.module.css';
import iconTv from '../assets/icons/features/tv.svg';
export default function ProductDetailsFeature() {
	return (
		<>
			<h2 className={styles.featureTitle}>¿Qué ofrece este lugar?</h2>
			<div className={styles.productDetailsFeature}>
				<ul className={styles.featureGroup}>
					<li>
						<img src={iconTv} alt='' /> Cocina
					</li>
					<li>
						<img src={iconTv} alt='' />
						Televisor
					</li>
					<li>
						<img src={iconTv} alt='' />
						Aire acondicionado
					</li>
					<li>
						<img src={iconTv} alt='' />
						Apto mascotas
					</li>
					<li>
						<img src={iconTv} alt='' />
						Estacionamiento gratuito
					</li>
					<li>
						<img src={iconTv} alt='' />
						Pileta
					</li>
					<li>
						<img src={iconTv} alt='' />
						Wifi
					</li>
				</ul>
			</div>
		</>
	);
}
