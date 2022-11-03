import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

import styles from '../styles/galleryProduct.module.css';

export default function GalleryProduct() {
	const smallItemStyles = {
		/* cursor: 'pointer',
		objectFit: 'cover',
		width: '100%',
		maxHeight: '100%', */
	};
	return (
		<Gallery>
			<div
				className={styles.itemContainer}
				// style={{
				// 	display: 'grid',
				// 	gridTemplateColumns: '240px 171px 171px',
				// 	gridTemplateRows: '114px 114px',
				// 	gridGap: 12,
				// }}
			>
				<div className={styles.itemPrincipal}>
					<Item
						original='https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg'
						thumbnail='https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg'
						// width='5rem'
						// height='5rem'
						alt='Photo of seashore by Folkert Gorter'
					>
						{({ ref, open }) => (
							<img
								style={{ cursor: 'pointer' }}
								ref={ref}
								onClick={open}
								src='https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg'
							/>
						)}
					</Item>
				</div>
				<div className={styles.itemGroup}>
					<Item
						original='https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg'
						thumbnail='https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'
						width='1600'
						height='1068'
						alt='Photo of mountain lake by Samuel Rohl'
					>
						{({ ref, open }) => (
							<img
								style={smallItemStyles}
								src='https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'
								ref={ref}
								onClick={open}
							/>
						)}
					</Item>
					<Item
						original='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg'
						thumbnail='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg'
						width='1600'
						height='1066'
						alt='Photo of fog in the village by Ales Krivec'
					>
						{({ ref, open }) => (
							<img
								style={smallItemStyles}
								src='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg'
								ref={ref}
								onClick={open}
							/>
						)}
					</Item>
					<Item
						original='https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg'
						thumbnail='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
						width='1600'
						height='1066'
						alt='Photo of river sunset by Michael Hull'
					>
						{({ ref, open }) => (
							<img
								style={{ ...smallItemStyles, gridColumnStart: 2 }}
								ref={ref}
								onClick={open}
								src='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
							/>
						)}
					</Item>
					<Item
						original='https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg'
						thumbnail='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
						width='1600'
						height='1066'
						alt='Photo of river sunset by Michael Hull'
					>
						{({ ref, open }) => (
							<img
								style={smallItemStyles}
								ref={ref}
								onClick={open}
								src='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
							/>
						)}
					</Item>
				</div>
			</div>
		</Gallery>
	);
}
