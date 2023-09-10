import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';
import Header from './Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
