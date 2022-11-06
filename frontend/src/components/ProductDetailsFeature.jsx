import styles from '../styles/productDetailsFeature.module.css';

import ProductDetailsFeatureItem from './ProductDetailsFeatureItem';
export default function ProductDetailsFeature() {
	return (
		<>
			<h2 className={styles.featureTitle}>¿Qué ofrece este lugar?</h2>
			<div className={styles.productDetailsFeature}>
				<ul className={styles.featureGroup}>
					<ProductDetailsFeatureItem type={'cocina'} />
					<ProductDetailsFeatureItem type={'televisor'} />
					<ProductDetailsFeatureItem type={'aire acondicionado'} />
					<ProductDetailsFeatureItem type={'apto mascotas'} />
					<ProductDetailsFeatureItem type={'estacionamiento gratuito'} />
					<ProductDetailsFeatureItem type={'pileta'} />
					<ProductDetailsFeatureItem type={'wifi'} />
				</ul>
			</div>
		</>
	);
}
