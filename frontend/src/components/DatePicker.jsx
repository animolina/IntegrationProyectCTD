import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { useState } from 'react';
import { useAppContext } from '../context/Store';
import '../styles/datePicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale('es', es);

export default function DatePicker({
	customInput,
	inline,
	placeholder,
	calendarType,
	defineEnd,
	defineStart,
}) {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();

	const onChange = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		defineStart(start);
		defineEnd(end);
	};
	/* ------------------------------- Configurations to display reservations by product ------------------------------- */

	/* const store = useAppContext();
	const reservations = store.reservations;

	const disabledDates = reservations.map(reservation => ({
		start: new Date(reservation.startDate),
		end: new Date(reservation.endDate),
	})); */

	return (
		<div className={calendarType === 'booking' ? 'booking' : ' '}>
			<ReactDatePicker
				monthsShown={2}
				selected={startDate}
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={onChange}
				customInput={customInput}
				calendarClassName='datePickerCalendar'
				locale='es'
				formatWeekDay={nameOfDay => nameOfDay.substr(0, 1).toUpperCase()}
				dateFormat='dd MMM'
				placeholderText={placeholder}
				inline={inline}
				minDate={new Date()} // it disables previous dates
				calendarType={calendarType}
				previousMonthButtonLabel=''
				nextMonthButtonLabel=''
				// excludeDateIntervals={calendarType === 'booking' ? disabledDates : ''}
			/>
		</div>
	);
}
