import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<AppRouter />
		<Footer />
	</React.StrictMode>
);
