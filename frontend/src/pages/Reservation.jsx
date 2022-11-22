import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/reservation.module.css';
import ProductDetailsPolicy from './../components/ProductDetailsPolicy';
import DetailsCard from './../components/DetailsCard';
import { useEffect, useState } from 'react';
import DatePicker from './../components/DatePicker';
import FormField from '../components/FormField';
import { validateEmail } from '../utils';
import tick from '../assets/icons/tick.svg';
import BasicSelect from './../components/BasicSelect';
import data from '../mockedData/times.json';

export default function Reservation() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const defineStart = startDate => {
		setStartDate(startDate);
	};
	const defineEnd = endDate => {
		setEndDate(endDate);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	/* ------------------------------- Form field configurations  ------------------------------- */
	const nameFieldConfig = {
		fieldType: 'input',
		id: 'name',
		label: 'Nombre',
		type: 'text',
	};
	const lastnameFieldConfig = {
		fieldType: 'input',
		id: 'lastname',
		label: 'Apellido',
		type: 'text',
	};
	const emailFieldConfig = {
		fieldType: 'input',
		id: 'email',
		label: 'Correo electrónico',
		type: 'email',
	};
	const cityFieldConfig = {
		fieldType: 'input',
		id: 'city',
		label: 'Ciudad',
		type: 'text',
	};

	/* ------------------------------- Form validations ------------------------------- */

	const [emailError, setEmailError] = useState();
	const [nameError, setNameError] = useState();
	const [lastNameError, setLastNameError] = useState();
	const [cityError, setCityError] = useState();
	const [formValidation, setFormValidation] = useState(false);
	/* let isFormValid = false; */

	const setFieldError = (fieldName, error) => {
		switch (fieldName) {
			case 'email':
				setEmailError(error);
				break;
			case 'name':
				setNameError(error);
				break;
			case 'lastname':
				setLastNameError(error);
				break;
			case 'city':
				setCityError(error);
				break;
			default:
				break;
		}
	};

	const validateEmptyField = (fieldName, field) => {
		if (!field.value || !field.value.trim()) {
			setFieldError(fieldName, 'Este campo es requerido');
			setFormValidation(false);
		} else {
			setFieldError(fieldName, null);
			setFormValidation(true);
		}
	};

	const submitLoginForm = () => {
		const name = document.querySelector('#name');
		const lastname = document.querySelector('#lastname');
		const email = document.querySelector('#email');
		const city = document.querySelector('#city');

		validateEmptyField('name', name);
		validateEmptyField('lastname', lastname);
		validateEmptyField('email', email);
		validateEmptyField('city', city);

		/* if (!formValidation) {
			return;
		} */

		if (!validateEmail(email.value)) {
			setEmailError('Ingresa un email válido');
			setFormValidation(false);
		} else {
			setEmailError(null);
			setFormValidation(true);
		}
	};

	return (
		<div className={styles.reservationContainer}>
			<ProductDetailsHeader linkPath={'..'} />
			<h2 className={styles.mainTitle}>Completá tus datos</h2>
			<div className={styles.mainContainer}>
				<div className={styles.leftContainer}>
					{/* 	<h2 className={styles.personalDataTitle}>Completá tus datos</h2> */}
					<div className={styles.personalData}>
						<form className={styles.formContainer}>
							<FormField config={nameFieldConfig} error={nameError} />
							<FormField config={lastnameFieldConfig} error={lastNameError} />
							<FormField config={emailFieldConfig} error={emailError} />
							<FormField config={cityFieldConfig} error={cityError} />
						</form>
					</div>
					<div className={styles.calendarContainer}>
						<h2 className={styles.title}>Seleccioná tu fecha de reserva</h2>
						<DatePicker
							inline='inline'
							calendarType='booking'
							defineEnd={defineEnd}
							defineStart={defineStart}
						/>
					</div>
					<div className={styles.schedule}>
						<h2 className={styles.title}>Horario llegada</h2>
						<div className={styles.checkinContainer}>
							<div className={styles.checkin}>
								<img src={tick}></img>
								<span>
									Tu habitación va a estar lista para el check in entre las 10am
									y 11 am{' '}
								</span>
							</div>
							<BasicSelect data={data} />
						</div>
					</div>
				</div>
				<DetailsCard
					startDate={startDate}
					endDate={endDate}
					submitLoginForm={submitLoginForm}
					formValidation={formValidation}
				/>
			</div>
			<ProductDetailsPolicy />
		</div>
	);
}
