import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

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
		/>
	);
}
