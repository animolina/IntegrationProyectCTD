import { useState, useEffect } from 'react';
import plusIcon from '../assets/icons/plusIcon.svg';
import removeIcon from '../assets/icons/removeIcon.svg';
import styles from '../styles/newCharacteristic.module.css';
import CharacteristicItem from './CharacteristicItem';

export default function NewCharacteristic({ setNewProductCharacteristics }) {
	const [newCharacteristics, setNewCharacteristics] = useState([{ id: 0 }]);

	useEffect(() => {
		setNewProductCharacteristics(
			newCharacteristics.filter(characteristic => characteristic.id !== 0)
		);
	}, [newCharacteristics]);

	const addNewRow = () => {
		const newArray = [...newCharacteristics, { id: 0 }];
		setNewCharacteristics(newArray);
	};

	const removeRow = rowId => {
		const objWithIdIndex = newCharacteristics.findIndex(
			obj => obj.id === rowId
		);

		if (objWithIdIndex > -1) {
			newCharacteristics.splice(objWithIdIndex, 1);
		}

		setNewCharacteristics([...newCharacteristics]);
	};

	const setSelectedCharacteristic = (selectedId, rowId) => {
		newCharacteristics[rowId].id = selectedId;
		setNewCharacteristics([...newCharacteristics]);
	};

	return (
		<div className={styles.mainContainer}>
			<h2 className={styles.title}>Agregar atributos</h2>

			<div className={styles.itemsColumn}>
				{newCharacteristics &&
					newCharacteristics.map((c, idx) => {
						return (
							<div key={idx} className={styles.rowContainer}>
								<div className={styles.row}>
									<CharacteristicItem
										handleSelect={value =>
											setSelectedCharacteristic(Number(value), idx)
										}
									/>
									{idx !== newCharacteristics.length - 1 ? (
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
										<button onClick={addNewRow}>
											<img
												className={styles.iconButton}
												src={plusIcon}
												alt='Adicionar atributo'
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
