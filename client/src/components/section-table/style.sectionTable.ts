import styled from 'styled-components';

export const SectionTableS = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BtnSectionTableS = styled.button`
  font-size: 2.3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    path {
      stroke: #ff0000;
    }
  }

  svg {
    font-size: 4.5rem;
  }

  path {
    stroke: #e13c3c;
  }
`;
