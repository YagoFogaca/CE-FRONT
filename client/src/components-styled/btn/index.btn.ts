import styled from 'styled-components';

export const BtnS = styled.button`
  max-width: 100px;
  width: 45%;
  font-size: 1.8rem;
  color: #fefefe;
  padding: 0.3rem 0.5rem;
  background-color: #5485bb;
  border: 2px solid #0f0f0f;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;
  @media (max-width: 425px) {
    font-size: 1.4rem;
  }

  &:hover {
    opacity: 1;
  }
`;
