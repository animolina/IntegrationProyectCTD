import { useParams } from 'react-router-dom';

export default function GoogleMap() {
	const { id } = useParams();

	const location = [
		{ lat: -32.92846732270961, lon: -68.79535647605621 }, // Hermitage Hotel
		{ lat: -34.54937848787841, lon: -58.48582904412557 }, // B&B Hostel
		{ lat: 6.252603017066836, lon: -75.56794742305917 }, // Esperanza Departamentos
		{ lat: -33.535078407312604, lon: -61.12151864792317 }, // Lo de Manuel
		{ lat: 6.2523243609754084, lon: -75.56763469520455 }, // Diplomatic
		{ lat: -34.610380729048494, lon: -58.41293546736347 }, // Gato Negro
		{ lat: -34.666592338620475, lon: -58.46546384614958 }, // Aguila Mora
		{ lat: -33.534863775118204, lon: -61.12117532518601 }, // Huinid Obelisco
	];
	let locationFound = location[id - 1];
	if (!locationFound) {
		locationFound = location[0];
	}
	const locationLat = locationFound.lat;
	const locationLon = locationFound.lon;

	return (
		<iframe
			src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${locationLon}5!3d${locationLat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
			width='100%'
			height='100%'
			style={{ border: 0 }}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
		/>
	);
}
