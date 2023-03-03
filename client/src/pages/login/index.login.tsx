import { useState } from 'react';
import { Api } from '../../utils/api/api';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.login-style.css';

export function LoginPage() {
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState(false);
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = {
        nome_usuario: e.currentTarget.nome_usuario.value,
        senha: e.currentTarget.senha.value,
      };
      const userLogin = await Api.login(user);

      localStorage.setItem('token', userLogin.token);
      localStorage.setItem('id_user', userLogin.user.id);
      localStorage.setItem('role', userLogin.user.role);
      navigate('/controle/home');
    } catch (error) {
      console.log(error);
      setMsgError(true);
    }
  };

  return (
    <>
      <section className="sectionForm">
        <div className="cardForm">
          <div className="cardInfos">
            <h3>Faça Login</h3>
            <Form.Text
              className={msgError ? 'textError textErrorActive' : 'textError'}
            >
              Nome de usuário ou senha invalido.
            </Form.Text>
          </div>
          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="nome_usuario">
              <Form.Label>Nome usuário</Form.Label>
              <Form.Control
                name="nome_usuario"
                type="text"
                placeholder="geAdmin"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="senha"
                placeholder="********"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="success" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
