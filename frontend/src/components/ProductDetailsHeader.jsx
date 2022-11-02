import styles from '../styles/productDetailsHeader.module.css';
import backArrow from '../assets/imgs/backArrow.png';

export default function ProductDetailsHeader() {
	return (
		<header className={styles.productDetailsHeader}>
			<div className={styles.container}>
				<p className={styles.productDetailsCategory}>CATEGORÍA</p>
				<h2 className={styles.productDetailsTitle}>Tíulo</h2>
			</div>
			<img className={styles.backArrow} src={backArrow} alt='' />
		</header>
	);
}
