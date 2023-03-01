import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './index.login-style.css';

export function LoginPage() {
  return (
    <>
      <section className="sectionForm">
        <div className="cardForm">
          <div className="cardInfos">
            <h3>Faça Login</h3>
            {/* className="textError textErrorActive" */}
            <Form.Text className="textError">
              Nome de usuário ou senha invalido.
            </Form.Text>
          </div>
          <Form>
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
