import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Logement from '../pages/Logement';
import About from '../pages/About'
import PageNotFound from '../pages/PageNotFound';


function Router() {
    return (
        <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:linkId" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="/pageNotFound" element={<PageNotFound />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    )
}

export default Router