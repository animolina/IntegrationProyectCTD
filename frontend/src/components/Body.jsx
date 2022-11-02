import styles from '../styles/body.module.css';
import SearchBlock from './SearchBlock.jsx';
import CategoryBlock from './CategoryBlock.jsx';
import ProductBlock from './ProductBlock';
import BookingBlock from './BookingBlock';

export default function Body() {
	return (
		<div className={styles.body}>
			<SearchBlock />
			<CategoryBlock />
			<ProductBlock />
			<BookingBlock />
		</div>
	);
}
