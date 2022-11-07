import ProductCard from './ProductCard';
import styles from '../styles/productListCard.module.css';
import { useAppContext } from '../context/Store';
import { useState, useEffect } from 'react';
// import { UserContext } from '../context/UserContext';

export default function ProductListCard() {
	const store = useAppContext();
	const products = store.products;
	// const { user, setUser } = useContext(UserContext);

	const shuffleArray = array => {
		let i = array.length;
		while (--i > 0) {
			const randIndex = Math.floor(Math.random() * (i + 1));
			[array[randIndex], array[i]] = [array[i], array[randIndex]]; // fisher yates shuffle algorithm
		}
		return array;
	};

	const [randomArray, setRandomArray] = useState([products]);

	useEffect(() => {
		setRandomArray(shuffleArray(products));
	});

	return (
		<div className={styles.mainContainer}>
			{randomArray
				.filter((product, index) => index < 8)
				.map(product => (
					<ProductCard
						key={product?.id}
						title={product?.title}
						description={product?.description}
						urlImg={product?.urlImg}
						location={product?.location}
						category={product?.category}
					/>
				))}
		</div> // filter is used to limit the quantity of product recomendations being displayed on home page.
	);
}
