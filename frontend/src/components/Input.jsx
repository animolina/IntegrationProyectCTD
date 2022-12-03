import { useState, forwardRef } from 'react';
import styles from '../styles/input.module.css';
import hideIcon from '../assets/icons/hide-icon.svg';

const Input = (props, ref) => {
	const [passwordShown, setPasswordShown] = useState(false);

	const showPassword = () => {
		setPasswordShown(!passwordShown);
	};

	return props.type === 'password' ? (
		<div className={styles.inputWithIcon}>
			<input
				className={`${styles.basicInput} ${props.className}`}
				id={props.id ?? ''}
				type={passwordShown ? 'text' : 'password'}
				placeholder={props.placeholder ?? ''}
			/>
			<img
				onClick={showPassword}
				className={styles.hideIcon}
				src={hideIcon}
				alt='Ícono de ojo cerrado'
			/>
		</div>
	) : (
		<input
			className={`${styles.basicInput} ${props.className}`}
			id={props.id ?? ''}
			type={props.type ?? 'text'}
			placeholder={props.placeholder ?? ''}
			ref={ref}
			onClick={props.onClick}
			value={props.value}
			onChange={props.onChange}
			disabled={props.disabled || false}
		/>
	);
};
export default forwardRef(Input);
