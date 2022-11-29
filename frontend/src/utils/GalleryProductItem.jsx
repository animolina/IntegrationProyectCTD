import { Item } from 'react-photoswipe-gallery';

import 'photoswipe/dist/photoswipe.css';
import styles from '../styles/galleryProduct.module.css';

export default function GalleryProductItem({ productImg, hiden, seeMore }) {
	return (
		<Item
			original={productImg}
			thumbnail={productImg}
			width='1600'
			height='1068'
			alt='Photo of mountain lake by Samuel Rohl'
		>
			{({ ref, open }) => (
				<div style={seeMore && { position: 'relative' }}>
					<img
						style={hiden && { display: 'none' }}
						className={styles.imgItem}
						src={productImg}
						ref={ref}
						onClick={open}
						alt='Producto'
					/>
					{seeMore && <span className={styles.seeMore}>Ver más</span>}
				</div>
			)}
		</Item>
	);
}
