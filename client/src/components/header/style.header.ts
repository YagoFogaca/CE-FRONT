import styled from 'styled-components';
import { PorpsMenuMobile } from '../../utils/types/props.types';

export const HeaderS = styled.header<PorpsMenuMobile>`
  /* min-height: 120px; */
  height: ${props => (props.open ? '35%' : '120px')};
  transition: height 0.3s ease-in;
`;

export const NavS = styled.nav<PorpsMenuMobile>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: system-ui;
  background-color: #0d4c92;
  height: ${props => (props.open ? '100%' : '100px')};
  padding: 1rem 6rem;
  box-sizing: content-box;

  @media (max-width: 999px) {
    & {
      padding: 1rem 4rem;
    }
  }
  @media (max-width: 699px) {
    & {
      padding: 1rem 1.2rem;
    }
  }
`;

export const ImgS = styled.img`
  width: 100px;
  @media (max-width: 375px) {
    width: 75px;
  }
`;

export const UlS = styled.ul<PorpsMenuMobile>`
  list-style: none;
  display: flex;
  z-index: 10;

  li {
    letter-spacing: 3px;
    margin-left: 3.2rem;
  }

  @media (max-width: 999px) {
    & {
      display: ${props => (props.open ? 'flex' : 'none')};
      height: 50%;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
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

export const DivMenuMobile = styled.div<PorpsMenuMobile>`
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
      position: ${props => (props.open ? 'absolute' : 'unset')};
      right: 5px;
      top: 5px;
    }
  }
`;
