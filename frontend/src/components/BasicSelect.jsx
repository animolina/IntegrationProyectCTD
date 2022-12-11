import styles from '../styles/basicSelect.module.css';
import { useState } from 'react';

export default function BasicSelect({
	data,
	handleSelect,
	disabled,
	placeholder,
}) {
	const [value, setValue] = useState('');

	const onChange = e => {
		setValue(e.target.value);
		if (handleSelect) {
			handleSelect(e.target.value);
		}
	};
	return (
		<div>
			<select
				disabled={disabled}
				onChange={onChange}
				className={styles.select}
				value={value}
			>
				{placeholder && (
					<option value='' disabled>
						{placeholder}
					</option>
				)}
				{data.map(item => (
					<option className={styles.option} key={item?.id} value={item?.id}>
						{item?.content}
					</option>
				))}
			</select>
		</div>
	);
}
