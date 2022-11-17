import styles from '../styles/cartelWarning.module.css';
import iconWarning from '../assets/icons/iconWarning.svg';

export default function CartelWarning() {
	return (
		<div className={styles.cartelWarning}>
			<img src={iconWarning} alt='Ícono de advertencia' />
			<span>Para realizar una reserva necesitas estar logueado</span>
		</div>
	);
}
