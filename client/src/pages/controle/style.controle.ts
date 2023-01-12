import styled from 'styled-components';

export const Section = styled.section`
  width: 90%;
  // Apos ter conteudo remover esse propriedade
  height: 100%;
  background-color: #f8f4ea;
  margin: 0rem auto;
  border-top: 5px solid #579bb1;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

export const DivBtn = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Btn = styled.button`
  width: 20%;
  border: 4px solid #579bb1;
  border-bottom: none !important;

  font-size: 1.9rem;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 768px) {
    width: 33.333333%;
    font-size: 1.5rem;
  }
`;
