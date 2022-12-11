import styles from '../styles/policyItem.module.css';
export default function PolicyItemCancellation() {
	return (
		<div className={styles.policyItem}>
			<h3 className={styles.policyItemTitle}>{'Política de cancelación'}</h3>
			<span className={styles.label}>Depósito de seguridad</span>
			<textarea
				className={styles.textArea}
				placeholder={'Escribir aquí'}
				name='textarea'
			></textarea>
			<span className={styles.label}>Política de cancelación</span>
			<textarea
				className={styles.textArea}
				placeholder={'Escribir aquí'}
				name='textarea'
			></textarea>
		</div>
	);
}
