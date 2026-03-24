import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Styles/index.css';
import App from './App.jsx';
import './java.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext.jsx';
// routing and product-detail logic belong in pages/components, not here

createRoot(document.getElementById('root')).render(
   <CartProvider><App /></CartProvider>
)

