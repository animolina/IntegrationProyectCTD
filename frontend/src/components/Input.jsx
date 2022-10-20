import styles from '../styles/input.module.css';
import PropTypes from 'prop-types';

export default function Input({ type, placeholder }) {
	return <input className={styles.basicInput} type={type ?? 'text'} placeholder={placeholder ?? ''} />;
}

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
};
