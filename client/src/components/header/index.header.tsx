import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import * as C from './style.header';

export function Header() {
  return (
    // <Navbar bg="primary" variant="dark">
    //   <Container fluid>
    //     <Navbar.Brand href="#home">
    //       <figure>
    //         <C.ImgS
    //           //   className="d-inline-block align-top"
    //           src="/logo.png"
    //           alt="logo"
    //         />
    //       </figure>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link
    //           href="#home"
    //           style={{
    //             fontSize: '1.9rem',
    //             color: 'white',
    //           }}
    //         >
    //           Home
    //         </Nav.Link>
    //         <Nav.Link
    //           href="#link"
    //           style={{
    //             fontSize: '1.9rem',
    //             color: 'white',
    //           }}
    //         >
    //           Estoque
    //         </Nav.Link>
    // <NavDropdown
    //   title="Controle"
    //   id="basic-nav-dropdown"
    //   style={{
    //     fontSize: '1.9rem',
    //     color: 'white',
    //   }}
    // >
    //   <NavDropdown.Item href="#action/3.1">Saidas</NavDropdown.Item>
    //   <NavDropdown.Item href="#action/3.2">Entradas</NavDropdown.Item>
    //           {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item> */}
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <figure>
            <C.ImgS src="/logo.png" alt="logo" />
          </figure>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end align-items-center">
            <Nav.Link
              href="#home"
              style={{
                fontSize: '1.9rem',
                color: 'white',
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                fontSize: '1.9rem',
                color: 'white',
              }}
            >
              Estoque
            </Nav.Link>
            <NavDropdown
              title="Controle"
              id="basic-nav-dropdown"
              style={{
                fontSize: '1.9rem',
                color: 'white',
              }}
            >
              <NavDropdown.Item href="#action/3.1">Saidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Entradas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <C.HeaderS>
    //   <figure>
    //     <C.ImgS src="/logo.png" alt="logo" />
    //   </figure>
    //   <C.NavS>
    //     <C.UlDesktopS>
    //       <li className="nav-li">
    //         <a href="">Home</a>
    //       </li>
    //       <li className="nav-li">
    //         <a href="">Estoque</a>
    //       </li>
    //       <li className="nav-li">
    //         <a href="">Saidas</a>
    //       </li>
    //       <li className="nav-li">
    //         <a href="">Entradas</a>
    //       </li>
    //     </C.UlDesktopS>
    //     <C.MenuMobile onClick={() => console.log('ndjsvksdv')}>
    //       <div className="line-menu"></div>
    //       <div className="line-menu"></div>
    //       <div className="line-menu"></div>
    //     </C.MenuMobile>
    //     {/* <C.UlMobileS>
    //       <li className="nav-li">
    //         <a href="">Home</a>
    //       </li>
    //       <li className="nav-li">
    //         <a href="">Estoque</a>
    //       </li>
    //       <li className="nav-li">
    //         <a href="">Saidas</a>
    //       </li>
    //       <li className="nav-li">
    //         <a href="">Entradas</a>
    //       </li>
    //     </C.UlMobileS> */}
    //   </C.NavS>
    // </C.HeaderS>
  );
}
