import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const StyledNav = styled.nav`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const activeClassName = "active";
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  padding-right: 20px;
  color: black;
  text-decoration: none;
  &:hover {
    color: #0d47a1;
  }
  &.${activeClassName} {
    color: #0d47a1;
    font-weight: bold;
  }
`;

export const Card = styled.div`
  flex: 0 1 90%;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #cfd8dc;
  padding: 2rem;
  text-align: center;
  @media (min-width: 500px) {
    flex: 0 1 45%;
  }
  @media (min-width: 1000px) {
    flex: 0 1 30%;
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 500px) {
    width: 75%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  margin: 20px auto;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 2px;
  position: relative;
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledError = styled.p`
  color: #7f0000;
  position: absolute;
  right: 0;
  top: 0;
`;
export const StyledThumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  background: transparent;
  padding: 10px;
  margin: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #0d47a1;
    color: white;
  }
`;
export const PrimaryButton = styled.button`
  background: #0d47a1;
  color: white;
  border: 1px solid #0d47a1;
  padding: 10px 20px;
  display: block;
  margin: 10px auto;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: #0d47a1;
  }
`;
