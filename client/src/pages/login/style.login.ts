import styled from 'styled-components';

export const SectionFormLoginS = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivSectionForm = styled.div`
  width: 40%;
  min-width: 265px;
  height: 45%;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8bb6f50f;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #000;

  @media (max-width: 928px) {
    height: 55%;
  }

  .form-login {
    width: 75%;
  }

  .btn-login {
    width: 100%;
  }

  .text-muted {
    color: #ff3333d1 !important;
  }
`;
