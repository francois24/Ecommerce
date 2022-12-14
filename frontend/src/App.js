import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Billing from './components/Billing';
import Payment from './components/Payment';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/cart' exact element={<Cart/>} />
        <Route path='/billing' exact element={<Billing/>} />
        <Route path='/payment' exact element={<Payment/>} />
      </Routes>
  </Router>

    </div>
  );
}

export default App;
