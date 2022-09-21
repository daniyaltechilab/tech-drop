import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {
  AuctionCardWrapper,
  AuctionCardDescriptionWrapper,
  AuctionCardRow,
  CardDescriptionTitle,
  CardDescription,
  AuctionInfoText,
  AuctionCardStyled,
} from "./Card.styles";
import nftImage from "../../assets/img/cardlogo.png";

const AuctionCard = ({ type, index, item }) => {
  // const { title, description } = item;
  console.log("Han g Auction ki props: ", item);
  return (
    <AuctionCardWrapper>
      <AuctionCardStyled type={type} index={index}>
        <CardMedia
          component="img"
          height="160"
          src={nftImage}
          alt="NFT Image"
        ></CardMedia>
        <CardContent>
          <AuctionCardDescriptionWrapper>
            <AuctionCardRow>
              <CardDescriptionTitle>Drop Description:</CardDescriptionTitle>
              <CardDescription>{item.description}</CardDescription>
            </AuctionCardRow>
            <AuctionCardRow>
              <CardDescriptionTitle>Collection:</CardDescriptionTitle>
              <CardDescription>1.2 WETH</CardDescription>
            </AuctionCardRow>
            <AuctionCardRow>
              <CardDescriptionTitle>Minimum Bid:</CardDescriptionTitle>
              <CardDescription>1.2 WETH</CardDescription>
            </AuctionCardRow>
          </AuctionCardDescriptionWrapper>
          <AuctionInfoText>Auction Ended</AuctionInfoText>
        </CardContent>
      </AuctionCardStyled>
    </AuctionCardWrapper>
  );
};

export default AuctionCard;
