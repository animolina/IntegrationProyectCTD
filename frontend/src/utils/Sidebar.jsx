import { slide as Menu } from 'react-burger-menu';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import styles from '../styles/sidebar.module.css';

export default function Sidebar() {
	return (
		<Menu width={'100%'} right>
			<div className={styles.square}>
				<h1 className={styles.title}>MENÚ</h1>
			</div>

			{/* TODO quitar menú al hacer click a una opción 
				<Link className='menu-item' to='/sign-up'>
				Crear cuenta
			</Link>
			<Link className='menu-item' to='/login'>
				Iniciar sesión
			</Link> */}

			<a className='menu-item' href='/sign-up'>
				Crear cuenta
			</a>
			<a className='menu-item' href='/login'>
				Iniciar sesión
			</a>
		</Menu>
	);
}
