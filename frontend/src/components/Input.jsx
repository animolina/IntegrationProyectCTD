import { forwardRef, useState } from 'react';
import styles from '../styles/input.module.css';
import hideIcon from '../assets/icons/hide-icon.svg';

const Input = ({ props, type, placeholder, onClick, value }, ref) => {
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
				ref={ref}
				onClick={onClick}
				value={value}
			/>
			<img
				onClick={showPassword}
				className={styles.hideIcon}
				src={hideIcon}
				alt='hide icon'
			/>
		</div>
	) : (
		<input
			className={`${styles.basicInput} ${props.className}`}
			id={props.id ?? ''}
			type={props.type ?? 'text'}
			placeholder={props.placeholder ?? ''}
			ref={ref}
			onClick={onClick}
			value={value}
		/>
	);
};

export default forwardRef(Input);
