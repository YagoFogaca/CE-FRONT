import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/index.header';
import { HomePage } from './pages/home/index.home';
import { StockPage } from './pages/stock/index.stock';
import { EntryPage } from './pages/entry/index.entry';
import { SupplyPage } from './pages/supply/index.supply';

export function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="estoque" element={<StockPage />} />
        <Route path="entry" element={<EntryPage />} />
        <Route path="supply/:id" element={<SupplyPage />} />
      </Routes>
    </>
  );
}
