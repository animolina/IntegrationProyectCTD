import styles from '../styles/productDetailsHeader.module.css';
import backArrow from '../assets/imgs/backArrow.png';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/Store';

export default function ProductDetailsHeader() {
	const store = useAppContext();
	const product = store.product;
	if (product === null) {
		return <div>Loading</div>;
	}
	return (
		<header className={styles.productDetailsHeader}>
			<div className={styles.container}>
				<p className={styles.productDetailsCategory}>
					{product.category.title}
				</p>
				<h2 className={styles.productDetailsTitle}>{product.title}</h2>
			</div>
			<Link to='/'>
				<img className={styles.backArrow} src={backArrow} alt='Back Arrow' />
			</Link>
		</header>
	);
}
