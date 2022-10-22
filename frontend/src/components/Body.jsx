import styles from '../styles/body.module.css';
import SearchBlock from './SearchBlock.jsx';

export default function Body() {
	return (
		<div className={styles.body}>
			<SearchBlock />
		</div>
	);
}
