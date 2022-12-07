import { useState } from 'react';
import plusIcon from '../assets/icons/plusIcon.svg';
import removeIcon from '../assets/icons/removeIcon.svg';
import styles from '../styles/newCharacteristic.module.css';
import CharacteristicItem from './CharacteristicItem';

export default function NewCharacteristic() {
	const [newCharacteristics, setNewCharacteristics] = useState([{ id: 0 }]);

	const addNewRow = rowId => {
		newCharacteristics.forEach((element, index) => {
			if (element.id > rowId) {
				newCharacteristics[index].id = element.id + 1;
			}
		});
		const newArray = [...newCharacteristics, { id: rowId + 1 }];
		newArray.sort((a, b) => {
			return a.id - b.id;
		});
		setNewCharacteristics(newArray);
	};

	const removeRow = rowId => {
		const objWithIdIndex = newCharacteristics.findIndex(
			obj => obj.id === rowId
		);

		if (objWithIdIndex > -1) {
			newCharacteristics.splice(objWithIdIndex, 1);
		}
		newCharacteristics.forEach((element, index) => {
			newCharacteristics[index].id = element.id - 1;
		});
		setNewCharacteristics([...newCharacteristics]);
	};

	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Agregar atributos</h2>

			<div className={styles.itemsColumn}>
				{newCharacteristics &&
					newCharacteristics.length &&
					newCharacteristics.map(c => {
						return (
							<div key={c.id} className={styles.rowContainer}>
								<div className={styles.row}>
									<CharacteristicItem />
									{c.id === 0 && newCharacteristics.length > 1 ? (
										<button
											onClick={() => {
												removeRow(c.id);
											}}
										>
											<img
												className={styles.iconButton}
												src={removeIcon}
												alt='Eliminar atributo'
											/>
										</button>
									) : (
										(newCharacteristics.length === 1 || c.id > 0) && (
											<button
												onClick={() => {
													addNewRow(c.id);
												}}
											>
												<img
													className={styles.iconButton}
													src={plusIcon}
													alt='Adicionar atributo'
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
