import { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/basicCalendar.css'; // note: not need to use css modules because is a pre-styled component.

export default function BasicCalendar() {
	const [date, setDate] = useState(new Date());
	console.log(date);

	return (
		<div>
			<div>
				<Calendar
					onChange={setDate}
					value={date}
					selectRange={true}
					formatShortWeekday={(locale, date) =>
						['D', 'L', 'M', 'M', 'J', 'V', 'S'][date.getDay()]
					}
					showNeighboringMonth={false}
					showDoubleView={true}
				/>
			</div>
			{date.length > 0 ? (
				<p>
					{date[0].toDateString()}
					&nbsp;-&nbsp;
					{date[1].toDateString()}
				</p>
			) : (
				<p>{date.toDateString()}</p>
			)}
		</div>
	);
}
