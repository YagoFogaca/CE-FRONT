import styled from 'styled-components';

export const SectionInfos = styled.section`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;

export const SectionInfosDiv = styled.div`
  width: 65%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
