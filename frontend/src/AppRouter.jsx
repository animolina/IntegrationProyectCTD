import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { UserContext } from './context/userContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function AppRouter() {
	const [user, setUser] = useState(null);

	const value = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<UserContext.Provider value={value}>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<App />}></Route>
					<Route exact path='login' element={<Login />}></Route>
					<Route exact path='sign-up' element={<SignUp />}></Route>
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default AppRouter;
