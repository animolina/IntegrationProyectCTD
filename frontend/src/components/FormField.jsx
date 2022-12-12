import styles from '../styles/formField.module.css';
import BasicSelect from './../components/BasicSelect';
import Input from './Input';

export default function FormField({
	config,
	error,
	handleSelect,
	handleChange,
}) {
	// Add new Field Types here
	return (
		<div className={styles.formField}>
			<label htmlFor={config.id} className={config.labelStyles ?? styles.label}>
				{config.label}
			</label>
			{config.fieldType === 'input' && (
				<Input
					className={error ? styles.errorInput : ''}
					type={config.type}
					id={config.id}
					placeholder={config.placeholder}
					disabled={config.disabled || false}
					onChange={handleChange}
				/>
			)}
			{config.fieldType === 'select' && (
				<BasicSelect
					data={config.selectData}
					handleSelect={handleSelect}
					disabled={config.disabled}
					placeholder={config.placeholder}
				/>
			)}
			{error && <span className={styles.errorMessage}>{error}</span>}
			{config.fieldType === 'textarea' && (
				<textarea
					className={styles.textArea}
					rows={config.textAreaRows}
					cols={config.textAreaCols}
					placeholder={config.textAreaPlaceholder}
					disabled={config.disabled}
					onChange={handleChange}
				></textarea>
			)}
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
}
