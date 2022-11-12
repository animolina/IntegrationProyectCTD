export default function GoogleMap() {
	// Palermo
	// const locationLon = -58.477840164229804;
	// const locationLat = -34.579490001715556;

	const locationLat = 6.2523243609754084;
	const locationLon = -75.56763469520455;

	return (
		<iframe
			src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${locationLon}5!3d${locationLat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
			width='100%'
			height='100%'
			style={{ border: 0 }}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
		/>

		/* 	<iframe
			scrolling='no'
			marginHeight='0'
			marginWidth='0'
			src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cosquin%20cosquin+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
			width='90%'
			height='300'
			frameBorder='0'
		>
			<a href='https://www.maps.ie/distance-area-calculator.html'>
				measure acres/hectares on map
			</a>
		</iframe> */
	);
}
