import styles from '../styles/footer.module.css';
import iconFacebook from '../assets/icons/icon facebook.svg';
import iconTwitter from '../assets/icons/icon tweet.svg';
import iconLinkedin from '../assets/icons/icon linkedin.svg';
import iconInstagram from '../assets/icons/icon ig.svg';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerCopyright}>©2022 Digital Booking</div>

			<div className={styles.footerSocial}>
				<a
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
		</footer>
	);
}
