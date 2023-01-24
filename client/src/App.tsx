import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ControlPage } from './pages/control/index.control';
import { Homepage } from './pages/homepage/index.homepage';
import { LoginPage } from './pages/login/index.login';
import { Auth } from './utils/api/interceptors.api';

function App() {
  return (
    <>
      <BrowserRouter>
        <Auth />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/controle-estoque" element={<ControlPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
