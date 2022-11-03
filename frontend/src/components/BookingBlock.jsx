import DatePicker from './DatePicker';
import Button from './Button';
import styles from '../styles/bookingBlock.module.css';
export default function BookingBlock() {
	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Fechas disponibles</h2>
			<div className={styles.secondaryContainer}>
				<DatePicker inline='inline' calendarType='booking' />
				<div className={styles.bookingCard}>
					<h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
					<Button type='basic' innerText='Iniciar reserva'></Button>
				</div>
			</div>
		</div>
	);
}
