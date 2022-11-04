import styles from '../styles/social.module.css';

import iconFacebook from '../assets/icons/iconFacebook.svg';
import iconTwitter from '../assets/icons/iconTwitter.svg';
import iconLinkedin from '../assets/icons/iconLinkedin.svg';
import iconInstagram from '../assets/icons/iconInstagram.svg';

export default function Social({ type }) {
	return (
		<div
			className={type === 'footer' ? styles.footerSocial : styles.burgerSocial}
		>
			<a
				className='socialFacebook'
				href='https://www.facebook.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={iconFacebook} alt='Icon Facebook' />
			</a>
			<a
				className='socialLinkedin'
				href='https://www.linkedin.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={iconLinkedin} alt='Icon LinkedIn'></img>
			</a>
			<a
				className='socialTwitter'
				href='https://www.twitter.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={iconTwitter} alt='Icon Twitter'></img>
			</a>

			<a
				className='socialInstagram'
				href='https://www.instagram.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={iconInstagram} alt='Icon Instagram'></img>
			</a>
		</div>
	);
}
