import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/index.header';
import { StockPage } from './pages/stock/index.stock';

export function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="estoque" element={<StockPage />} />
      </Routes>
    </>
  );
}
