import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  width: 150px;
  height: 35px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 18px;
  border: none;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  color: black;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(-1px);
  }
`;
