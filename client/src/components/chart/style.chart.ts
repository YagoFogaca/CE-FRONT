import styled from 'styled-components';

export const SectionGraficos = styled.section`
  width: 100%;
  padding: 1rem;

  .row {
    overflow: auto;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 1px 5px #000;
  }

  .chart-entry {
    min-width: 450px !important;
    display: flex;
    justify-content: center;
    tspan {
      font-size: 13px;
    }
  }
`;
