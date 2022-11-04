import styles from '../styles/productDetailsPolitic.module.css';

export default function ProductDetailsPolitic() {
	return (
		<>
			<h2 className={styles.politicTitle}>¿Qué tenés que saber?</h2>
			<div className={styles.productDetailsPolitic}>
				<div className={styles.politicItem}>
					<h3 className={styles.politicItemTitle}>Normas de la casa</h3>
					<ul>
						<li>Check-out: 10:00</li>
						<li>No se permiten fiestas</li>
						<li>No fumar</li>
					</ul>
				</div>
				<div className={styles.politicItem}>
					<h3 className={styles.politicItemTitle}>Salud y seguridad</h3>
					<ul>
						<li>
							Se aplican las pautas de distanciamiento social y otras normas
							relacionadas con el coronavirus
						</li>
						<li>Detector de humo</li>
						<li>Depósito de seguridad</li>
					</ul>
				</div>
				<div className={styles.politicItem}>
					<h3 className={styles.politicItemTitle}>Política de cancelación</h3>
					<ul>
						<li>
							Agregá las fechas de tu viaje para obtener los detalles de
							cancelación de esta estadía.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
