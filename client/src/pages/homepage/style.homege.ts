import styled from 'styled-components';

export const SectionHomepageS = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: 15px;

  .card-infos {
    width: 30%;
    min-width: 285px;
    height: 300px;
    background-color: #fefefe;
    box-shadow: 0px 0px 5px #000;
  }

  .grafico-pizza {
    width: 60%;
    height: 300px;
    background-color: #fefefe;
    box-shadow: 0px 0px 5px #000;
    display: flex;
    justify-content: space-around;
  }

  .grafico-pizza div {
    width: 45%;
    height: 100%;
    border: 1px solid;
  }

  .grafico-mes {
    width: 45%;
    height: 450px;
    background-color: #fefefe;
    box-shadow: 0px 0px 5px #000;
  }
`;
