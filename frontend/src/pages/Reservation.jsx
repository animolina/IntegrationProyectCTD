import ProductDetailsHeader from '../components/ProductDetailsHeader';
import styles from '../styles/reservation.module.css';
import ProductDetailsPolicy from './../components/ProductDetailsPolicy';
import DetailsCard from './../components/DetailsCard';
import { useEffect, useState } from 'react';
import DatePicker from './../components/DatePicker';
import FormField from '../components/FormField';
import tick from '../assets/icons/tick.svg';
import BasicSelect from './../components/BasicSelect';
import availableTimes from '../mockedData/times.json';
import { useUser } from '../hooks/User.hooks';
import { useAppContext } from '../context/Store';
import { useParams, useNavigate } from 'react-router-dom';
import { ReservationsService } from '../services/reservationsService';

const nameFieldConfig = {
	fieldType: 'input',
	id: 'name',
	label: 'Nombre',
	type: 'text',
	disabled: true,
};
const lastnameFieldConfig = {
	fieldType: 'input',
	id: 'lastname',
	label: 'Apellido',
	type: 'text',
	disabled: true,
};
const emailFieldConfig = {
	fieldType: 'input',
	id: 'email',
	label: 'Correo electrónico',
	type: 'email',
	disabled: true,
};

export default function Reservation() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [city, setCity] = useState(null);
	const [availableStartTime, setAvailableStartTime] = useState();
	const [availableEndTime, setAvailableEndTime] = useState();
	const [startTime, setStartTime] = useState();
	const [alert, setAlert] = useState();
	const { id } = useParams();

	const navigate = useNavigate();

	const { user } = useUser();
	const store = useAppContext();

	const reservations = store.reservations;
	const reservedDates =
		reservations && reservations.length > 0
			? reservations.map(reservation => ({
					start: new Date(reservation.startDate),
					end: new Date(reservation.endDate),
					startTime: reservation.startTime,
			  }))
			: [];

	const rawCities = [...store.cities];
	rawCities.unshift({
		id: null,
		city: 'Selecciona una ciudad',
		state: null,
		country: null,
	});
	const cities = rawCities.map(c => {
		return { id: c.id, content: c.city };
	});

	useEffect(() => {
		window.scrollTo(0, 0);
		if (user) {
			document.querySelector('#name').value = user.name;
			document.querySelector('#lastname').value = user.lastName;
			document.querySelector('#email').value = user.email;
		}
	}, []);

	useEffect(() => {
		setAvailableStartTime(availableTimes.find(at => at.id === 0).content);
		setAvailableEndTime(availableTimes.find(at => at.id === 23).content);

		if (reservedDates && reservedDates.length > 0) {
			const initialtime = startDate ?? new Date();

			reservedDates.forEach(reservedDate => {
				if (reservedDate.end.toDateString() === initialtime.toDateString()) {
					setAvailableStartTime(
						availableTimes.find(at => at.id === 13).content
					);
				}
			});
		}
	}, [startDate, endDate]);

	const setReservationStartTime = event => {
		const value = +event.target?.value;
		if (value) {
			setStartTime(availableTimes.find(at => at.id === value));
		}
	};

	const setUserCity = event => {
		const value = +event.target?.value;
		if (value) {
			setCity(cities.find(at => at.id === value));
		}

		if (isNaN(value)) {
			setCity(null);
		}
	};

	const defineStart = startDate => {
		setStartDate(startDate);
	};

	const defineEnd = endDate => {
		setEndDate(endDate);
	};

	const setErrorAlert = text => {
		setAlert({ type: 'error', text });
		document.getElementById('datePickerContainer').scrollIntoView();
	};

	const createReservation = async () => {
		if (!city || !city.id) {
			setErrorAlert('Seleccioná una ciudad');
			return;
		}

		if (!startDate || !endDate) {
			setErrorAlert('Seleccioná un rango de fechas');
			return;
		}

		if (!startTime) {
			setErrorAlert('Seleccioná una hora de llegada');
			return;
		}

		const reqStartTime = `${startTime.content.split(' ')[0]}:00`;
		const reqStartDate = startDate.toISOString().split('T')[0];
		const reqEndDate = endDate.toISOString().split('T')[0];

		const result = await ReservationsService.createReservation(
			reqStartTime,
			reqStartDate,
			reqEndDate,
			+id
		);

		if (result && result.includes('created')) {
			navigate('/success');
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
		<div className={styles.reservationContainer}>
			<ProductDetailsHeader linkPath={'..'} />
			<h2 className={styles.mainTitle}>Completá tus datos</h2>
			<div className={styles.mainContainer}>
				<div className={styles.leftContainer}>
					<div className={styles.personalData}>
						<form className={styles.formContainer}>
							<FormField config={nameFieldConfig} />
							<FormField config={lastnameFieldConfig} />
							<FormField config={emailFieldConfig} />
							<div className={styles.citySelect}>
								<BasicSelect data={cities} handleSelect={setUserCity} />
								<span className={styles.hint}>Obligatorio</span>
							</div>
						</form>
					</div>
					<div id='datePickerContainer' className={styles.calendarContainer}>
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
								<img alt='Ícono chequeado' src={tick}></img>
								<span>
									Tu habitación va a estar lista para el Check-in entre las{' '}
									{availableStartTime} y {availableEndTime}{' '}
								</span>
							</div>
							<BasicSelect
								data={availableTimes}
								handleSelect={setReservationStartTime}
							/>
						</div>
					</div>
				</div>
				<DetailsCard
					startDate={startDate}
					endDate={endDate}
					submitLoginForm={createReservation}
					alert={alert}
				/>
			</div>
			<ProductDetailsPolicy />
		</div>
	);
}
