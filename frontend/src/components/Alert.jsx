import styles from '../styles/alert.module.css';
import iconWarning from '../assets/icons/iconWarning.svg';
import checkCircle from '../assets/icons/check-circle.svg';
import exclamationTriangle from '../assets/icons/exclamation-triangle.svg';

export default function Alert(props) {
	return (
		<div
			className={`${styles.alertContainer}  ${
				props.type === 'success'
					? styles.success
					: props.type === 'warning'
					? styles.warning
					: props.type === 'error'
					? styles.error
					: ''
			}`}
		>
			<img
				src={
					props.type === 'success'
						? checkCircle
						: props.type === 'warning'
						? exclamationTriangle
						: props.type === 'error'
						? iconWarning
						: ''
				}
				alt='Ícono de la alerta'
			/>
			<span className={styles.text}>{props.text}</span>
		</div>
	);
}
