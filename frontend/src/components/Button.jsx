import styles from '../styles/button.module.css';
import PropTypes from 'prop-types';

export default function Button({ innerText }) {
	return (
		<button className={styles.basicButton}>
			<span className={styles.innerText}>{innerText}</span>
		</button>
	);
}

Button.propTypes = {
	innerText: PropTypes.string.isRequired,
};
