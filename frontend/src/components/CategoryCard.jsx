import styles from '../styles/categoryCard.module.css';

export default function CategoryCard({ title, description, urlImg, onClick }) {
	return (
		<div className={styles.categoryCard} onClick={onClick}>
			<img src={urlImg} className={styles.cardImg} alt='Category Image' />
			<div className={styles.cardBody}>
				<h5 className={styles.cardTitle}>{title}</h5>
				<p className={styles.cardText}>{description}</p>
			</div>
		</div>
	);
}
