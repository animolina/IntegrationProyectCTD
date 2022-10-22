import Button from '../components/Button';
import Input from '../components/Input';
import styles from '../styles/login.module.css';
import { validateEmail } from '../utils';
import axios from 'axios';

// Pending to be defined
const API_URL = '';

export default function Login() {
	const submitLoginForm = () => {
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#password').value;

		if (validateEmail(email)) {
			axios
				.post(`${API_URL}/login`, { email, password })
				.then(response => {
					// Pending to store auth token from response
					console.log(response);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.title}>Iniciar Sesión</h1>
			<form className={styles.formContainer}>
				<div className={styles.formField}>
					<label htmlFor='email' className={styles.label}>
						Correo Electrónico
					</label>
					<Input type={'email'} id={'email'} />
				</div>

				<div className={styles.formField}>
					<label htmlFor='password' className={styles.label}>
						Contraseña
					</label>
					<Input type={'password'} id={'password'} />
				</div>

				<Button handleClick={submitLoginForm} innerText='Ingresar'></Button>

				<span>
					¿Aún no tenés cuenta?{' '}
					<a href='' className={styles.link}>
						Registrate
					</a>
				</span>
			</form>
		</div>
	);
}
