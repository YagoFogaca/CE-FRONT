import styled from 'styled-components';

export const SectionDivInfosS = styled.section`
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
  }
`;

export const DivInfoss = styled.div`
  width: 25%;
  max-width: 270px;
  min-width: 220px;
  height: 125px;
  background-color: #f5f5f55e;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #000;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h5 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }

  span {
    font-size: 20px;
  }

  #ativo {
    color: #f90;
  }

  #obsoleto {
    color: #ff0000;
  }
  #total {
    color: #14b714;
  }
`;
