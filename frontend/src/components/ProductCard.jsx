import styles from '../styles/productCard.module.css';
import locationIcon from '../../src/assets/icons/location-dot-solid.svg';

import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
	title,
	description,
	urlImg,
	location,
	category,
	id,
	startDate,
	endDate,
	noRating,
}) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/product-details/${id}`);
	};

	return (
		<div className={styles.productCard}>
			<img className={styles.productCardImg} src={urlImg} alt='Producto' />
			<div className={styles.productCardBody}>
				{startDate && (
					<span className={styles.dateContainer}>
						<span>Check in: {startDate}</span>
						<span>Check out: {endDate}</span>
					</span>
				)}
				<span className={styles.productCardCategory}>
					{category?.toUpperCase()}{' '}
					{noRating || (
						<span className={styles.productCardCategoryStars}>★ ★ ★ ★ ★ </span>
					)}
				</span>
				<h5 className={styles.productCardTitle}>{title}</h5>
				<div className={styles.productCardLocation}>
					<img src={locationIcon} alt='Ícono localización' />
					<span className={styles.productCardLocationText}>
						{location}
					</span>{' '}
					<a>MOSTRAR EN MAPA</a>
				</div>
				<p className={styles.productCardText}>{description}</p>

				<Button
					handleClick={handleClick}
					type='basic'
					innerText='Ver más'
				></Button>
			</div>
		</div>
	);
}
