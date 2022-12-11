import styles from '../styles/policyItem.module.css';
export default function RadioButtonCheck({ name }) {
	return (
		<div className={styles.radioButtonContainer}>
			<label>
				<input
					type='radio'
					name={name}
					value='si'
					className={styles.radioButton}
				/>
				Si
			</label>

			<label>
				<input
					type='radio'
					name={name}
					value='no'
					className={styles.radioButton}
				/>
				No
			</label>
		</div>
	);
}
