import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

import styles from '../styles/galleryProduct.module.css';

export default function GalleryProduct() {
	/* -------------------------------- thumbnail ------------------------------- */
	const uiElements = [
		{
			name: 'bulletsIndicator',
			order: 9,
			isButton: false,
			appendTo: 'wrapper',
			onInit: (el, pswpInstance) => {
				let prevIndex = -1;
				const thumbnails = [];

				el.style.position = 'absolute';
				el.style.bottom = '20px';
				el.style.left = '10px';
				el.style.right = '0';
				el.style.display = 'grid';
				el.style.gridGap = '10px';
				el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)';
				el.style.gridTemplateRows = 'repeat(auto-fit, 40px)';
				el.style.justifyContent = 'center';

				const dataSource = pswpInstance.options.dataSource;

				for (let i = 0; i < dataSource.length; i++) {
					const slideData = dataSource[i];

					const thumbnail = document.createElement('div');
					thumbnail.style.transition = 'transform 0.15s ease-in';
					thumbnail.style.opacity = '0.6';
					thumbnail.style.cursor = 'pointer';
					thumbnail.onclick = e => {
						const target = e.target;
						const thumbnailEl =
							target.tagName === 'IMG' ? target.parentElement : e.target;
						pswpInstance.goTo(thumbnails.indexOf(thumbnailEl));
					};

					const thumbnailImage = document.createElement('img');
					thumbnailImage.setAttribute('src', slideData.msrc);
					thumbnailImage.style.width = '100%';
					thumbnailImage.style.height = '100%';
					thumbnailImage.style.objectFit = 'cover';

					thumbnail.appendChild(thumbnailImage);

					el.appendChild(thumbnail);

					thumbnails.push(thumbnail);
				}

				pswpInstance.on('change', () => {
					if (prevIndex >= 0) {
						const prevThumbnail = thumbnails[prevIndex];
						prevThumbnail.style.opacity = '0.6';
						prevThumbnail.style.cursor = 'pointer';
						prevThumbnail.style.transform = 'scale(1)';
					}

					const currentThumbnail = thumbnails[pswpInstance.currIndex];
					currentThumbnail.style.opacity = '1';
					currentThumbnail.style.cursor = 'unset';
					currentThumbnail.style.transform = 'scale(1.2)';

					prevIndex = pswpInstance.currIndex;
				});
			},
		},
	];
	/* ----------------------------------- --- ---------------------------------- */

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
		<Gallery
			uiElements={uiElements}
			onBeforeOpen={onBeforeOpen}
			onOpen={onOpen}
		>
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
