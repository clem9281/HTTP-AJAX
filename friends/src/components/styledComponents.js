import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderDiv = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  flex: 0 1 90%;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #cfd8dc;
  padding: 2rem;
  @media (min-width: 500px) {
    flex: 0 1 45%;
  }
  @media (min-width: 1000px) {
    flex: 0 1 30%;
  }
`;
