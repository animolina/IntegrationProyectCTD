import Body from '../components/Body';
import Header from './../components/Header';
import Footer from './../components/Footer';
import SearchBlock from '../components/SearchBlock';

export default function Home() {
	return (
		<div>
			<Header />
			<SearchBlock />
			<Body />
			<Footer />
		</div>
	);
}
