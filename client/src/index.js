import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorProvider from './providers/DoctorProvider';
import UserProvider from './providers/UserProvider';
import AppointmentProvider from './providers/AppointmentProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DoctorProvider>
        <UserProvider>
          <AppointmentProvider>
            <App />
          </AppointmentProvider>
        </UserProvider>
      </DoctorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();