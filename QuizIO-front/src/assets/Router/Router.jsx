import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '../Components/main-page/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
    
  );
};

export default Router;
