import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import MyGallery from '../utils/MyGallery';
import ProductDetailsLocation from './../components/ProductDetailsLocation';

export default function ProductDetails() {
	return (
		<div className={styles.productDetailsContainer}>
			<ProductDetailsHeader />
			<ProductDetailsLocation />
			<MyGallery />
		</div>
	);
}
