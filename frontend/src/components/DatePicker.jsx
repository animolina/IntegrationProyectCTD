import ReactDatePicker, { registerLocale } from 'react-datepicker';

import { useState } from 'react';
import '../styles/datePicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale('es', es);

export default function DatePicker({ customInput }) {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const onChange = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	return (
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
			placeholderText='Check-in - Check-out'
		/>
	);
}
