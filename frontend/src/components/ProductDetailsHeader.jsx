import styles from '../styles/productDetailsHeader.module.css';
import backArrow from '../assets/imgs/backArrow.png';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/Store';
import Loader from './../utils/Loader';

export default function ProductDetailsHeader({ linkPath }) {
	const store = useAppContext();
	const product = store.product;
	if (product === null) {
		return <Loader />;
	}
	return (
		<header className={styles.productDetailsHeader}>
			<div className={styles.container}>
				<p className={styles.productDetailsCategory}>
					{product.category.title}
				</p>
				<h2 className={styles.productDetailsTitle}>{product.title}</h2>
			</div>
			<Link to={linkPath || '/'} relative='path'>
				<img className={styles.backArrow} src={backArrow} alt='Back Arrow' />
			</Link>
		</header>
	);
}
