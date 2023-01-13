import styled from 'styled-components';

export const DivBtn = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Btn = styled.button`
  width: 20%;
  border: 4px solid #579bb1;
  border-bottom: none !important;
  padding: 0.6rem;
  cursor: pointer;

  font-size: 1.9rem;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 768px) {
    width: 33.333333%;
    font-size: 1.5rem;
  }
`;
