import ProductCard from './ProductCard';
import styles from '../styles/productListCard.module.css';
import { useAppContext } from '../context/Store';
import { useUser } from '../hooks/User.hooks';

export default function ProductListCard() {
	const store = useAppContext();
	const products = store.products;
	const { user } = useUser();

	const shuffleArray = array => {
		const newArray = [...array];
		let i = newArray.length;
		while (--i > 0) {
			const randIndex = Math.floor(Math.random() * (i + 1));
			[newArray[randIndex], newArray[i]] = [newArray[i], newArray[randIndex]]; // fisher yates shuffle algorithm
		}
		return newArray;
	};

	return (
		<>
			{user ? (
				<div className={styles.mainContainer}>
					{products.slice(0, 8).map(product => (
						<ProductCard
							key={product?.id}
							title={product?.title}
							description={product?.description}
							urlImg={product?.urlImg}
							location={product?.city.state}
							category={product?.category.title}
						/>
					))}
				</div> // slice is used to limit the quantity of product recomendations being displayed on home page.(8 products)
			) : (
				<div className={styles.mainContainer}>
					{shuffleArray(products)
						.slice(0, 8)
						.map(product => (
							<ProductCard
								key={product?.id}
								title={product?.title}
								description={product?.description}
								urlImg={product?.urlImg}
								location={product?.city.state}
								category={product?.category.title}
							/>
						))}
				</div>
			)}
		</>
	);
}
