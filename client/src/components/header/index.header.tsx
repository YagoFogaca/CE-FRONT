import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.header.css';

export function Header() {
  const userAdmin = localStorage.getItem('role');
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand={'lg'}
      className="mb-3"
      style={{
        padding: '20px 10px',
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          <img src="/logo.png" alt="logo" className="img-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          style={{
            backgroundColor: '#0d6efd',
            color: '#FFFF',
          }}
        >
          <Offcanvas.Header
            closeButton
            style={{
              justifyContent: 'flex-end',
            }}
          ></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{
                fontSize: '19px',
              }}
            >
              <Link className="nav-link" to="/homepage">
                Home
              </Link>
              <Link className="nav-link" to="/controle-estoque">
                Estoque
              </Link>
              <Link className="nav-link" to="/controle-estoque">
                Saidas
              </Link>
              <Link className="nav-link" to="/controle-entrada">
                Entradas
              </Link>

              <NavDropdown
                title="Usuários"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                {userAdmin ? (
                  <NavDropdown.Item
                    style={{
                      fontSize: '15px',
                    }}
                  >
                    <Link className="dropdown-item" to="#">
                      Ver todos usuarios
                    </Link>
                  </NavDropdown.Item>
                ) : (
                  <></>
                )}

                <NavDropdown.Divider />
                <NavDropdown.Item
                  style={{
                    fontSize: '15px',
                  }}
                >
                  <Link className="dropdown-item" to="#">
                    Editar perfil
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link" to="/controle-estoque">
                Sair
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
