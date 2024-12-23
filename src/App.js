import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';

import ProductListing from './components/ProductListing/ProductListing';
import NotFound from './components/Middleware/NotFound';
import NavBar from "./components/NavBar"
import Todo from "./components/Main"

const App = () => {
  return (
   
    <Router>
       <NavBar/>

      <div className="container mt-4">
        <Routes>
        
          <Route path="/" element={<Todo/>} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
