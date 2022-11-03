import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import GalleryProduct from '../utils/GalleryProduct';
import ProductDetailsLocation from './../components/ProductDetailsLocation';
import ProductDetailsDescription from './../components/ProductDetailsDescription';

export default function ProductDetails() {
	return (
		<div className={styles.productDetailsContainer}>
			<ProductDetailsHeader />
			<ProductDetailsLocation />
			<GalleryProduct />
			<ProductDetailsDescription />
		</div>
	);
}
