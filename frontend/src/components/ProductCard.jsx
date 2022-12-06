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
	type,
}) {
	const navigate = useNavigate();
	const handleClick = () => {
		type === 'reservation'
			? navigate(`/reservation-details/${id}`)
			: navigate(`/product-details/${id}`);
	};

	const formatDate = input => {
		const datePart = input.match(/\d+/g);
		const year = datePart[0].substring(2); // get only two digits
		const month = datePart[1];
		const day = datePart[2];

		return day + '/' + month + '/' + year;
	};

	return (
		<div className={styles.productCard}>
			<img className={styles.productCardImg} src={urlImg} alt='Producto' />
			<div className={styles.productCardBody}>
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
				{startDate && (
					<span className={styles.dateContainer}>
						<span>Check in: {formatDate(startDate)}</span>
						<span>Check out: {formatDate(endDate)}</span>
					</span>
				)}
			</div>
		</div>
	);
}
