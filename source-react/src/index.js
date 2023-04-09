import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RouterRM from './RouterRM'
import reportWebVitals from './reportWebVitals';
import About from './About';
import Home from './Home';
import Base from './Base'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootm = ReactDOM.createRoot(document.getElementById('rootmain'));
rootm.render(
    <Base/>

);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      
     <BrowserRouter>
        <Routes>
        
            <Route exact path='/' element={<Home />} />
       
        </Routes>
        
     </BrowserRouter>
  
);*/

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <App src="Son/son.mp3"/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
