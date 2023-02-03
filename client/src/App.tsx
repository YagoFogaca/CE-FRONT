import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StockPage } from './pages/stock/index.stock';
import { Homepage } from './pages/homepage/index.homepage';
import { LoginPage } from './pages/login/index.login';
import { SupplyPage } from './pages/supply/index.supply';
import { Auth } from './utils/api/interceptors.api';

function App() {
  return (
    <>
      <BrowserRouter>
        <Auth />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/controle-estoque" element={<StockPage />} />
          <Route path="/supply/:id" element={<SupplyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
