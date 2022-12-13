import styles from '../styles/detailsCard.module.css';
import locationIcon from '../assets/icons/location-dot-solid.svg';
import Button from './Button';
import { useAppContext } from '../context/Store';
import Alert from '../components/Alert';
import { useEffect, useState } from 'react';
import StarRating from '../utils/StarRating';

export default function DetailsCard({
	startDate,
	endDate,
	submitLoginForm,
	alert,
}) {
	const [submitAlert, setSubmitAlert] = useState();
	const store = useAppContext();
	const product = store.product;

	useEffect(() => {
		if (alert) {
			setSubmitAlert(alert);
		}
	}, [alert]);

	return (
		<div className={styles.detailsCard}>
			<h3 className={styles.detailsCardTitle}>Detalle de la reserva</h3>
			<div className={styles.detailsContainer}>
				<img
					className={styles.detailsCardImg}
					src={product?.images[0]?.url}
					alt='Producto en detalle'
				/>
				<div className={styles.detailsCardBody}>
					<div className={styles.container}>
						<p className={styles.detailsCategory}>{product?.category?.title}</p>
						<h2 className={styles.detailsTitle}>{product?.title}</h2>
						<StarRating starScore={4} />
						{/* <span className={styles.detailsStars}>★ ★ ★ ★ ★ </span> */}
						<div className={styles.locationContainer}>
							<img src={locationIcon} alt='Ícono de localización' />
							<p className={styles.locationText}>
								{product?.city?.city}, {product?.city?.state},{' '}
								{product?.city?.country}
							</p>
						</div>

						<div className={styles.timeCheck}>
							<span>Check in</span>
							<span>{startDate ? startDate.toLocaleDateString() : ' '}</span>
						</div>
						<div className={styles.timeCheck}>
							<span>Check out</span>
							<span>{endDate ? endDate.toLocaleDateString() : ' '}</span>
						</div>

						<div className={styles.reservationButton}>
							<Button
								Button
								innerText={'Confirmar reserva'}
								handleClick={submitLoginForm}
							/>
							{submitAlert && (
								<div className={styles.reservationAlert}>
									<Alert type={alert.type} text={alert.text} />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
