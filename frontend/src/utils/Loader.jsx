import styles from '../styles/loader.module.css';

export default function Loader() {
	return (
		<div className={styles.spinnerContainer}>
			<div className={styles.loadingSpinner}></div>
		</div>
	);
}
