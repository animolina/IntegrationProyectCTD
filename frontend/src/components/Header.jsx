import { useState } from 'react';
import isotipo from '../assets/isotipo.svg';
import styles from '../styles/header.module.css';
import Button from './Button';
import burger from '../assets/icons/burger.svg';

export default function Header() {
	// eslint-disable-next-line no-unused-vars
	const [userLogged, setUserLogged] = useState(false);
	return (
		<header className={styles.header}>
			<div>
				<a className={styles.header__left__container} href='#'>
					<img className={styles.header__isotipo} src={isotipo} alt='isotipo' />
					<span className={styles.header__slogan}>
						Sentite como en tu hogar
					</span>
				</a>
			</div>

			{userLogged ? (
				<div className={styles.logout__welcome}>
					<label className={styles.logout__welcome__initials}>HT</label>
					<p className={styles.logout__welcome__text}>
						Hola,
						<span className={styles.logout__welcome__text__name}>
							Horacio Test
						</span>
					</p>
					<button className={styles.logout__btn}>✕</button>
				</div>
			) : (
				<div className={styles.header__btn}>
					<Button type={'outline'} innerText={'Crear cuenta'} />
					<Button type={'outline'} innerText={'Iniciar sesión'} />
				</div>
			)}
			<div className={styles.header__burger}>
				<img src={burger} alt='burger menu' />
			</div>
		</header>
	);
}
