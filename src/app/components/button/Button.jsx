import React from "react";

import { StyledButton } from "./Button.styles";

const Button = ({ children, link }) => {
  return (
    <StyledButton
      to={link === "more" ? { pathname: "https://www.robotdrop.nft" } : link}
      target="_blank"
      style={{ color: "#000000" }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
