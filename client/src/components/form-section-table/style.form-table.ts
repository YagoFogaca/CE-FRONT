import styled from 'styled-components';

export const FormSectionTableS = styled.form`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const InputSectionTableS = styled.input`
  width: 50%;
  background: #f8f4ea;
  border: 2px solid #939393;
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 10px;
  @media (max-width: 878px) {
    font-size: 14px;
    width: 80%;
  }
`;

export const BtnSectionTableS = styled.button`
  font-size: 22px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    path {
      stroke: #ff0000;
    }
  }

  svg {
    font-size: 45px;
  }

  path {
    stroke: #e13c3c;
  }
`;
