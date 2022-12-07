import { useAppContext } from '../context/Store';
import FormField from '../components/FormField';
import styles from '../styles/newProduct.module.css';
import ProductPolicies from '../components/ProductPolicies';
import NewCharacteristic from '../components/NewCharacteristic';
import NewImage from '../components/NewImage';
// import { useState } from 'react';

const labelStyles = styles.label;

const nameFieldConfig = {
	fieldType: 'input',
	id: 'name',
	label: 'Nombre de la propiedad',
	type: 'text',
	labelStyles,
};
const cityFieldFieldConfig = {
	fieldType: 'select',
	label: 'Ciudad',
	selectData: [],
	selectHandler: () => {
		console.log('City selected');
	},
	labelStyles,
};
const addressFieldConfig = {
	fieldType: 'input',
	id: 'address',
	label: 'Dirección',
	type: 'text',
	labelStyles,
};
const categoriesFieldConfig = {
	fieldType: 'select',
	label: 'Categoría',
	selectData: [],
	selectHandler: () => {
		console.log('Category selected');
	},
	labelStyles,
};
const descriptionFieldConfig = {
	fieldType: 'textarea',
	label: 'Descripción',
	textAreaRows: 10,
	textAreaCols: 10,
	textAreaPlaceholder: 'Escribir aquí...',
	labelStyles,
};

export default function NewProduct() {
	const store = useAppContext();
	const rawCities = store.cities || [];
	const rawCategories = store.categories || [];

	const cities = [...rawCities].map(c => {
		return { id: c.id, content: c.city };
	});
	cities.unshift({ id: null, content: '' });
	const categories = [...rawCategories].map(c => {
		return { id: c.id, content: c.title };
	});
	categories.unshift({ id: null, content: '' });

	cityFieldFieldConfig.selectData = cities;
	categoriesFieldConfig.selectData = categories;

	return (
		<div className={styles.mainContainer}>
			<header className={styles.newProductHeader}>
				<h2>Administración</h2>
			</header>
			<div className={styles.newProductBody}>
				<h3 className={styles.newProductTitle}>Crear Propiedad</h3>
				<div className={styles.newProductCard}>
					<div className={styles.formContainer}>
						<div className={styles.formRow}>
							<FormField config={nameFieldConfig} />
							<FormField config={categoriesFieldConfig} />
						</div>
						<div className={styles.formRow}>
							<FormField config={addressFieldConfig} />
							<FormField config={cityFieldFieldConfig} />
						</div>
						<FormField config={descriptionFieldConfig} />
					</div>

					<NewCharacteristic />
					<ProductPolicies />
					<NewImage />

					<button className={styles.createButton}>Crear</button>
				</div>
			</div>
		</div>
	);
}
