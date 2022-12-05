import styles from '../styles/formField.module.css';
import Input from './Input';

export default function FormField({ config, error }) {
	// Add new Field Types here
	return (
		config.fieldType === 'input' && (
			<div className={styles.formField}>
				<label htmlFor={config.id} className={styles.label}>
					{config.label}
				</label>
				<Input
					className={error ? styles.errorInput : ''}
					type={config.type}
					id={config.id}
					placeholder={config.placeholder}
					disabled={config.disabled || false}
				/>
				{error && <span className={styles.errorMessage}>{error}</span>}
			</div>
		)
	);
}
