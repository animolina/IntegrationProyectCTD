import Button from '../components/Button';
import styles from '../styles/auth.module.css';
import { validateEmail } from '../utils';
import users from '../mockedData/auth-users.json';
import FormField from '../components/FormField';
import { useState } from 'react';
import Link from '../components/Link';

const emailFieldConfig = {
	fieldType: 'input',
	id: 'email',
	label: 'Correo electrónico',
	type: 'email',
};

const passwordFieldConfig = {
	fieldType: 'input',
	id: 'password',
	label: 'Contraseña',
	type: 'password',
};

export default function Login() {
	const [emailError, setEmailError] = useState();
	const [passwordError, setPasswordError] = useState();

	const submitLoginForm = () => {
		const email = document.querySelector('#email');
		const password = document.querySelector('#password');

		let isFormValid = true;

		if (!email.value || !email.value.trim()) {
			setEmailError('Este campo es requerido');
			isFormValid = false;
		} else {
			setEmailError(null);
			isFormValid = true;
		}

		if (!password.value || !password.value.trim()) {
			setPasswordError('Este campo es requerido');
			isFormValid = false;
		} else {
			setPasswordError(null);
			isFormValid = true;
		}

		if (!validateEmail(email.value)) {
			setEmailError('Ingresa un email válido');
			isFormValid = false;
		} else {
			setEmailError(null);
			isFormValid = true;
		}

		if (!isFormValid) {
			return;
		}

		const user = users.find(u => u.email === email.value);

		if (user && user.password === password.value) {
			window.location.href = '/';
		} else {
			alert('No user found');
		}
	};

	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.title}>Iniciar sesión</h1>
			<form className={styles.formContainer}>
				<FormField config={emailFieldConfig} error={emailError}></FormField>
				<FormField
					config={passwordFieldConfig}
					error={passwordError}
				></FormField>
			</form>

			<Button handleClick={submitLoginForm} innerText='Ingresar'></Button>

			<span>
				¿Aún no tenés cuenta? <Link path={'sign-up'} text={'Registrate'}></Link>
			</span>
		</div>
	);
}
