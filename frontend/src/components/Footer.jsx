import styles from '../styles/footer.module.css';
import Social from './Social';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerCopyright}>©2022 Digital Booking</div>

			<Social type={'footer'} />
		</footer>
	);
}
