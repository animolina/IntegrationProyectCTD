import { useAppContext } from '../context/Store';
import FormField from '../components/FormField';
import styles from '../styles/characteristicItem.module.css';

const labelStyles = styles.label;

const characteristicFieldConfig = {
	fieldType: 'select',
	label: 'Nombre',
	selectData: [],
	selectHandler: () => {
		console.log('Category selected');
	},
	labelStyles,
	placeholder: 'Selecciona una característica',
};
// const iconFieldConfig = {
// 	fieldType: 'input',
// 	id: 'icon',
// 	label: 'Ícono',
// 	type: 'text',
// 	disabled: true,
// 	labelStyles,
// };

export default function CharacteristicItem({ handleSelect }) {
	const store = useAppContext();
	const rawCharacteristics = store.characteristics || [];

	const characteristics = [...rawCharacteristics].map(c => {
		return { id: c.id, content: c.description };
	});

	characteristicFieldConfig.selectData = characteristics;

	return (
		<div className={styles.mainContainer}>
			<div className={styles.formRow}>
				<FormField
					config={characteristicFieldConfig}
					handleSelect={handleSelect}
				/>
				{/* <FormField config={iconFieldConfig} /> */}
			</div>
		</div>
	);
}
