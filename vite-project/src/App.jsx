import React from 'react';
import MyNavbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyFoodPage from './pages/MyFoodPage';
import AccountPage from './pages/AccountPage';
import MyInformationPage from './pages/MyInformationPage';

function App() {
  return (
    <>
      <MyNavbar loggedIn={true} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-food" element={<MyFoodPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/my-information" element={<MyInformationPage />} />
      </Routes>
    </>
  );
}

export default App;
