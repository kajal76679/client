import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import ProductList from './components/productList';
import '../src/style.css';

function App() {
  const sampleProducts = [
    { id: 1, name: 'tie', price: 20, image: '/images/tie.jpeg' },
    { id: 2, name: 'tablet', price: 30, image: '/images/tablet.jpeg' },
    { id: 3, name: 'backmassager', price: 40, image: '/images/backmassager.jpeg' },
    { id: 4, name: 'backpack', price: 50, image: '/images/backpack.jpeg' },
    { id: 5, name: 'blender', price: 60, image: '/images/blender.jpeg' },
    { id: 6, name: 'sweater', price: 70, image: '/images/sweater.jpeg' },
    { id: 7, name: 'television', price: 80, image: '/images/television.jpeg' },
    { id: 8, name: 'Printer', price: 90, image: '/images/printer.jpeg' },
    { id: 9, name: 'jacket', price: 100, image: '/images/jacket.jpeg' },
    { id: 10, name: 'headphone', price: 110, image: '/images/headphones.jpeg' },
    { id: 11, name: 'guitar', price: 120, image: '/images/guitar.jpeg' },
    { id: 12, name: 'running shoes', price: 130, image: '/images/runningshoes.jpeg' },
    { id: 13, name: 'smartphone', price: 150, image: '/images/smartphone.jpeg' },
    { id: 14, name: 'toaster', price: 160, image: '/images/toaster.jpeg' },
    { id: 15, name: 'umbrella', price: 170, image: '/images/umbrella.jpeg' },
    { id: 16, name: 'vacuumcleaner', price: 180, image: '/images/vacuumcleaner.jpeg' },
    { id: 17, name: 'watch', price: 190, image: '/images/watch.jpeg' },
    { id: 18, name: 'desklamp', price: 200, image: '/images/desklamp.jpeg' },
    { id: 19, name: 'computer', price: 90, image: '/images/computer.jpeg' },
    { id: 20, name: 'coffeemaker', price: 90, image: '/images/coffeemaker.jpeg' },
    
  ];

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">User</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<ProductList products={sampleProducts} />}
          />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
