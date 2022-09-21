import React from "react";
import {
  MarketPlaceSectionContainer,
  UpperBlueSection,
  CardArea,
  ProudText,
} from "./MarketPlace.styles";
import Market from "../../containers/Pages/Users/Home/Market";

const MarketPlaceSection = () => {
  return (
    <MarketPlaceSectionContainer>
      <UpperBlueSection>
        <ProudText
          style={{
            marginTop: "29px",
            fontSize: "20px",
            wordSpacing: "3px",
            fontWeight: "bold",
          }}
        >
          Check out the Latest Drops in our Auction
        </ProudText>
      </UpperBlueSection>
      <CardArea>
        <Market />
      </CardArea>
    </MarketPlaceSectionContainer>
  );
};

export default MarketPlaceSection;
