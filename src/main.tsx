import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StoreProvider } from '@app/providers/StoreProvider';
import { ThemeProvider } from '@app/providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<StoreProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StoreProvider>
	// </React.StrictMode>,
);
