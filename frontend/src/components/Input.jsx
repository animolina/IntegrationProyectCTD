import styles from '../styles/input.module.css';

export default function Input({ type, placeholder }) {
	return (
		<input
			className={styles.basicInput}
			type={type ?? 'text'}
			placeholder={placeholder ?? ''}
		/>
	);
}
