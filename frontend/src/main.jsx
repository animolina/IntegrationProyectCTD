import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />}></Route>
				<Route exact path='login' element={<Login />}></Route>
				<Route exact path='sign-up' element={<SignUp />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
