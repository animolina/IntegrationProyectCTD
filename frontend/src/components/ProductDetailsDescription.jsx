import styles from '../styles/productDetailsDescription.module.css';
import { useAppContext } from '../context/Store';
import Loader from '../utils/Loader';

export default function ProductDetailsDescription() {
	const store = useAppContext();
	const product = store.product;

	if (product === null) {
		return <Loader />;
	}
	return (
		<div className={styles.productDetailsDescription}>
			<h2 className={styles.descriptionTitle}>
				Alójate en el corazón de {product?.city?.state}
			</h2>

			<p className={styles.descriptionText}>
				{product?.description}
				{/* Está situado a solo unas calles de la avenida Alvear, de la avenida
				Quintana, del parque San Martín y del distrito de Recoleta. En las
				inmediaciones también hay varios lugares de interés, como la calle
				Florida, el centro comercial Galerías Pacífico, la zona de Puerto
				Madero, la plaza de Mayo y el palacio Municipal. <br />
				Nuestros clientes dicen que esta parte de Buenos Aires es su favorita,
				según los comentarios independientes. <br /> El Hotel es un hotel
				sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca
				distancia de prestigiosas galerías de arte, teatros, museos y zonas
				comerciales. Además, hay WiFi gratuita. <br /> El establecimiento sirve
				un desayuno variado de 07:00 a 10:30. */}
			</p>
		</div>
	);
}
