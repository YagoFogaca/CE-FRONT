import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/index.header';
import { Auth } from './utils/api/interceptors.api';

export function App() {
  return (
    <BrowserRouter>
      {/* <Auth /> */}
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/controle-estoque" element={<StockPage />} />
          <Route path="/controle-entrada" element={<EntryPage />} />
          <Route path="/supply/:id" element={<SupplyPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
