import styles from '../styles/input.module.css';

export default function Input({ id, type, placeholder }) {
	return (
		<input
			className={styles.basicInput}
			id={id ?? ''}
			type={type ?? 'text'}
			placeholder={placeholder ?? ''}
		/>
	);
}
