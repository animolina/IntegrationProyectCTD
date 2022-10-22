import styles from '../styles/button.module.css';

export default function Button({ innerText, handleClick, type }) {
	return (
		<button
			onClick={event => handleClick()}
			className={styles.basicButton}
			type={type ?? 'button'}
		>
			<span className={styles.innerText}>{innerText}</span>
		</button>
	);
}
