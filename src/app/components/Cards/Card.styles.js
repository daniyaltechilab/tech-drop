import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const AuctionCardWrapper = styled.div`
  width: 260px;
  height: 350px;
  /* background-color: black; */
`;

export const AuctionCardStyled = styled(Card)`
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props.type === "auction"
      ? "linear-gradient(to bottom, #b27ff5,#68419c )"
      : props.index === 0
      ? "linear-gradient(to bottom, #878787, #cacaca)"
      : "linear-gradient(to bottom, #884ed3, #101480 )"};

  margin-left: ${(props) => (props.index === 1 ? "20px" : "0")};

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${(props) => (props.index === 1 ? "20px" : "0")};
  }

  @media (max-width: 680px) {
    margin-left: 0;
    margin-top: ${(props) => (props.index === 1 ? "20px" : "0")};
  }
`;

export const AuctionCardDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin
`;

export const AuctionCardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: white;
`;

export const CardDescriptionTitle = styled.p`
  font-size: 16px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  white-space: nowrap;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  margin-left: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const AuctionInfoText = styled.p`
  color: white;
  size: 18px;
  text-align: center;
  font-weight: 700;
`;
