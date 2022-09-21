import React from "react";
// import logo from '../logo.png'
import "../../assets/css/bootstrap.min.css";
import "../../assets/plugins/fontawesome/css/fontawesome.min.css";
import "../../assets/plugins/fontawesome/css/all.min.css";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
import {
  FooterWrapper,
  LeftFooterSection,
  RightFooterSection,
} from "./Footer.styles";

function Footer(props) {
  console.log("footer props: ", props);
  return (
    <FooterWrapper>
      <LeftFooterSection>
        &copy; 2022 TECHROBOT. All rights reserved.
      </LeftFooterSection>
      <RightFooterSection>
        <span>
          <Link to="/termsandconditions">Terms and Conditions</Link>
        </span>
        &nbsp; | &nbsp;
        <span>
          <Link to="/privacy-policy">Policy</Link>
        </span>
      </RightFooterSection>
    </FooterWrapper>
  );
}

export default Footer;
