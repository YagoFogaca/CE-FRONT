import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { LoginPage } from './pages/login/index.login';
import { Auth } from './utils/api/interceptors.api';

export function App() {
  return (
    <BrowserRouter>
      <Auth />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/controle/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
