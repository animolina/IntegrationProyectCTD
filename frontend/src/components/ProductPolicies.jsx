import PolicyItemProperty from './PolicyItemProperty';
import PolicyItemSecurity from './PolicyItemSecurity';
import PolicyItemCancellation from './PolicyItemCancellation';
import styles from '../styles/productPolicies.module.css';

export default function ProductPolicies() {
	return (
		<div className={styles.productPoliciesContainer}>
			<h2 className={styles.productPolicies}>Políticas del producto</h2>
			<div className={styles.policyContainer}>
				<PolicyItemProperty />
				<PolicyItemSecurity />
				<PolicyItemCancellation />
			</div>
		</div>
	);
}
