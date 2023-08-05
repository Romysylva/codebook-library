import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom/client';
import App from './App';
import { ScrollToTop } from './Components';
import { FilterProvider, CartProvider } from './context';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < React.StrictMode>
        <Router>
            <CartProvider>
                <FilterProvider>
                    <ScrollToTop/>
                    <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"}/>
                    <App />
                </FilterProvider>
            </CartProvider>
        </Router>
    </React.StrictMode>
);


