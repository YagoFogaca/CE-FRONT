import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/index.header';
import { EntryPage } from './pages/entry/index.entry';
import { StockPage } from './pages/stock/index.stock';
import { SupplyPage } from './pages/supply/index.supply';

export function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="estoque" element={<StockPage />} />
        <Route path="entry" element={<EntryPage />} />
        <Route path="supply/:id" element={<SupplyPage />} />
      </Routes>
    </>
  );
}
