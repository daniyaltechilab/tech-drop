import styled from "styled-components";
import { Link } from "@material-ui/core";

export const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 90px;
  transition: all 0.3s ease-in;
  color: ${(props) => (props.onScrollChange ? "#0E022B" : "white")};
  background-color: ${(props) =>
    props.onScrollChange ? "white" : "transparent"};
`;

export const MHeader = styled.header`
  display: flex;
  align-items: center;
  height: 90px;
  transition: all 0.3s ease-in;
  color: ${(props) => (props.onScrollChange ? "#0E022B" : "white")};
  /* background-color: ${(props) =>
    props.onScrollChange ? "white" : "black"}; */
  background-image: ${(props) =>
    props.onScrollChange
      ? "linear-gradient(to right, white, white)"
      : "linear-gradient(to right, rgb(136, 78, 211), rgb(16, 20, 128))"};
`;
// linear-gradient(to right, #884ed3, #101480)
export const NavLogoLink = styled.h3`
  color: ${(props) => (props.onScrollChange ? "#0E022B" : "#ffffff")};
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const HamburgerLink = styled.a`
  color: ${(props) => (props.onScrollChange ? "#0E022B" : "#ffffff")};
  font-weight: 300;
`;

export const LoginLink = styled.span`
  padding: 8px 30px;
  border-radius: 100px;
  color: ${(props) => (props.onScrollChange ? "#9f55ff" : "white")};
  background-color: ${(props) =>
    props.onScrollChange ? "white" : "transparent"};
  border: ${(props) =>
    props.onScrollChange ? "1px solid #9f55ff" : "1px solid white"};
  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${(props) =>
      props.onScrollChange ? "#9f55ff" : "white"};
    color: ${(props) => (props.onScrollChange ? "white" : "#9f55ff")};
  }
`;

export const DashboardLink = styled(Link)`
  /* text-decoration: none; */
  color: ${(props) => (props.onScrollChange ? "#9f55ff" : "white")};
  cursor: pointer;
`;

export const HoverEffectMenu = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  color: ${(props) => (props.onScrollChange ? "#0E022B" : "white")};
  border-radius: 7px;
  transition: all 0.3s ease-in;

  &:hover {
    color: ${(props) => (props.onScrollChange ? "white" : "#0E022B")};
    background-color: ${(props) =>
      props.onScrollChange ? "#0E022B" : "white"};
  }

  @media (max-width: 500px) {
    color: ${(props) => (props.onScrollChange ? "#0E022B" : "#9f55ff")};
  }
`;

export const CloseOption = styled.i`
  color: ${(props) => (props.onScrollChange ? "#0E022B" : "#0E022B")};
`;
