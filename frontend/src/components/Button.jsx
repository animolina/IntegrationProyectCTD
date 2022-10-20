import styles from '../styles/button.module.css';

export default function Button({ innerText }) {
	return (
		<button className={styles.basicButton}>
			<span className={styles.innerText}>{innerText}</span>
		</button>
	);
}
