import styled from 'styled-components';
import { PropsBtn } from '../../utils/types/props.types';

export const DivBtn = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Btn = styled.button<PropsBtn>`
  width: 20%;
  border: ${props => (props.borderP ? '4px solid #579bb1' : 'none')};
  border-bottom: none !important;
  padding: 0.6rem;
  cursor: pointer;

  font-size: 1.9rem;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 768px) {
    width: 33.333333%;
    font-size: 1.4rem;
  }
`;
