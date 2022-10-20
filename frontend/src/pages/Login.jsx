import Button from '../components/Button';
import Input from '../components/Input';
import styles from '../styles/login.module.css';

export default function Login() {
	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.title}>Iniciar Sesión</h1>
			<div className={styles.formContainer}>
				<div className={styles.formField}>
					<span className={styles.label}>Correo Electrónico</span>
					<Input type={'email'} />
				</div>

				<div className={styles.formField}>
					<span className={styles.label}>Contraseña</span>
					<Input type={'password'} />
				</div>

				<Button innerText='Ingresar'></Button>
			</div>
		</div>
	);
}
