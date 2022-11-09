import { useAppContext } from '../context/Store';
import styles from '../styles/searchBlock.module.css';
import TypeAheadDropDown from './TypeAheadDropDown';
import DatePicker from './DatePicker';
import Button from './Button';
import locationIcon from '../../src/assets/icons/location-dot-outline.svg';
import { useState } from 'react';
import Input from './Input';

export default function SearchBlock() {
	const [, setSelectedCity] = useState();
	const store = useAppContext();
	const cities = store.cities; // to get array of cities from APIs endpoint.
	const citiesData = cities.map(city => ({
		name: city.state,
		secondaryText: city.country,
	}));

	const renderCitySuggestion = citySuggestion => {
		// function for city suggestions.
		return (
			<div className={styles.citySuggestion}>
				<img src={locationIcon}></img>
				<div className={styles.citySuggestionTextContainer}>
					<span className={styles.primaryText}>{citySuggestion.name}</span>
					<span className={styles.secondaryText}>
						{citySuggestion.secondaryText}
					</span>
				</div>
			</div>
		);
	};

	const onSelectSuggestion = suggestion => {
		// save in a state the selected city from the suggestions list.
		setSelectedCity(suggestion.name);
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.subContainer}>
				<span className={styles.title}>
					Buscá ofertas en hoteles, casas y mucho más{' '}
				</span>
				<form id='searchBlockForm' className={styles.formContainer}>
					<TypeAheadDropDown
						data={citiesData}
						renderSuggestion={renderCitySuggestion}
						placeholder='¿A dónde vamos?'
						onSelectSuggestion={onSelectSuggestion}
					/>
					<DatePicker
						customInput={<Input />}
						placeholder='Check-in - Check-out'
					/>
					<Button type='basic' innerText='Buscar'></Button>
				</form>
			</div>
		</div>
	);
}
