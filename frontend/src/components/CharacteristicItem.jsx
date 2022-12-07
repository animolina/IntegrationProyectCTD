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
};
const iconFieldConfig = {
	fieldType: 'input',
	id: 'icon',
	label: 'Ícono',
	type: 'text',
	disabled: true,
	labelStyles,
};

export default function CharacteristicItem() {
	const store = useAppContext();
	const rawCharacteristics = store.characteristics || [];

	const characteristics = [...rawCharacteristics].map(c => {
		return { id: c.id, content: c.description };
	});
	characteristics.unshift({ id: null, content: '' });

	characteristicFieldConfig.selectData = characteristics;

	return (
		<div className={styles.mainContainer}>
			<div className={styles.formRow}>
				<FormField config={characteristicFieldConfig} />
				<FormField config={iconFieldConfig} />
			</div>
		</div>
	);
}
