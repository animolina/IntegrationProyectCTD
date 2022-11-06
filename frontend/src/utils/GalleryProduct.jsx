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
	/* ----------------------------------- *** ---------------------------------- */

	/* ----------------------------- events example ----------------------------- */
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

	/* ----------------------------------- *** ---------------------------------- */

	/* --------------------------------- rotate --------------------------------- */
	/* const uiElements2 = [
		{
			name: 'custom-rotate-button',
			ariaLabel: 'Rotate',
			order: 9,
			isButton: true,
			html: {
				isCustomSVG: true,
				inner:
					'<path d="M13.887 6.078C14.258 6.234 14.5 6.598 14.5 7V8.517C18.332 8.657 21.258 10.055 23.15 12.367 24.519 14.041 25.289 16.13 25.496 18.409A1 1 0 0123.504 18.591C23.327 16.645 22.68 14.952 21.601 13.633 20.156 11.867 17.831 10.653 14.5 10.517V12A1.002 1.002 0 0112.779 12.693L10.304 10.121A1.002 1.002 0 0110.324 8.713L12.8 6.286A1 1 0 0113.887 6.078ZM7.5 16A1.5 1.5 0 006 17.5V24.5A1.5 1.5 0 007.5 26H17.5A1.5 1.5 0 0019 24.5V17.5A1.5 1.5 0 0017.5 16H7.5Z" id="pswp__icn-rotate"/>',
				outlineID: 'pswp__icn-rotate',
			},
			appendTo: 'bar',
			onClick: (e, el, pswpInstance) => {
				const item = pswpInstance.currSlide.content.element;

				const prevRotateAngle = Number(item.dataset.rotateAngel) || 0;
				const rotateAngle = prevRotateAngle === 270 ? 0 : prevRotateAngle + 90;

				// add slide rotation
				item.style.transform = `${item.style.transform.replace(
					`rotate(-${prevRotateAngle}deg)`,
					''
				)} rotate(-${rotateAngle}deg)`;
				item.dataset.rotateAngel = String(rotateAngle);
			},
			onInit: (el, pswpInstance) => {
				// remove applied rotation on slide change
				// https://photoswipe.com/events/#slide-content-events
				pswpInstance.on('contentRemove', () => {
					const item = pswpInstance.currSlide.content.element;
					item.style.transform = `${item.style.transform.replace(
						`rotate(-${item.dataset.rotateAngel}deg)`,
						''
					)}`;
					delete item.dataset.rotateAngel;
				});
			},
		},
	]; */

	/* ----------------------------------- --- ---------------------------------- */
	return (
		<Gallery
			uiElements={uiElements}
			onBeforeOpen={onBeforeOpen}
			onOpen={onOpen}
		>
			<div className={styles.itemContainer}>
				<div className={styles.itemPrincipal}>
					{/* <Item
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
					</Item> */}

					<Item
						// content={<Content text="It's a React slide #1, nice!" />}
						original='https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg'
						thumbnail='https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg'
						width='1600'
						height='1066'
						alt='Photo of bear by Thomas Lefebvre'
					>
						{({ ref, open }) => (
							<img
								src='https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg'
								ref={ref}
								onClick={open}
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

					{/* 	<Item
						original='https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg'
						thumbnail='https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg'
						width='1600'
						height='1066'
						alt='Photo of bear by Thomas Lefebvre'
					>
						{({ ref, open }) => (
							<img
								src='https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg'
								ref={ref}
								onClick={open}
							/>
						)}
					</Item> */}

					<Item
						original='https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg'
						thumbnail='https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg'
						width='1600'
						height='1066'
						alt='Photo of seashore by Folkert Gorter'
					>
						{({ ref, open }) => (
							<img
								src='https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg'
								ref={ref}
								onClick={open}
							/>
						)}
					</Item>
				</div>
			</div>
		</Gallery>
	);
}
