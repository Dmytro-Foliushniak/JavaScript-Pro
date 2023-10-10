import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Header from './components/Header'
import Aside from "./components/Aside";
import Main from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <div className="main-conteiner">
      <Aside/>
      <Main/>
      </div>
  </React.StrictMode>
);
