import styles from '../styles/button.module.css';

export default function Button({ type, innerText, handleClick }) {
	return (
		<button
			type='button'
			onClick={handleClick}
			className={type === 'outline' ? styles.outlineButton : styles.basicButton}
		>
			<span className={styles.innerText}>{innerText}</span>
		</button>
	);
}
