import { useState, useEffect } from 'react';
import plusIcon from '../assets/icons/plusIcon.svg';
import removeIcon from '../assets/icons/removeIcon.svg';
import styles from '../styles/newImage.module.css';
import ImageItem from './ImageItem';

export default function NewImage({ setNewProductImages }) {
	const [newImages, setNewImages] = useState([{ url: '' }]);

	useEffect(() => {
		setNewProductImages(newImages.filter(image => image.url !== ''));
	}, [newImages]);

	const addNewRow = () => {
		const newArray = [...newImages, { url: '' }];
		setNewImages(newArray);
	};

	const removeRow = rowId => {
		newImages.splice(rowId, 1);

		setNewImages([...newImages]);
	};

	const setSelectedImage = (url, rowId) => {
		newImages[rowId].url = url;
		setNewImages([...newImages]);
	};

	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Cargar Imágenes</h2>

			<div className={styles.itemsColumn}>
				{newImages &&
					newImages.length &&
					newImages.map((c, idx) => {
						return (
							<div key={idx} className={styles.rowContainer}>
								<div className={styles.row}>
									<ImageItem
										onChange={e => setSelectedImage(e.target.value, idx)}
									/>
									{idx !== newImages.length - 1 ? (
										<button
											onClick={() => {
												removeRow(idx);
											}}
										>
											<img
												className={styles.iconButton}
												src={removeIcon}
												alt='Eliminar imagen'
											/>
										</button>
									) : (
										<button onClick={addNewRow}>
											<img
												className={styles.iconButton}
												src={plusIcon}
												alt='Adicionar imagen'
											/>
										</button>
									)}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
