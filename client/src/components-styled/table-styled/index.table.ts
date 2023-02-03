import styled from 'styled-components';
import { PropsTable } from '../../utils/types/props.types';

export const TableS = styled.table`
  width: 100%;
  border-top: 3px solid #cbcbcb;
  border-bottom: 3px solid #cbcbcb;
  border-radius: 1%;
`;

export const TrS = styled.tr<PropsTable>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 19px;
  background-color: ${props => (props.bg ? '#ddddddf3' : '#f8f4ea')};
  padding: 20px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ThS = styled.th<PropsTable>`
  width: ${props => (props.widthP ? 35 : 20)}%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 18px;
  @media (max-width: 767px) {
    display: ${props => (props.displayP ? 'none' : 'block')};
  }
`;

export const TdS = styled.td<PropsTable>`
  width: ${props => (props.widthP ? 35 : 20)}%;
  font-weight: 400;
  font-size: 17px;
  text-align: center;

  @media (max-width: 767px) {
    display: ${props => (props.displayP ? 'none' : 'block')};
  }
`;
