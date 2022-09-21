import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";

export const PreText = styled.pre`
  color: rgb(32, 32, 34);
`;

export const ViewAllLink = styled(Link)`
  color: rgb(136, 78, 211);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(160, 88, 256);
  }
`;

export const TopHeading = styled(Typography)`
  color: rgb(32, 32, 34);
`;

export const AuctionInfoMessgae = styled(Typography)`
  color: rgb(136, 78, 211);
`;
// 9f55ff
export const InnerCardText = styled(Typography)`
  color: rgb(32, 32, 34);
`;

export const AuctionCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 50%;
  height: 400px;
  /* background-color: lightpink; */

  @media (max-width: 500px) {
    margin-left: 50px;
  }
`;

export const DropsCardContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: flex-start;
  width: 100%;
  height: 400px;

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-y: auto;
  }

  @media (max-width: 680px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-y: auto;
  }
`;
