import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ControlPage } from './pages/control/index.control';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/controle-estoque" element={<ControlPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
