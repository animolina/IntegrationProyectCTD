import styles from '../styles/productDetailsFeature.module.css';

import ProductDetailsFeatureItem from './ProductDetailsFeatureItem';

import { useAppContext } from '../context/Store';

export default function ProductDetailsFeature() {
	const store = useAppContext();
	const features = store.features;

	if (features === null) {
		return (
			<div style={{ backgroundColor: 'red', width: '50rem' }}>Loading</div>
		);
	}

	console.log(features);
	return (
		<>
			<h2 className={styles.featureTitle}>¿Qué ofrece este lugar?</h2>
			<div className={styles.productDetailsFeature}>
				<ul className={styles.featureGroup}>
					{features.map(feature => (
						<ProductDetailsFeatureItem
							key={feature.id}
							type={feature.description}
						/>
					))}

					{/* <ProductDetailsFeatureItem type={'cocina'} />
					<ProductDetailsFeatureItem type={'televisor'} />
					<ProductDetailsFeatureItem type={'aire acondicionado'} />
					<ProductDetailsFeatureItem type={'apto mascotas'} />
					<ProductDetailsFeatureItem type={'estacionamiento gratuito'} />
					<ProductDetailsFeatureItem type={'pileta'} />
					<ProductDetailsFeatureItem type={'wifi'} /> */}
				</ul>
			</div>
		</>
	);
}
