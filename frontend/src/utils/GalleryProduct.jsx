import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

import styles from '../styles/galleryProduct.module.css';

export default function GalleryProduct() {
	const onOpen = pswpInstance => {
		pswpInstance.currSlide.zoomTo(1, { x: 0, y: 0 }, 2000, true);
		// console.log("init")
	};

	const onBeforeOpen = pswpInstance => {
		pswpInstance.on('change', () => {
			// console.log(pswpInstance);
			// console.log('slide was changed');
			// TODO next slide 3sec
		});
	};
	return (
		<Gallery onBeforeOpen={onBeforeOpen} onOpen={onOpen}>
			<div className={styles.itemContainer}>
				<div className={styles.itemPrincipal}>
					<Item
						original='https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg'
						thumbnail='https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg'
						alt='Photo of seashore by Folkert Gorter'
					>
						{({ ref, open }) => (
							<img
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
