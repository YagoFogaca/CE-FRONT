import styled from 'styled-components';
import { PropsLineTable } from '../../utils/types/index.props';

export const Table = styled.table`
  width: 100%;
  flex-direction: column;
  display: flex;
  margin-top: 15px;
`;

export const Thead = styled.thead`
  border-bottom: 1px solid #00000047;
`;

export const Tbody = styled.tbody`
  border-bottom: 1px solid #00000047;
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 10px;
  font-size: 18px;
  text-align: center;
  background-color: #fefefe;

  @media (max-width: 321px) {
    font-size: 16px;
  }
`;

export const Th = styled.th<PropsLineTable>`
  width: 20%;
  @media (max-width: 768px) {
    display: ${props => (props.display ? 'none' : 'block')};
  }
`;

export const Td = styled.td<PropsLineTable>`
  width: 20%;
  @media (max-width: 768px) {
    display: ${props => (props.display ? 'none' : 'block')};
  }
`;

export const ThConfig = styled(Th)`
  width: 40%;
  @media (max-width: 321px) {
    width: 30%;
  }
`;

export const TdConfig = styled(Td)`
  width: 40%;
  @media (max-width: 321px) {
    width: 30%;
  }
`;
