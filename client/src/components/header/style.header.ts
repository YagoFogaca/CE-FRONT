import styled from 'styled-components';

export const NavS = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: system-ui;
  background-color: #0d4c92;
  height: 12vh;
  padding: 0 6rem;
  box-sizing: border-box;
`;

export const ImgS = styled.img`
  width: 100px;
  @media (max-width: 375px) {
    width: 75px;
  }
`;
// ATENÇÃO A ESSA PROPRIEDADE *** PASSAR PARA UTILS
type PorpsUlS = {
  percentage?: number;
};

export const UlS = styled.ul<PorpsUlS>`
  list-style: none;
  display: flex;

  li {
    letter-spacing: 3px;
    margin-left: 3.2rem;
  }

  @media (max-width: 999px) {
    & {
      position: absolute;
      top: 12vh;
      right: 0;
      width: 50vw;
      height: 88vh;
      background-color: #0d4c92;

      flex-direction: column;
      align-items: center;
      gap: 3rem;

      transform: translateX(${props => props.percentage || 0}%);
      transition: transform 0.3s ease-in;
    }
    li {
      margin-left: 0px;
    }
  }
`;

export const ALinkS = styled.a`
  color: #fefefe;
  font-size: 2.1rem;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export const DivMenuMobile = styled.div`
  display: none;
  cursor: pointer;
  div {
    width: 3.2rem;
    height: 2px;
    background-color: #fefefe;
    margin: 8px;
  }

  @media (max-width: 999px) {
    & {
      display: block;
    }
  }
`;
