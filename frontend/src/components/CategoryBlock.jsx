import styles from '../styles/categoryBlock.module.css';
import CategoryListCard from './CategoryListCard';

export default function CategoryBlock() {
	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Buscar por tipo de alojamiento</h2>
			<CategoryListCard />
		</div>
	);
}
