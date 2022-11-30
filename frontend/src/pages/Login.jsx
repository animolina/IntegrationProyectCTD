import Button from '../components/Button';
import styles from '../styles/auth.module.css';
import { validateEmail } from '../utils';
import FormField from '../components/FormField';
import { useContext, useState, useEffect } from 'react';
import linkStyles from '../styles/link.module.css';
import { UserContext } from '../context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartelWarning from '../components/CartelWarning';
import { AuthService } from '../services/authService';
import { CacheItems, CacheService } from '../services/cacheService';

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
	const [showWarningSign, setShowWarningSign] = useState();
	const [showWarningSignText, setShowWarningSignText] = useState();
	const { state } = useLocation();

	const { setUser } = useContext(UserContext);

	const navigate = useNavigate();

	useEffect(() => {
		if (state) {
			setShowWarningSign(state.showWarning);
			setShowWarningSignText(state.warningText);
		}
	});

	let isFormValid = false;

	const submitLoginForm = async () => {
		const email = document.querySelector('#email');
		const password = document.querySelector('#password');

		validateEmptyField('email', email);
		validateEmptyField('password', password);

		if (!isFormValid) {
			return;
		}

		if (!validateEmail(email.value)) {
			setEmailError('Ingresa un email válido');
			isFormValid = false;
		} else {
			setEmailError(null);
			isFormValid = true;
		}

		const result = await AuthService.signIn(email.value, password.value);

		if (result && result.jwt && result.user) {
			CacheService.setJwt(result.jwt);
			const user = result.user;
			setUser(user);
			CacheService.setItem(
				CacheItems.UserName,
				`${user.name} ${user.lastName}`
			);
			CacheService.setItem(CacheItems.UserEmail, user.email);
			navigate('/');
		} else if (result.status === 403) {
			setShowWarningSign(true);
			setShowWarningSignText('Credenciales erroneas');

			setTimeout(() => {
				setShowWarningSign(false);
				setShowWarningSignText(null);
			}, 2000);
		}
	};

	const validateEmptyField = (fieldName, field) => {
		if (!field.value || !field.value.trim()) {
			setFieldError(fieldName, 'Este campo es requerido');
			isFormValid = false;
		} else {
			setFieldError(fieldName, null);
			isFormValid = true;
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
			{showWarningSign && <CartelWarning text={showWarningSignText} />}
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
					<Link to={'/sign-up'} className={linkStyles.link}>
						Registrate
					</Link>
				</span>
			</form>
		</div>
	);
}
