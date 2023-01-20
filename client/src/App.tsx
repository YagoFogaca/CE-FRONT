import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ControlPage } from './pages/control/index.control';
import { LoginPage } from './pages/login/index.login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/controle-estoque" element={<ControlPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
