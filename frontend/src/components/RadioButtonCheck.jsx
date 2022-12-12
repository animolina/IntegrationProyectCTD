import styles from '../styles/policyItem.module.css';
import { useState } from 'react';
export default function RadioButtonCheck({ name, onChangeOption }) {
	const [, setRadioValue] = useState(false);

	const onChange = value => {
		setRadioValue(value);
		onChangeOption(value);
	};

	return (
		<div className={styles.radioButtonContainer}>
			<label>
				<input
					id={name}
					type='radio'
					name={name}
					className={styles.radioButton}
					onChange={() => onChange(true)}
				/>
				Si
			</label>

			<label>
				<input
					id={name + 'No'}
					type='radio'
					name={name}
					className={styles.radioButton}
					onChange={() => onChange(false)}
				/>
				No
			</label>
		</div>
	);
}
