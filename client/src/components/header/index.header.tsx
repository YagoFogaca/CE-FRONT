import { useState } from 'react';
import * as C from './style.header';

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<number>(100);

  return (
    <header>
      <C.NavS>
        <C.ImgS src="/logo.png" alt="logo" />
        <C.DivMenuMobile
          onClick={() => {
            if (isOpenMenu === 100) {
              setIsOpenMenu(0);
            } else {
              setIsOpenMenu(100);
            }
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </C.DivMenuMobile>
        <C.UlS percentage={isOpenMenu}>
          <li className="nav-li">
            <C.ALinkS href="">Home</C.ALinkS>
          </li>
          <li className="nav-li">
            <C.ALinkS href="">Controle</C.ALinkS>
          </li>
          <li className="nav-li">
            <C.ALinkS href="">Login</C.ALinkS>
          </li>
        </C.UlS>
      </C.NavS>
    </header>
  );
}
