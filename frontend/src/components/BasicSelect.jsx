import styles from '../styles/basicSelect.module.css';

export default function BasicSelect({ data }) {
	return (
		<div className={styles.selectContainer}>
			<select className={styles.select}>
				{data.map(item => (
					<option className={styles.option} key={item?.id} value={item?.id}>
						{item?.content}
					</option>
				))}
			</select>
		</div>
	);
}
