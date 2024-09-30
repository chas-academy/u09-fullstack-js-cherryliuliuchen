import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
// import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserManagementPage from './pages/UserManagementPage';
import UserCreatePage from './pages/UserCreatePage';
import MyInformationPage from './pages/MyInformationPage';
import PrivateRoute from './components/PrivateRoute';
import AccessChangePage from './pages/AccessChangePage';
import './styles/global.css';


const App: React.FC = () => { //It is a constant.
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <MyNavbar />
        <div className="container flex-grow-1">
          <Routes>
            {/* Public page */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/access-change" element={<AccessChangePage />} />

            {/* Protected page */}
            <Route
              path="/user-management"
              element={
                <PrivateRoute>
                  <UserManagementPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/create-user"
              element={
                <PrivateRoute>
                  <UserCreatePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-information"
              element={
                <PrivateRoute>
                  <MyInformationPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
