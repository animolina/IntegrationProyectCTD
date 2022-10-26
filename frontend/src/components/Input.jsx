import { forwardRef } from 'react';
import styles from '../styles/input.module.css';

const Input = ({ type, placeholder, onClick, value }, ref) => {
	return (
		<input
			className={styles.basicInput}
			type={type ?? 'text'}
			placeholder={placeholder ?? ''}
			ref={ref}
			onClick={onClick}
			value={value}
		/>
	);
};

export default forwardRef(Input);
