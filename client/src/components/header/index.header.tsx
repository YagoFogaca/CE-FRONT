import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TbHome2,
  TbPackgeImport,
  TbPackgeExport,
  TbPackage,
  TbUser,
} from 'react-icons/tb';
import './index.header-style.css';

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const configMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <aside className={isOpenMenu ? 'menuOpen' : 'closeMenu'}>
        <button className="menuOpener" onClick={configMenu}>
          <div
            className={isOpenMenu ? 'menuLine menuLineOpen' : 'menuLine'}
          ></div>
          <div
            className={isOpenMenu ? 'menuLine menuLineOpen' : 'menuLine'}
          ></div>
          <div
            className={isOpenMenu ? 'menuLine menuLineOpen' : 'menuLine'}
          ></div>
        </button>
        <nav>
          <ul>
            <li>
              <Link to="home">
                <TbHome2 />
                <span
                  className={isOpenMenu ? 'textLink textLinkOpen' : 'textLink'}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="estoque">
                <TbPackage />
                <span
                  className={isOpenMenu ? 'textLink textLinkOpen' : 'textLink'}
                >
                  Estoque
                </span>
              </Link>
            </li>
            <li>
              <Link to="entry">
                <TbPackgeImport />
                <span
                  className={isOpenMenu ? 'textLink textLinkOpen' : 'textLink'}
                >
                  Entradas
                </span>
              </Link>
            </li>
            <li>
              <Link to="exit">
                <TbPackgeExport />
                <span
                  className={isOpenMenu ? 'textLink textLinkOpen' : 'textLink'}
                >
                  Saidas
                </span>
              </Link>
            </li>
            {/* <li>
              <Link to="">
                <TbUser />
                <span
                  className={isOpenMenu ? 'textLink textLinkOpen' : 'textLink'}
                >
                  Usuarios
                </span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </aside>
    </>
  );
}
