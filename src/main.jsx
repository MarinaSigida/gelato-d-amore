import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import store from './store';

import './index.css';

register(); // register swiper

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Toaster position="top-right" richColors />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
