import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/index.header';
import { EntryPage } from './pages/entry/index.entry';
import { StockPage } from './pages/stock/index.stock';

export function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<EntryPage />} />
        <Route path="estoque" element={<StockPage />} />
      </Routes>
    </>
  );
}
