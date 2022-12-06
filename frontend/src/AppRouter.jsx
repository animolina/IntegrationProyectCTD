import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { UserContext } from './context/UserContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Reservation from './pages/Reservation';
import Test from './pages/Test';
import Successful from './pages/Successful';
import MyReservations from './pages/MyReservations';

function AppRouter() {
	const [user, setUser] = useState(null);

	const value = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<UserContext.Provider value={value}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<App />}></Route>
					<Route exact path='login' element={<Login />}></Route>
					<Route exact path='sign-up' element={<SignUp />}></Route>
					<Route
						exact
						path='product-details/:id'
						element={<ProductDetails />}
					></Route>
					<Route
						exact
						path='product-details/:id/reservation'
						element={<Reservation />}
					></Route>
					<Route exact path='success' element={<Successful />}></Route>
					<Route
						exact
						path='success-property'
						element={<Successful type={'property'} />}
					></Route>
					<Route
						exact
						path='/:userId/reservations'
						element={<MyReservations />}
					></Route>
					<Route exact path='test' element={<Test />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default AppRouter;
