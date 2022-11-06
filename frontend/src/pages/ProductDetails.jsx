import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import GalleryProduct from '../utils/GalleryProduct';
import ProductDetailsLocation from './../components/ProductDetailsLocation';
import ProductDetailsDescription from './../components/ProductDetailsDescription';
import ProductDetailsFeature from '../components/ProductDetailsFeature.jsx';
import ProductDetailsPolitic from './../components/ProductDetailsPolitic';

import ShareProduct from '../utils/ShareProduct';

export default function ProductDetails() {
	return (
		<div className={styles.productDetailsContainer}>
			<ProductDetailsHeader />
			<ProductDetailsLocation />
			<ShareProduct />
			<GalleryProduct />
			<ProductDetailsDescription />
			<ProductDetailsFeature />
			<ProductDetailsPolitic />
		</div>
	);
}
