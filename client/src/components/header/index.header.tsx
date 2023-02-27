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
              <Link to="">
                <TbHome2 />
                Home
              </Link>
            </li>
            <li>
              <Link to="">
                <TbPackage />
                Estoque
              </Link>
            </li>
            <li>
              <Link to="">
                <TbPackgeImport />
                Entradas
              </Link>
            </li>
            <li>
              <Link to="">
                <TbPackgeExport />
                Saidas
              </Link>
            </li>
            <li>
              <Link to="">
                <TbUser />
                Usuarios
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
