import { useContext } from 'react';
import isotipo from '../assets/isotipo.svg';
import styles from '../styles/header.module.css';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../utils/Sidebar';
import { UserContext } from '../context/userContext';

export default function Header() {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<header className={styles.header}>
			<div>
				<Link to='/' className={styles.headerLeftContainer} href='#'>
					<img className={styles.headerIsotipo} src={isotipo} alt='isotipo' />
					<span className={styles.headerSlogan}>Sentite como en tu hogar</span>
				</Link>
			</div>

			{user ? (
				<div className={styles.logoutWelcome}>
					<label className={styles.logoutWelcomeInitials}>HT</label>
					<p className={styles.logoutWelcomeText}>
						Hola {user.name},
						<span className={styles.logoutWelcomeTextName}>Horacio Test</span>
					</p>
					<button className={styles.logoutBtn}>✕</button>
				</div>
			) : (
				<div className={styles.headerBtn}>
					<Button
						type={'outline'}
						innerText={'Crear cuenta'}
						handleClick={() => navigate('/sign-up')}
					/>
					<Button
						type={'outline'}
						innerText={'Iniciar sesión'}
						handleClick={() => navigate('/login')}
					/>
				</div>
			)}
			<div className={styles.headerBurger}>
				<Sidebar
					pageWrapId={'page-wrap'}
					outerContainerId={'outer-container'}
				/>
			</div>
		</header>
	);
}
