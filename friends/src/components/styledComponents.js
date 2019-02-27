import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 2rem;
  @media (min-width: 500px) {
    width: 75%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
