import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Pages/page';

function Root() {
    return <React.StrictMode>
        <App />
    </React.StrictMode>
}

const rootEl = document.querySelector('#root') as HTMLElement;

const reactRoot = ReactDOM.createRoot(rootEl);

reactRoot.render(<Root />);