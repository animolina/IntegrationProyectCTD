import { useState } from 'react';
import plusIcon from '../assets/icons/plusIcon.svg';
import removeIcon from '../assets/icons/removeIcon.svg';
import styles from '../styles/newImage.module.css';
import ImageItem from './ImageItem';

export default function NewImage() {
	const [newImages, setNewImages] = useState([{ id: 0 }]);

	const addNewRow = rowId => {
		newImages.forEach((element, index) => {
			if (element.id > rowId) {
				newImages[index].id = element.id + 1;
			}
		});
		const newArray = [...newImages, { id: rowId + 1 }];
		newArray.sort((a, b) => {
			return a.id - b.id;
		});
		setNewImages(newArray);
	};

	const removeRow = rowId => {
		const objWithIdIndex = newImages.findIndex(obj => obj.id === rowId);

		if (objWithIdIndex > -1) {
			newImages.splice(objWithIdIndex, 1);
		}
		newImages.forEach((element, index) => {
			newImages[index].id = element.id - 1;
		});
		setNewImages([...newImages]);
	};

	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Cargar Imágenes</h2>

			<div className={styles.itemsColumn}>
				{newImages &&
					newImages.length &&
					newImages.map(c => {
						return (
							<div key={c.id} className={styles.rowContainer}>
								<div className={styles.row}>
									<ImageItem />
									{c.id === 0 && newImages.length > 1 ? (
										<button
											onClick={() => {
												removeRow(c.id);
											}}
										>
											<img
												className={styles.iconButton}
												src={removeIcon}
												alt='Eliminar imagen'
											/>
										</button>
									) : (
										(newImages.length === 1 || c.id > 0) && (
											<button
												onClick={() => {
													addNewRow(c.id);
												}}
											>
												<img
													className={styles.iconButton}
													src={plusIcon}
													alt='Adicionar imagen'
												/>
											</button>
										)
									)}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
