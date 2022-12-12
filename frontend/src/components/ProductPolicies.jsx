import PolicyItemProperty from './PolicyItemProperty';
import PolicyItemSecurity from './PolicyItemSecurity';
import PolicyItemCancellation from './PolicyItemCancellation';
import styles from '../styles/productPolicies.module.css';

export default function ProductPolicies({
	handleCheckoutChange,
	handleSocialDistanceChange,
	handleSecurityDepositChange,
	handleCancelationChange,
	setIsPartyAllowed,
	setIsSmokingAllowed,
	setHasSmokingDetector,
}) {
	return (
		<div className={styles.productPoliciesContainer}>
			<h2 className={styles.productPolicies}>Políticas del producto</h2>
			<div className={styles.policyContainer}>
				<PolicyItemProperty
					handleCheckoutChange={handleCheckoutChange}
					setIsPartyAllowed={setIsPartyAllowed}
				/>
				<PolicyItemSecurity
					handleSocialDistanceChange={handleSocialDistanceChange}
					setIsSmokingAllowed={setIsSmokingAllowed}
					setHasSmokingDetector={setHasSmokingDetector}
				/>
				<PolicyItemCancellation
					handleSecurityDepositChange={handleSecurityDepositChange}
					handleCancelationChange={handleCancelationChange}
				/>
			</div>
		</div>
	);
}
