import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const MarketPlaceSectionContainer = styled.div`
  height: 900px;
  background-color: #999999;

  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 95%);
`;

export const UpperBlueSection = styled.div`
  height: 200px;
  background: #101480;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  color: #fff;
  font-size: 20px;
`;

export const CardArea = styled.div`
  height: 550px;
  background: #ffffff;
  margin: 0 40px;
  margin-top: -80px;
  z-index: 100;

  box-shadow: 5px 5px 10px 5px rgb(0 0 0 / 0.3);
`;

export const ProudText = styled(Typography)`
  margin-top: 29px;

  @media (max-width: 500px) {
    text-align: center;
    margin-top: 5px;
  }
`;
