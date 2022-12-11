import styles from '../styles/policyItem.module.css';
import RadioButtonCheck from '../components/RadioButtonCheck';
export default function PolicyItemProperty() {
	return (
		<div className={styles.policyItem}>
			<h3 className={styles.policyItemTitle}>{'Normas de la casa'}</h3>
			<span className={styles.label}>¿Se permiten fiestas?</span>
			<RadioButtonCheck name={'fiesta'} />
			<span className={styles.label}>Política de Checkout</span>
			<textarea
				className={styles.textArea}
				placeholder={'Escribir aquí'}
				name='textarea'
			></textarea>
		</div>
	);
}
