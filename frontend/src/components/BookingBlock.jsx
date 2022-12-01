import DatePicker from './DatePicker';
import Button from './Button';
import styles from '../styles/bookingBlock.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/User.hooks';

export default function BookingBlock() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { user } = useUser();

	const handleClick = () => {
		user
			? navigate(`/product-details/${id}/reservation`)
			: navigate(`/login`, {
					state: {
						alert: {
							text: 'Para realizar una reserva necesitas estar logueado',
							type: 'warning',
						},
					},
			  });
	};

	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Fechas disponibles</h2>
			<div className={styles.secondaryContainer}>
				<DatePicker inline='inline' calendarType='booking' />
				<div className={styles.bookingCard}>
					<h3>Agregá tus fechas de viaje para obtener precios exactos</h3>

					<Button
						handleClick={handleClick}
						type='basic'
						innerText='Iniciar reserva'
					></Button>
				</div>
			</div>
		</div>
	);
}
