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
	const [isFormValid, setIsFormValid] = useState();

	const submitLoginForm = () => {
		const email = document.querySelector('#email');
		const password = document.querySelector('#password');

		validateEmptyField('email', email);
		validateEmptyField('password', password);

		if (!isFormValid) {
			return;
		}

		if (!validateEmail(email.value)) {
			setEmailError('Ingresa un email válido');
			setIsFormValid(false);
		} else {
			setEmailError(null);
			setIsFormValid(true);
		}

		const user = users.find(u => u.email === email.value);

		if (user && user.password === password.value) {
			window.location.href = '/';
		} else {
			alert('Por favor vuelva a intentarlo, sus credenciales son inválidas');
		}
	};

	const validateEmptyField = (fieldName, field) => {
		if (!field.value || !field.value.trim()) {
			setFieldError(fieldName, 'Este campo es requerido');
			setIsFormValid(false);
		} else {
			setFieldError(fieldName, null);
			setIsFormValid(true);
		}
	};

	const setFieldError = (fieldName, error) => {
		switch (fieldName) {
			case 'email':
				setEmailError(error);
				break;
			case 'password':
				setPasswordError(error);
				break;
			default:
				break;
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
				<Button handleClick={submitLoginForm} innerText='Ingresar'></Button>

				<span>
					¿Aún no tenés cuenta?{' '}
					<Link path={'sign-up'} text={'Registrate'}></Link>
				</span>
			</form>
		</div>
	);
}
