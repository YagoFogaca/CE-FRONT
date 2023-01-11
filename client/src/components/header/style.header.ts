import styled from 'styled-components';

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem;
  background-color: #0d4c92;
`;

export const ImgS = styled.img`
  width: 100px;
  @media (max-width: 375px) {
    width: 75px;
  }
`;

export const NavS = styled.nav`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const UlDesktopS = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 935px) {
    display: none;
  }

  .nav-li {
    font-size: 2.6rem;
    list-style: none;
  }

  .nav-li a {
    color: #fefefe;
    text-decoration: none;
  }
`;

export const MenuMobile = styled.button`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  background-color: transparent;
  border: none;

  @media (min-width: 230px) and (max-width: 935px) {
    display: flex;
  }

  div {
    width: 40px;
    height: 2px;
    background-color: #fefefe;
  }
`;

export const UlMobileS = styled.ul`
  width: 100%;
  display: none;
  justify-content: space-evenly;
  @media (min-width: 935px) {
    display: flex;
  }

  .nav-li {
    font-size: 2.6rem;
    list-style: none;
  }

  .nav-li a {
    color: #fefefe;
    text-decoration: none;
  }
`;
