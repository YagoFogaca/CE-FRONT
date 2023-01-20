import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../../utils/api/api';
import { SectionFormLoginS } from './style.login';

export function LoginPage() {
  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      nome_usuario: event.currentTarget.nome_usuario.value,
      senha: event.currentTarget.senha.value,
    };
    const loginUser = await api.login(user);
  };

  return (
    <SectionFormLoginS>
      <div className="div-section-form">
        <Form className="form-login" onSubmit={login}>
          <Form.Group className="mb-3" controlId="nome_usuario">
            <Form.Label>Nome de Usuário</Form.Label>
            <Form.Control type="text" placeholder="nome_usuario" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Shiuuuu..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar-me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </SectionFormLoginS>
  );
}
