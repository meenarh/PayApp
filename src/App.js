import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<div>Product</div>} />
      <Route path="*" element={<div>Not Found</div>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
