import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Containers/Header/Header';
import Home from './Pages/Home/Home';

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default App;
