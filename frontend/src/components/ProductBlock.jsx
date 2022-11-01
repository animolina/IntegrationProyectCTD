import ProductListCard from './ProductListCard';
import styles from '../styles/productBlock.module.css';

export default function ProductBlock() {
	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Recomendaciones</h2>
			<ProductListCard />
		</div>
	);
}
