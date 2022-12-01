import styles from '../styles/cartelWarning.module.css';
import iconWarning from '../assets/icons/iconWarning.svg';

export default function CartelWarning(props) {
	return (
		<div className={styles.cartelWarning}>
			<img src={iconWarning} alt='Ícono en rojo indicando advertencia' />
			<span className={styles.textWarning}>
				{props.text}
			</span>
		</div>
	);
}
