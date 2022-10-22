import CategoryCard from './CategoryCard';
import styles from '../styles/categoryBlock.module.css';

export default function CategoryBlock() {
	return (
		<div className={styles.mainContainer}>
			<CategoryCard />
		</div>
	);
}
