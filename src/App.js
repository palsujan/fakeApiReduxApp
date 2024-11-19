import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
