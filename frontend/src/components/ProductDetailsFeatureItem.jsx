import iconAir from '../assets/icons/features/air.svg';
import iconCar from '../assets/icons/features/car.svg';
import iconCheckIn from '../assets/icons/features/checkIn.svg';
import iconCreditCard from '../assets/icons/features/creditCard.svg';
import iconSmoke from '../assets/icons/features/smoke.svg';
import iconStar from '../assets/icons/features/star.svg';
import iconTv from '../assets/icons/features/tv.svg';
import iconWifi from '../assets/icons/features/wifi.svg';
import iconSmokingOff from '../assets/icons/features/smokingOff.svg';
import iconPet from '../assets/icons/features/pet.svg';
import iconKitchen from '../assets/icons/features/kitchen.svg';
import iconNoParty from '../assets/icons/features/noParty.svg';
import iconPool from '../assets/icons/features/pool.svg';

import styles from '../styles/productDetailsFeatureItem.module.css';

import { useState, useEffect } from 'react';

const itemFeature = {
	'Apto para mascotas': iconPet,
	'Aire acondicionado': iconAir,
	Pileta: iconPool,
	Cocina: iconKitchen,
	Televisor: iconTv,
	Wifi: iconWifi,
	'Estacionamiento gratuito': iconCar,
	checkIn: iconCheckIn,
	smoke: iconSmoke,
	star: iconStar,
	creditCard: iconCreditCard,
	smokingOff: iconSmokingOff,
	noParty: iconNoParty,
};

function getObjKey(obj, value) {
	return Object.keys(obj).find(key => obj[key] === value);
}

export default function ProductDetailsFeatureItem({ type }) {
	const [text, setText] = useState('');

	useEffect(() => {
		setText(getObjKey(itemFeature, itemFeature[type]));
	}, [text]);

	return (
		<li className={styles.featureItem}>
			<img src={itemFeature[type]} alt='Ícono característica' /> {text}
		</li>
	);
}
