import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { UserContext } from '../context/userContext';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function AppRouter() {
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<Routes>
				<UserContext.Provider value={{ user, setUser }}>
					<Route exact path='/' element={<App />}></Route>
					<Route exact path='login' element={<Login />}></Route>
					<Route exact path='sign-up' element={<SignUp />}></Route>
				</UserContext.Provider>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
