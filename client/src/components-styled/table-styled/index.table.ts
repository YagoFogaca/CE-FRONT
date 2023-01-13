import styled from 'styled-components';
import { PropsTable } from '../../utils/types/props.types';

export const TableS = styled.table`
  width: 100%;
  font-size: 1.9rem;
`;

export const TrS = styled.tr<PropsTable>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.8rem;
  background-color: ${props => (props.bg ? '#ddddddf3' : '#f8f4ea')};
  padding: 2rem;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const ThS = styled.th<PropsTable>`
  width: ${props => (props.widthP ? 35 : 20)}%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1.8rem;
  @media (max-width: 767px) {
    display: ${props => (props.display ? 'none' : 'block')};
  }
`;

export const TdS = styled.td<PropsTable>`
  width: ${props => (props.widthP ? 35 : 20)}%;
  font-weight: 300;
  text-align: center;

  @media (max-width: 767px) {
    display: ${props => (props.display ? 'none' : 'block')};
  }
`;
