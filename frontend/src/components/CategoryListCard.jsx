import CategoryCard from './CategoryCard';
import styles from '../styles/catogoryListCard.module.css';
import categories from '../mockedData/categories.json';

export default function CategoryListCard() {
	return (
		<div className={styles.mainContainer}>
			{categories.map(category => (
				<CategoryCard
					key={category.id}
					title={category.title}
					description={category.description}
					urlImg={category.urlImg}
				/>
			))}
		</div>
	);
}
