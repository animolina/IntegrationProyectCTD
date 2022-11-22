import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { useState } from 'react';
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
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const onChange = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		defineStart(start ? start.toLocaleDateString() : null);
		defineEnd(end ? end.toLocaleDateString() : null);
	};

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
			/>
		</div>
	);
}
