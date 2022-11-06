import styles from '../styles/body.module.css';
import SearchBlock from './SearchBlock.jsx';
import CategoryBlock from './CategoryBlock.jsx';
import ProductBlock from './ProductBlock';

export default function Body() {
	return (
		<div className={styles.body}>
			<SearchBlock />
			<CategoryBlock />
			<ProductBlock />
		</div>
	);
}
