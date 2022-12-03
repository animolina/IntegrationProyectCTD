import styles from '../styles/unsuccessfulReservation.module.css';
import iconWarning from '../assets/icons/iconWarning.svg';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Unsuccessful({ text }) {
	const navigate = useNavigate();

	return (
		<div className={styles.successfulReservation}>
			<div className={styles.modal}>
				<img
					src={iconWarning}
					className={styles.iconSuccess}
					alt='Ícono de advertencia'
				/>
				<span className={styles.textGratitude}>¡Atención!</span>
				<span className={styles.textConfirm}>{text}</span>

				<Button
					handleClick={() => navigate('/')}
					type={'outline'}
					innerText={'Volver'}
				/>
			</div>
		</div>
	);
}
