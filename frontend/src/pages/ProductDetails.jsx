import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import GalleryProduct from '../utils/GalleryProduct';
import ProductDetailsLocation from './../components/ProductDetailsLocation';
import ProductDetailsDescription from './../components/ProductDetailsDescription';
import ProductDetailsFeature from '../components/ProductDetailsFeature.jsx';
import ProductDetailsPolicy from './../components/ProductDetailsPolicy';
import BookingBlock from './../components/BookingBlock';

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
			<BookingBlock />
			<ProductDetailsPolicy />
		</div>
	);
}
