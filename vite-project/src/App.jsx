import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyFoodPage from './pages/MyFoodPage';
import AccountPage from './pages/AccountPage';
import FoodDetailPage from './pages/FoodDetailPage';
import SearchResultPage from './pages/SearchResultPage';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/myfood">My Food</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/food-detail">Food Detail</Link></li>
          <li><Link to="/search-result">Search Result</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myfood" element={<MyFoodPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/food-detail" element={<FoodDetailPage />} />
        <Route path="/search-result" element={<SearchResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
