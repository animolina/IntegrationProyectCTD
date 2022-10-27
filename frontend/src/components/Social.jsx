import styles from '../styles/social.module.css';

import iconFacebook from '../assets/icons/iconFacebook.svg';
import iconTwitter from '../assets/icons/iconTwitter.svg';
import iconLinkedin from '../assets/icons/iconLinkedin.svg';
import iconInstagram from '../assets/icons/iconInstagram.svg';

export default function Social() {
	return (
		<div className={styles.footerSocial}>
			<a
				className='menu-item'
				href='https://www.facebook.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={iconFacebook} alt='' />
			</a>
			<a
				className='socialLinkedin'
				href='https://www.linkedin.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={iconLinkedin}></img>
			</a>
			<a
				className='socialTwitter'
				href='https://www.twitter.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={iconTwitter}></img>
			</a>

			<a
				className='socialInstagram'
				href='https://www.instagram.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img className='' src={iconInstagram}></img>
			</a>
		</div>
	);
}
