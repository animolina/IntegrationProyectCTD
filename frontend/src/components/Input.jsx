import styles from '../styles/input.module.css';
import hideIcon from '../assets/icons/hide-icon.svg';
import { useState } from 'react';

export default function Input(props) {
	const [passwordShown, setPasswordShown] = useState(false);

	const showPassword = () => {
		setPasswordShown(!passwordShown);
	};

	return props.type === 'password' ? (
		<div>
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
				alt='hide icon'
			/>
		</div>
	) : (
		<input
			className={`${styles.basicInput} ${props.className}`}
			id={props.id ?? ''}
			type={props.type ?? 'text'}
			placeholder={props.placeholder ?? ''}
		/>
	);
}
