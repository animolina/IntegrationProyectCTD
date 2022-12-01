import React, { useState, useEffect } from 'react';
import styles from '../styles/typeAhead.module.css';

export default function TypeAheadDropDown({
	data,
	renderSuggestion,
	placeholder,
	onSelectSuggestion,
}) {
	const [suggestions, setSuggestions] = useState([]); // array of suggestions to populate the autocomplete menu.
	const [suggestionsActive, setSuggestionsActive] = useState(false); // used to toggle the visibility of the autocomplete suggestions.
	const [value, setValue] = useState(''); // autocomplete suggestion that the user has selected.

	const handleChange = e => {
		// monitor for changes to the input field
		const value = e.target.value.toLowerCase();
		setValue(value);
		if (value) {
			const regex = new RegExp(`^${value}`, 'i');
			const filterSuggestions = data.sort().filter(v => regex.test(v.name));
			setSuggestions(filterSuggestions);
			setSuggestionsActive(true);
		} else {
			setSuggestionsActive(false);
		}
	};

	useEffect(() => {
		setSuggestions(data.sort());
	}, [data]);

	const handleClick = suggestion => {
		// to be able to click an autocomplete suggestion and have that suggestion populate the input field.
		setSuggestions([]);

		setValue(
			suggestion.secondaryText
				? `${suggestion.name}, ${suggestion.secondaryText}`
				: suggestion.name
		);
		setSuggestionsActive(false);
		onSelectSuggestion(suggestion);
	};

	const Suggestions = () => {
		// function to render generic suggestion lists.
		return (
			<ul className={styles.suggestions}>
				{suggestions.map((suggestion, index) => {
					return (
						<React.Fragment key={index}>
							<li onClick={() => handleClick(suggestion)}>
								{renderSuggestion
									? renderSuggestion(suggestion)
									: suggestion.name}
							</li>
							{index !== suggestions.length - 1 && <hr />}
						</React.Fragment>
					);
				})}
			</ul>
		);
	};

	return (
		<div className={styles.container}>
			<input
				className={styles.typeAhead}
				// type='text'
				value={value}
				onChange={handleChange}
				onClick={() => setSuggestionsActive(true)}
				placeholder={placeholder}
			/>
			{suggestionsActive && <Suggestions />}
		</div>
	);
}
