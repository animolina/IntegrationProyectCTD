import ProductCard from './ProductCard';
import styles from '../styles/productListCard.module.css';
import { useAppContext } from '../context/Store';

export default function ProductListCard() {
	const store = useAppContext();
	const products = store.products;
	return (
		<div className={styles.mainContainer}>
			{products.map(product => (
				<ProductCard
					key={product?.id}
					title={product?.title}
					description={product?.description}
					urlImg={product?.urlImg}
					location={product?.location}
					category={product?.category}
				/>
			))}
		</div>
	);
}
