import {
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from 'react-share';

import styles from '../styles/shareProduct.module.css';

export default function ShareProduct() {
	const shareUrl = 'https://www.google.com/';

	return (
		<div className={styles.shareProduct}>
			<div className='shareText'>Compartir</div>
			<WhatsappShareButton
				url={shareUrl}
				title={'this is a title'}
				separator={'this is a separator'}
			>
				<WhatsappIcon size={40} round={true} />
			</WhatsappShareButton>
			<FacebookShareButton
				url={shareUrl}
				quote={'this is a qupte'}
				hashtag={'this is a hashtag'}
			>
				<FacebookIcon iconFillColor={'white'} size={40} round={true} />
			</FacebookShareButton>
			<LinkedinShareButton
				url={shareUrl}
				title={'this is a title'}
				source={'this is a source'}
			>
				<LinkedinIcon size={40} round={true} />
			</LinkedinShareButton>
		</div>
	);
}
