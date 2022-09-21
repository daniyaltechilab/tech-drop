import React from "react";

import HomeLogo from "../../../../assets/home-banner-logo.png";
import Button from "../../../../components/button/Button.jsx";
import {
  HomeBannerContainer,
  HomeBannerButtonContainer,
  Heading,
} from "./HomeBanner.styles";

function HomeBanner() {
  return (
    <HomeBannerContainer>
      <div className="container-fluid">
        <div className="banner-wrapper" style={{ paddingTop: "90px" }}>
          <div
            className="banner-header text-center"
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-50px",
            }}
          >
            <img
              src={HomeLogo}
              style={{ width: "200px", marginBottom: "20px" }}
            />
            <Heading style={{ color: "#ffffff" }}>
              Re-Imagine the NFT Exchange
            </Heading>
            <p style={{ color: "white" }}>
              We're evolving NFT art through music and design!
            </p>
            <HomeBannerButtonContainer>
              <Button link={"/marketPlace"}>Market</Button>
              <Button link="more">Learn More</Button>
              <Button link={"/auctionDrops"}>Explore Drops</Button>
              <Button link={"/admin-login"}>Create</Button>
            </HomeBannerButtonContainer>
          </div>
        </div>
      </div>
    </HomeBannerContainer>
  );
}

export default HomeBanner;
