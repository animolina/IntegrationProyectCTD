import PolicyItem from './PolicyItem';
import styles from '../styles/productPolicies.module.css';

export default function ProductPolicies() {
	return (
		<div className={styles.productPoliciesContainer}>
			<h2 className={styles.productPolicies}>Políticas del producto</h2>
			<div className={styles.policyContainer}>
				<PolicyItem title={'Normas de la casa'} />
				<PolicyItem title={'Salud y seguridad'} />
				<PolicyItem title={'Política de cancelación'} />
			</div>
		</div>
	);
}
