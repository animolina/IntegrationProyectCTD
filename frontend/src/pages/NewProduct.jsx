import { useAppContext } from '../context/Store';
import FormField from '../components/FormField';
import styles from '../styles/newProduct.module.css';
import ProductPolicies from '../components/ProductPolicies';
import NewCharacteristic from '../components/NewCharacteristic';
import NewImage from '../components/NewImage';
import { useState } from 'react';

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

	/* ------------------------------- fetch data from user inputs ------------------------------- */

	// get selected city from select
	const [, setSelectedCity] = useState();
	const setCity = event => {
		const value = +event.target?.value;
		if (value) {
			setSelectedCity(cities.find(at => at.id === value));
		}
	};

	// get selected category from select
	const [, setSelectedCategory] = useState();
	const setCategory = event => {
		const value = +event.target?.value;
		if (value) {
			setSelectedCategory(categories.find(at => at.id === value));
		}
	};

	// get  title from text imput
	const [, setSelectedTitle] = useState();
	const handleTitleChange = e => {
		const value = e.target.value;
		setSelectedTitle(value);
	};

	// get description from text area

	const [, setSelectedDescription] = useState();
	const handleDescriptionChange = e => {
		const value = e.target.value;
		setSelectedDescription(value);
	};

	// get policy attributes
	// checkout policy
	const [, setSelectedCheckoutPolicy] = useState();
	const handleCheckoutChange = e => {
		const value = e.target.value;
		setSelectedCheckoutPolicy(value);
	};
	// social distance
	const [, setSelectedSocialDistance] = useState();
	const handleSocialDistanceChange = e => {
		const value = e.target.value;
		setSelectedSocialDistance(value);
	};

	// security deposit
	const [, setSelectedSecurityDeposit] = useState();
	const handleSecurityDepositChange = e => {
		const value = e.target.value;
		setSelectedSecurityDeposit(value);
	};

	// cancelation policy
	const [, setSelectedCancelation] = useState();
	const handleCancelationChange = e => {
		const value = e.target.value;
		setSelectedCancelation(value);
	};

	// are parties allowed?
	const [isPartyAllowed, setIsPartyAllowed] = useState(false);

	// is smoking allowed?
	const [isSmokingAllowed, setIsSmokingAllowed] = useState(false);

	// has smoking detector?
	const [hasSmokingDetector, setHasSmokingDetector] = useState(false);
	console.log({ isPartyAllowed, isSmokingAllowed, hasSmokingDetector });
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
							<FormField
								config={nameFieldConfig}
								handleChange={handleTitleChange}
							/>
							<FormField
								config={categoriesFieldConfig}
								handleSelect={setCategory}
							/>
						</div>
						<div className={styles.formRow}>
							<FormField config={addressFieldConfig} />
							<FormField config={cityFieldFieldConfig} handleSelect={setCity} />
						</div>
						<FormField
							config={descriptionFieldConfig}
							handleChange={handleDescriptionChange}
						/>
					</div>

					<NewCharacteristic />
					<ProductPolicies
						handleCheckoutChange={handleCheckoutChange}
						handleSocialDistanceChange={handleSocialDistanceChange}
						handleSecurityDepositChange={handleSecurityDepositChange}
						handleCancelationChange={handleCancelationChange}
						setIsPartyAllowed={setIsPartyAllowed}
						setIsSmokingAllowed={setIsSmokingAllowed}
						setHasSmokingDetector={setHasSmokingDetector}
					/>
					<NewImage />

					<button className={styles.createButton}>Crear</button>
				</div>
			</div>
		</div>
	);
}
