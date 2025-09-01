// Import necessary packages from React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main stylesheet and the root component
import './index.css';
import App from './App';

// Import the function to report web vitals
import reportWebVitals from './reportWebVitals';

// Create a root element for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();