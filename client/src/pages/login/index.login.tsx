import * as C from './style.login';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/api';
import { useState } from 'react';

export function LoginPage() {
  const [errorLogin, SetErrorLogin] = useState(false);
  const navigate = useNavigate();
  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const user = {
        nome_usuario: event.currentTarget.nome_usuario.value,
        senha: event.currentTarget.senha.value,
      };
      const loginUser = await api.login(user);
      localStorage.setItem('id_user', loginUser.user.id);
      localStorage.setItem('role', loginUser.user.role);
      localStorage.setItem('token', loginUser.token);
      navigate('/homepage');
    } catch (error) {
      SetErrorLogin(true);
      console.log(error);
    }
  };

  return (
    <C.SectionFormLoginS>
      <C.DivSectionForm>
        <Form className="form-login" onSubmit={login}>
          {errorLogin ? (
            <Form.Text className="text-muted">
              Nome de usuário ou senha incorretos.
            </Form.Text>
          ) : (
            <></>
          )}

          <Form.Group className="mb-3" controlId="nome_usuario">
            <Form.Label>Nome de Usuário</Form.Label>
            <Form.Control type="text" placeholder="nome_usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Shiuuuu..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar-me" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-login">
            Login
          </Button>
        </Form>
      </C.DivSectionForm>
    </C.SectionFormLoginS>
  );
}
