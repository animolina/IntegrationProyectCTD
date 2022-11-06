import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/productDetails.module.css';
import GalleryProduct from '../utils/GalleryProduct';
import ProductDetailsLocation from './../components/ProductDetailsLocation';
import ProductDetailsDescription from './../components/ProductDetailsDescription';
import ProductDetailsFeature from '../components/ProductDetailsFeature.jsx';
import ProductDetailsPolitic from './../components/ProductDetailsPolitic';
import BookingBlock from './../components/BookingBlock';

export default function ProductDetails() {
	return (
		<div className={styles.productDetailsContainer}>
			<ProductDetailsHeader />
			<ProductDetailsLocation />
			<GalleryProduct />
			<ProductDetailsDescription />
			<ProductDetailsFeature />
			<BookingBlock />
			<ProductDetailsPolitic />
		</div>
	);
}
