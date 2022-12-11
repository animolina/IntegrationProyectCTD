import styles from '../styles/policyItem.module.css';
import RadioButtonCheck from '../components/RadioButtonCheck';
export default function PolicyItemSecurity() {
	return (
		<div className={styles.policyItem}>
			<h3 className={styles.policyItemTitle}>{'Salud y seguridad'}</h3>
			<span className={styles.label}>¿Se permite fumar?</span>
			<RadioButtonCheck name={'fumar'} />
			<span className={styles.label}>¿Hay detector de humo?</span>
			<RadioButtonCheck name={'humo'} />
			<span className={styles.label}>Distancia social</span>
			<textarea
				className={styles.textArea}
				placeholder={'Escribir aquí'}
				name='textarea'
			></textarea>
		</div>
	);
}
