import ProductCard from './ProductCard';
import products from '../mockedData/products.json';
import styles from '../styles/productListCard.module.css';

export default function ProductListCard() {
	return (
		<div className={styles.mainContainer}>
			{products.map(product => (
				<ProductCard
					key={product.id}
					title={product.title}
					description={product.description}
					urlImg={product.urlImg}
					location={product.location}
					category={product.category}
				/>
			))}
		</div>
	);
}
