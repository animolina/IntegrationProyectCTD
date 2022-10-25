import { useState } from 'react';
import isotipo from '../assets/isotipo.svg';
import styles from '../styles/header.module.css';
import Button from './Button';
import burger from '../assets/icons/burger.svg';

export default function Header() {
	// eslint-disable-next-line no-unused-vars
	const [userLogged, setUserLogged] = useState(false);

	const navigateToPage = page => {
		window.location.href = page;
	};

	return (
		<header className={styles.header}>
			<div>
				<a className={styles.headerLeftContainer} href='#'>
					<img className={styles.headerIsotipo} src={isotipo} alt='isotipo' />
					<span className={styles.headerSlogan}>Sentite como en tu hogar</span>
				</a>
			</div>

			{userLogged ? (
				<div className={styles.logoutWelcome}>
					<label className={styles.logoutWelcomeInitials}>HT</label>
					<p className={styles.logoutWelcomeText}>
						Hola,
						<span className={styles.logoutWelcomeTextName}>Horacio Test</span>
					</p>
					<button className={styles.logoutBtn}>✕</button>
				</div>
			) : (
				<div className={styles.headerBtn}>
					<Button
						type={'outline'}
						innerText={'Crear cuenta'}
						handleClick={event => navigateToPage('/sign-up')}
					/>
					<Button
						type={'outline'}
						innerText={'Iniciar sesión'}
						handleClick={event => navigateToPage('/login')}
					/>
				</div>
			)}
			<div className={styles.headerBurger}>
				<img src={burger} alt='burger menu' />
			</div>
		</header>
	);
}
