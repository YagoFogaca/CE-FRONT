import styled from 'styled-components';

export const SectionSupplyPage = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const AsideSupplyPage = styled.aside`
  width: 95%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f55e;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #000;

  .div-infos-1 {
    width: 75%;
    display: flex;
    flex-direction: column;
  }

  .div-infos-2 {
    width: 75%;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 17px;
  }
`;
