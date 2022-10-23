import cities from '../mockedData/cities.json';
import styles from '../styles/searchBlock.module.css';
import TypeAheadDropDown from './TypeAheadDropDown';
import Input from './Input';
import Button from './Button';
import locationIcon from '../../src/assets/icons/location-dot-outline.svg';
import { useState } from 'react';

export default function SearchBlock() {
	const [selectedCity, setSelectedCity] = useState();
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

	console.log(selectedCity);

	return (
		<div className={styles.mainContainer}>
			<h1>Buscá ofertas en hoteles, casas y mucho más </h1>
			<form id='searchBlockForm' className={styles.formContainer}>
				<TypeAheadDropDown
					data={cities.map(city => ({
						name: city.name,
						secondaryText: city.country,
					}))}
					renderSuggestion={renderCitySuggestion}
					placeholder='¿A dónde vamos?'
					onSelectSuggestion={onSelectSuggestion}
				/>
				<Input></Input>
				<Button type='basic' innerText='Buscar'></Button>
			</form>
		</div>
	);
}
