import Body from '../components/Body';
import Header from './../components/Header';
import Footer from './../components/Footer';
import SearchBlock from '../components/SearchBlock';
import BasicCalendar from '../components/BasicCalendar';

export default function Home() {
	return (
		<div>
			<Header />
			<SearchBlock />
			<BasicCalendar />
			<Body />
			<Footer />
		</div>
	);
}
