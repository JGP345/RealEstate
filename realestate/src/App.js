import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/NavBar';

import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import BuyingPage from './Pages/BuyingPage';
import FinancingPage from './Pages/FinancingPage';
import SellingPage from './Pages/SellingPage';
import ResourcesPage from './Pages/ResourcesPage';
import VendorsPage from './Pages/VendorsPage';
import AgentsPage from './Pages/AgentsPage';
import ContactPage from './Pages/ContactPage';
import SigninPage from './Pages/SigninPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/buying" element={<BuyingPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/selling" element={<SellingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
