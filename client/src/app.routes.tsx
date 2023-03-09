import { Routes, Route } from 'react-router-dom';
import { SupplyContextProvider } from './context/supply.context';
import { Header } from './components/header/index.header';
import { HomePage } from './pages/home/index.home';
import { StockPage } from './pages/stock/index.stock';
import { EntryPage } from './pages/entry/index.entry';
import { SupplyPage } from './pages/supply/index.supply';
import { ExitPage } from './pages/exit/index.exit';

export function AppRoutes() {
  return (
    <SupplyContextProvider>
      <Header />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="estoque" element={<StockPage />} />
        <Route path="entry" element={<EntryPage />} />
        <Route path="exit" element={<ExitPage />} />
        <Route path="supply/:id" element={<SupplyPage />} />
      </Routes>
    </SupplyContextProvider>
  );
}
