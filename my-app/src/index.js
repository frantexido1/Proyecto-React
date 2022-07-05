import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './Context/CartProvider';
import reducer, {initialState} from './Hooks/CartReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <CartProvider initialState={initialState} reducer={reducer}>
      <App />
    </CartProvider>

  </React.StrictMode>
);
