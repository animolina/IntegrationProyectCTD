import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/' element={<App />}></Route>
				<Route exact path='login' element={<Login />}></Route>
				<Route exact path='sign-up' element={<SignUp />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
