import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/Product.Listing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          {/* <Route path="/" exact component={ProductListing} /> */}
          <Route path="/product/:productId" element={<ProductDetail />} />
          {/* <Route path="/product/:productId" exact component={ProductDetail} /> */}
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
