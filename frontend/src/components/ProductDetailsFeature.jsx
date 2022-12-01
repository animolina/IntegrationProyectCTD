import styles from '../styles/productDetailsFeature.module.css';

import ProductDetailsFeatureItem from './ProductDetailsFeatureItem';

import { useAppContext } from '../context/Store';

export default function ProductDetailsFeature() {
	const store = useAppContext();
	const product = store.product;

	/* if (product === null) {
		return <div>Loading</div>;
	} */

	return (
		<>
			<h2 className={styles.featureTitle}>¿Qué ofrece este lugar?</h2>
			<div className={styles.productDetailsFeature}>
				<ul className={styles.featureGroup}>
					{product?.characteristics.map(feature => (
						<ProductDetailsFeatureItem
							key={feature.id}
							type={feature.description}
						/>
					))}
				</ul>
			</div>
		</>
	);
}
