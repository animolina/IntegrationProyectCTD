import styles from '../styles/policyItem.module.css';
import RadioButtonCheck from '../components/RadioButtonCheck';
export default function PolicyItemSecurity({
	handleSocialDistanceChange,
	setIsSmokingAllowed,
	setHasSmokingDetector,
}) {
	return (
		<div className={styles.policyItem}>
			<h3 className={styles.policyItemTitle}>{'Salud y seguridad'}</h3>
			<span className={styles.label}>¿Se permite fumar?</span>
			<RadioButtonCheck name={'fumar'} onChangeOption={setIsSmokingAllowed} />
			<span className={styles.label}>¿Hay detector de humo?</span>
			<RadioButtonCheck name={'humo'} onChangeOption={setHasSmokingDetector} />
			<span className={styles.label}>Distancia social</span>
			<textarea
				className={styles.textArea}
				placeholder={'Escribir aquí'}
				name='textarea'
				onChange={handleSocialDistanceChange}
			></textarea>
		</div>
	);
}
