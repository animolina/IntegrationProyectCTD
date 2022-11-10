import CategoryCard from './CategoryCard';
import styles from '../styles/catogoryListCard.module.css';
import { useAppContext } from '../context/Store';

export default function CategoryListCard() {
	const store = useAppContext();
	const categories = store.categories;

	if (categories === null) {
		return <div>Loading</div>;
	}

	return (
		<div className={styles.mainContainer}>
			{categories.map(category => (
				<CategoryCard
					key={category.id}
					title={category.title}
					description={category.description}
					urlImg={category.imageURL}
				/>
			))}
		</div>
	);
}
