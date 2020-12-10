import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const MainWrapper = styled.main`
  margin: 10px 25px;
`;

export const Logo = styled.img`
  width: 250px;
  height: 64px;
  margin: 25px 0;
`;

export const PageContainer = styled(Container)`
  background-color: rgb(255 255 255 / 3%);
  margin: 15px auto;
  .inner {
    padding: 2rem 3rem;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  span {
    color: rgba(255, 255, 255, 0.2);
    padding: 0 5px;
  }
`;

export const primaryColor = "#ffc439";
