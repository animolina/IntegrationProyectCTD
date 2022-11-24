/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../styles/starRating.css';

const StarRating = ({ starScore = 3 }) => {
	const [rating, setRating] = useState(starScore);
	const [hover, setHover] = useState(0);
	return (
		<div className='star-rating'>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type='button'
						key={index}
						className={index <= (hover || rating) ? 'on' : 'off'}
						// onClick={() => setRating(index)}
						// onMouseEnter={() => setHover(index)}
						// onMouseLeave={() => setHover(rating)}
					>
						<span className='star'>&#9733;</span>
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
