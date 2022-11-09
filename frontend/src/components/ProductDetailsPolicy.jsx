import styles from '../styles/productDetailsPolicy.module.css';
import { useAppContext } from '../context/Store';

export default function ProductDetailsPolicy() {
	const store = useAppContext();
	const policy = store.policy;

	console.log(policy);

	if (policy === null) {
		return (
			<div style={{ backgroundColor: 'red', width: '50rem' }}>Loading</div>
		);
	}
	return (
		<>
			<h2 className={styles.policyTitle}>¿Qué tenés que saber?</h2>
			<div className={styles.productDetailsPolicy}>
				<div className={styles.policyItem}>
					<h3 className={styles.policyItemTitle}>Normas de la casa</h3>
					<ul>
						<li>Checkout: {policy.checkout}</li>
						{policy.partyAllowed || <li>No se permiten fiestas</li>}
						{policy.smokeAllowed || <li>No se permiten fumar</li>}
					</ul>
				</div>
				<div className={styles.policyItem}>
					<h3 className={styles.policyItemTitle}>Salud y seguridad</h3>
					<ul>
						<li>
							Distancia social: {policy.socialDistance}
							{/* Se aplican las pautas de distanciamiento social y otras normas
							relacionadas con el coronavirus */}
						</li>
						{policy.smokeDetector && <li>Detector de humo</li>}
						<li>Depósito de seguridad: {policy.securityDeposit}</li>
					</ul>
				</div>
				<div className={styles.policyItem}>
					<h3 className={styles.policyItemTitle}>Política de cancelación</h3>
					<ul>
						<li>{policy.cancellation}</li>
					</ul>
				</div>
			</div>
		</>
	);
}
