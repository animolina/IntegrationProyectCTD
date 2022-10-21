import styles from '../styles/button.module.css';

export default function Button({ type, innerText }) {
	return (
		<button
			className={type === 'outline' ? styles.outlineButton : styles.basicButton}
		>
			<span className={styles.innerText}>{innerText}</span>
		</button>
	);
}
