import styles from '../styles/productCard.module.css';
import locationIcon from '../../src/assets/icons/location-dot-solid.svg';
import Button from './Button';
export default function ProductCard({
	title,
	description,
	urlImg,
	location,
	category,
}) {
	return (
		<div className={styles.productCard}>
			<img className={styles.productCardImg} src={urlImg} alt='Product Image' />
			<div className={styles.productCardBody}>
				<span className={styles.productCardCategory}>
					{category?.toUpperCase()}{' '}
					<span className={styles.productCardCategoryStars}>★ ★ ★ ★ ★ </span>
				</span>
				<h5 className={styles.productCardTitle}>{title}</h5>
				<div className={styles.productCardLocation}>
					<img src={locationIcon} />
					<span className={styles.productCardLocationText}>
						{location}
					</span>{' '}
					<a>MOSTRAR EN MAPA</a>
				</div>
				<p className={styles.productCardText}>{description}</p>
				<Button type='basic' innerText='Ver más'></Button>
			</div>
		</div>
	);
}
