import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Root-Element aus index.html abrufen
const rootElement = document.getElementById('root') as HTMLElement;

// React-Root erstellen und App rendern
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);