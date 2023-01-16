import styled from 'styled-components';

export const SectionTableS = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FormSectionTableS = styled.form`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const InputSectionTableS = styled.input`
  width: 40%;
  background: #f8f4ea;
  border: 2px solid #939393;
  padding: 0.6rem 1rem;
  font-size: 1.8rem;
  border-radius: 10px;
  @media (max-width: 425px) {
    font-size: 1.4rem;
    width: 80%;
  }
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
