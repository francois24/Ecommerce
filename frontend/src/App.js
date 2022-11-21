import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/home' exact element={<Home/>} />
        <Route path='/cart' exact element={<Cart/>} />
      </Routes>
  </Router>

    </div>
  );
}

export default App;
