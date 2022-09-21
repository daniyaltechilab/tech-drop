import React from "react";

import { DropPlaceSectionContainer } from "./DropPlace.styles";
import { UpperRedSection } from "./DropPlace.styles";
import { CardArea, ProudText } from "../MarketPlaceSection/MarketPlace.styles";
import Drops from "../../containers/Pages/Users/Home/Drops";

const DropPlaceSection = () => {
  return (
    <DropPlaceSectionContainer>
      <UpperRedSection>
        <ProudText
          style={{
            marginTop: "29px",
            fontSize: "20px",
            wordSpacing: "3px",
            fontWeight: "bold",
          }}
        >
          Explore the Drops{" "}
        </ProudText>
      </UpperRedSection>
      <CardArea>
        <Drops />
      </CardArea>
    </DropPlaceSectionContainer>
  );
};

export default DropPlaceSection;
