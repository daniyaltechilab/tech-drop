import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 90px;
  background-image: linear-gradient(to right, #5965ab, #2f365e);
  color: white;
  display: flex;
  align-items: center;
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
`;

export const LeftFooterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
`;

export const RightFooterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;
