import { slide as Menu } from 'react-burger-menu';
import Social from './../components/Social';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import styles from '../styles/sidebar.module.css';
import { useState } from 'react';

export default function Sidebar(props) {
	const [isOpen, setIsOpen] = useState(false);

	const handleStateChange = state => {
		setIsOpen(state.isOpen);
	};

	return (
		<Menu
			{...props}
			isOpen={isOpen}
			onStateChange={handleStateChange}
			width={'100%'}
			right
		>
			<div className={styles.square}>
				<h1 className={styles.title}>MENÚ</h1>
			</div>

			<Link
				onClick={() => setIsOpen(false)}
				className='menu-item'
				to='/sign-up'
			>
				Crear cuenta
			</Link>
			<Link onClick={() => setIsOpen(false)} className='menu-item' to='/login'>
				Iniciar sesión
			</Link>

			<footer className={styles.footer}>
				<Social type={'burger'} />
			</footer>
		</Menu>
	);
}
