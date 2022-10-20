import logo from '../assets/logo.svg';
import styles from '../styles/header.module.css';
import Button from './Button';

export default function Header() {
	return (
		<header className={styles.header}>
			<div>
				<a href='#'>
					<img className={styles.header__logo} src={logo} alt='' />
				</a>
			</div>
			<div className={styles.header__btn}>
				<Button type={'outline'} innerText={'Crear cuenta'} />
				<Button innerText={'Iniciar sesión'} />
			</div>
		</header>
	);
}
