import { useState } from 'react';
import logo from '../assets/logo.svg';
import styles from '../styles/header.module.css';
import Button from './Button';

export default function Header() {
	// eslint-disable-next-line no-unused-vars
	const [userLogged, setUserLogged] = useState(true);
	return (
		<header className={styles.header}>
			<div>
				<a href='#'>
					<img className={styles.header__logo} src={logo} alt='' />
				</a>
			</div>

			{userLogged ? (
				<div className={styles.header__logout}>
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
				</div>
			) : (
				<div className={styles.header__btn}>
					<Button type={'outline'} innerText={'Crear cuenta'} />
					<Button type={'outline'} innerText={'Iniciar sesión'} />
				</div>
			)}

			{/* 		<div className={styles.header__logout}>
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
			</div> */}
		</header>
	);
}

// TODO y de caso contrario mostrar el nombre de usuario, un avatar de letras con las iniciales del nombre de usuario y un link de cierre de sesión.
