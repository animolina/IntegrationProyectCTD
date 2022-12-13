import { useAppContext } from '../context/Store';
import FormField from '../components/FormField';
import styles from '../styles/newProduct.module.css';
import ProductPolicies from '../components/ProductPolicies';
import NewCharacteristic from '../components/NewCharacteristic';
import NewImage from '../components/NewImage';
import { useState, useEffect } from 'react';
import { ProductsService } from '../services/productsService';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Alert from '../components/Alert';
import Successful from './Successful';

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
	const [alert, setAlert] = useState();

	const navigate = useNavigate();
	const { id } = useParams();
	const [submitAlert, setSubmitAlert] = useState();

	useEffect(() => {
		if (alert) {
			setSubmitAlert(alert);
		}
	}, [alert]);

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
	const [selectedCity, setSelectedCity] = useState();
	const setCity = value => {
		if (value) {
			setSelectedCity(cities.find(at => at.id === Number(value)));
		}
	};

	// get selected category from select
	const [selectedCategory, setSelectedCategory] = useState();
	const setCategory = value => {
		if (value) {
			setSelectedCategory(categories.find(at => at.id === Number(value)));
		}
	};

	// get  title from text imput
	const [selectedTitle, setSelectedTitle] = useState();
	const handleTitleChange = e => {
		const value = e.target.value;
		setSelectedTitle(value);
	};

	// get description from text area

	const [selectedDescription, setSelectedDescription] = useState();
	const handleDescriptionChange = e => {
		const value = e.target.value;
		setSelectedDescription(value);
	};

	// get policy attributes
	// checkout policy
	const [selectedCheckoutPolicy, setSelectedCheckoutPolicy] = useState();
	const handleCheckoutChange = e => {
		const value = e.target.value;
		setSelectedCheckoutPolicy(value);
	};
	// social distance
	const [selectedSocialDistance, setSelectedSocialDistance] = useState();
	const handleSocialDistanceChange = e => {
		const value = e.target.value;
		setSelectedSocialDistance(value);
	};

	// security deposit
	const [selectedSecurityDeposit, setSelectedSecurityDeposit] = useState();
	const handleSecurityDepositChange = e => {
		const value = e.target.value;
		setSelectedSecurityDeposit(value);
	};

	// cancelation policy
	const [selectedCancelation, setSelectedCancelation] = useState();
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

	// get product characteristics
	const [newProductCharacteristics, setNewProductCharacteristics] = useState(
		[]
	);

	// availability
	const availability = 'yes';

	// get image url from input
	const [newProductImages, setNewProductImages] = useState([]);

	const setErrorAlert = text => {
		setAlert({ type: 'error', text });
	};

	const createProduct = async () => {
		if (!selectedCity || !selectedCity.id) {
			setErrorAlert('Seleccioná una ciudad');
			return;
		}

		if (!selectedCategory || !selectedCategory.id) {
			setErrorAlert('Seleccioná una categoría para tu propiedad');
			return;
		}

		if (!selectedTitle) {
			setErrorAlert('Ingresá una título');
			return;
		}
		if (!selectedDescription) {
			setErrorAlert('Ingresá una descripción');
			return;
		}
		if (!setNewProductCharacteristics) {
			setErrorAlert('Ingresá atributos');
			return;
		}

		if (
			!selectedCheckoutPolicy ||
			!selectedSocialDistance ||
			!selectedSecurityDeposit ||
			!selectedCancelation
		) {
			setErrorAlert('Debes completar todos los datos de las políticas');
			return;
		}

		const result = await ProductsService.createProduct({
			title: selectedTitle,
			description: selectedDescription,
			availability,
			category: { id: selectedCategory.id },
			city: { id: selectedCity.id },
			characteristics: newProductCharacteristics,
			images: newProductImages.map(img => ({
				title: '',
				url: img.url,
			})),
			policy: {
				checkout: selectedCheckoutPolicy,
				partyAllowed: isPartyAllowed,
				smokeAllowed: isSmokingAllowed,
				socialDistance: selectedSocialDistance,
				smokeDetector: hasSmokingDetector,
				securityDeposit: selectedSecurityDeposit,
				cancellation: selectedCancelation,
			},
		});
		if (result && result.includes('created')) {
			navigate('/success-property');
		} else if (result.status === 403) {
			navigate('/login', {
				state: {
					alert: { type: 'warning', text: 'Inicia sesión para continuar' },
					forwardingRoute: `/product-details/${id}/reservation`,
				},
			});
		}
	};

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

					<NewCharacteristic
						setNewProductCharacteristics={setNewProductCharacteristics}
					/>
					<ProductPolicies
						handleCheckoutChange={handleCheckoutChange}
						handleSocialDistanceChange={handleSocialDistanceChange}
						handleSecurityDepositChange={handleSecurityDepositChange}
						handleCancelationChange={handleCancelationChange}
						setIsPartyAllowed={setIsPartyAllowed}
						setIsSmokingAllowed={setIsSmokingAllowed}
						setHasSmokingDetector={setHasSmokingDetector}
					/>
					<NewImage setNewProductImages={setNewProductImages} />

					<Button Button innerText={'Crear'} handleClick={createProduct} />
					{submitAlert && (
						<div className={styles.reservationAlert}>
							<Alert type={alert.type} text={alert.text} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
