import styled from "styled-components";

export const HomeBannerContainer = styled.section`
  height: 550px;
  padding-top: 90px;
  background-image: linear-gradient(
    to right,
    rgb(136, 78, 211),
    rgb(16, 20, 128)
  );
`;

export const Heading = styled.h1`
  color: #ffffff;
  word-spacing: 5px;
  font-size: 45px;

  @media (max-width: 620px) {
    font-size: 35px;
  }
`;

export const HomeBannerButtonContainer = styled.div`
  width: 350px;
  height: 150px;
  display: grid;
  grid-template-rows: repeat(2, 60px);
  grid-template-columns: repeat(2, 150px);
  column-gap: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    margin-top: 10px;
    margin-bottom: 5px;
    grid-template-rows: repeat(2, 40px);
    grid-template-columns: repeat(2, 150px);
    column-gap: 40px;
  }

  @media (max-width: 620px) {
    margin-top: 10px;
    margin-bottom: 5px;
    grid-template-rows: repeat(2, 40px);
    grid-template-columns: repeat(2, 150px);
    column-gap: 40px;
  }
`;
