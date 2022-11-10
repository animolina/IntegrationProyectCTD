import { Gallery, Item } from 'react-photoswipe-gallery';

import 'photoswipe/dist/photoswipe.css';
import styles from '../styles/galleryProduct.module.css';

import { useAppContext } from '../context/Store';

export default function GalleryProduct() {
	const store = useAppContext();
	const product = store.product;

	if (product === null) {
		return <div>Loading</div>;
	}

	console.log(product?.images);

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

	return (
		<Gallery
			uiElements={uiElements}
			onBeforeOpen={onBeforeOpen}
			onOpen={onOpen}
		>
			<div className={styles.itemContainer}>
				<div className={styles.itemPrincipal}>
					<Item
						original={product?.images[5]?.url}
						thumbnail={product?.images[5]?.url}
						width='1600'
						height='1066'
						alt='Photo of bear by Thomas Lefebvre'
					>
						{({ ref, open }) => (
							<img src={product?.images[5]?.url} ref={ref} onClick={open} />
						)}
					</Item>
				</div>
				<div className={styles.itemGroup}>
					<Item
						original={product?.images[3]?.url}
						thumbnail={product?.images[3]?.url}
						width='1600'
						height='1068'
						alt='Photo of mountain lake by Samuel Rohl'
					>
						{({ ref, open }) => (
							<img
								className={styles.imgItem}
								src={product?.images[3]?.url}
								ref={ref}
								onClick={open}
							/>
						)}
					</Item>
					<Item
						original={product?.images[4]?.url}
						thumbnail={product?.images[4]?.url}
						width='1600'
						height='1066'
						alt='Photo of fog in the village by Ales Krivec'
					>
						{({ ref, open }) => (
							<img
								className={styles.imgItem}
								src={product?.images[4]?.url}
								ref={ref}
								onClick={open}
							/>
						)}
					</Item>
					<Item
						original={product?.images[1]?.url}
						thumbnail={product?.images[1]?.url}
						width='1600'
						height='1066'
						alt='Photo of river sunset by Michael Hull'
					>
						{({ ref, open }) => (
							<img
								className={styles.imgItem}
								ref={ref}
								onClick={open}
								src={product?.images[1]?.url}
							/>
						)}
					</Item>

					<Item
						original={product?.images[0]?.url}
						thumbnail={product?.images[0]?.url}
						width='1600'
						height='1066'
						alt='Photo of seashore by Folkert Gorter'
					>
						{({ ref, open }) => (
							<div style={{ position: 'relative' }}>
								<img
									src={product?.images[0]?.url}
									ref={ref}
									onClick={open}
									className={styles.imgItem}
								/>
								<span className={styles.seeMore}>Ver más</span>
							</div>
						)}
					</Item>
				</div>
			</div>
		</Gallery>
	);
}
