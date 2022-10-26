import styles from '../styles/categoryCard.module.css';
/* import imgHoteles from '../assets/imgs/categoyHoteles.png'; */

export default function CategoryCard({ title, description, urlImg }) {
	return (
		<div className={styles.categoryCard}>
			<img src={urlImg} className={styles.cardImg} alt='...' />
			<div className={styles.cardBody}>
				<h5 className={styles.cardTitle}>{title} </h5>

				<p className={styles.cardText}>{description}</p>
			</div>
		</div>
	);
}
