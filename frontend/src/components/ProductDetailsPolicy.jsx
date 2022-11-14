import styles from '../styles/productDetailsPolicy.module.css';
import { useAppContext } from '../context/Store';

export default function ProductDetailsPolicy() {
	const store = useAppContext();
	const product = store.product;

	/* console.log(policy); */
	/* console.log(product?.policy); */

	if (product === null) {
		return <div>Loading</div>;
	}
	return (
		<>
			<h2 className={styles.policyTitle}>¿Qué tenés que saber?</h2>
			<div className={styles.productDetailsPolicy}>
				<div className={styles.policyItem}>
					<h3 className={styles.policyItemTitle}>Normas de la casa</h3>
					<ul>
						<li>Checkout: {product?.policy.checkout}</li>
						{console.log(product)}
						{product?.policy.partyAllowed || <li>No se permiten fiestas</li>}
						{product?.policy.smokeAllowed || <li>No se permiten fumar</li>}
					</ul>
				</div>
				<div className={styles.policyItem}>
					<h3 className={styles.policyItemTitle}>Salud y seguridad</h3>
					<ul>
						<li>Distancia social: {product?.policy.socialDistance}</li>
						{product?.policy.smokeDetector && <li>Detector de humo</li>}
						<li>Depósito de seguridad: {product?.policy.securityDeposit}</li>
					</ul>
				</div>
				<div className={styles.policyItem}>
					<h3 className={styles.policyItemTitle}>Política de cancelación</h3>
					<ul>
						<li>{product?.policy.cancellation}</li>
					</ul>
				</div>
			</div>
		</>
	);
}
