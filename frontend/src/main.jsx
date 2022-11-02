import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import AppRouter from './AppRouter';
import Store from './context/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Store>
		<React.StrictMode>
			<AppRouter>
				<App />
			</AppRouter>
		</React.StrictMode>
	</Store>
);
