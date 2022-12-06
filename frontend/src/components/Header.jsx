import isotipo from '../assets/icons/isotipo.svg';
import styles from '../styles/header.module.css';
import Button from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../utils/Sidebar';
import { useUser } from '../hooks/User.hooks';

const loginRoute = '/login';
const signUpRoute = '/sign-up';

export default function Header() {
	const { user, setUser } = useUser();
	const navigate = useNavigate();
	const location = useLocation();

	const getUserInitials = name => {
		const fragments = name.split(' ');
		return fragments[0][0].toUpperCase() + fragments[1][0].toUpperCase();
	};

	const logOut = () => {
		setUser(null);
		sessionStorage.clear(); // delete session storage information.
		/* window.location.reload(); // reloads page after logout. */
		navigate('/');
	};

	const signUpButton = (
		<Button
			type={'outline'}
			innerText={'Crear cuenta'}
			handleClick={() => navigate('/sign-up')}
		/>
	);

	const loginButton = (
		<Button
			type={'outline'}
			innerText={'Iniciar sesión'}
			handleClick={() => navigate('/login')}
		/>
	);

	return (
		<header className={styles.header}>
			<div>
				<Link to='/' className={styles.headerLeftContainer} href='#'>
					<img
						className={styles.headerIsotipo}
						src={isotipo}
						alt='Isotipo de Digital Booking'
					/>
					<span className={styles.headerSlogan}>Sentite como en tu hogar</span>
				</Link>
			</div>

			{user ? (
				<div className={styles.logoutWelcome}>
					<Link
						to={`/${user.id}/reservations`}
						className={styles.myReservations}
					>
						Mis reservas
					</Link>
					<label className={styles.logoutWelcomeInitials}>
						{getUserInitials(`${user.name} ${user.lastName}`)}
					</label>
					<p className={styles.logoutWelcomeText}>
						Hola,{' '}
						<span className={styles.logoutWelcomeTextName}>{user.name}</span>
					</p>
					<button onClick={logOut} className={styles.logoutBtn}>
						✕
					</button>
				</div>
			) : (
				<div className={styles.headerBtn}>
					{location.pathname === loginRoute && signUpButton}
					{location.pathname === signUpRoute && loginButton}
					{location.pathname !== loginRoute &&
						location.pathname !== signUpRoute && (
							<>
								{signUpButton}
								{loginButton}
							</>
						)}
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
