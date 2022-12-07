import styles from '../styles/policyItem.module.css';

export default function PolicyItem({ title }) {
	return (
		<div className={styles.policyItem}>
			<h3 className={styles.policyItemTile}>{title}</h3>
			<span className={styles.label}>Descripción</span>
			<textarea
				className={styles.textArea}
				placeholder='Escribir aquí'
				name='textarea'
			></textarea>
		</div>
	);
}
