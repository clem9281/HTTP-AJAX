import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  text-align: center;
`;

export const Card = styled.div`
  flex: 0 1 90%;
  margin: 10px auto;
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

export const FormContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  width: 50%;
  margin: 20px auto;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 10px 0;
`;
