import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Containers/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Containers/Footer/Footer';

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

export default App;
