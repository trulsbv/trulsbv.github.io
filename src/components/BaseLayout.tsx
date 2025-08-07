import styled from "styled-components";
import { semantic } from "../theme/tokens";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, ${semantic.layout.backgroundStart} 0%, ${semantic.layout.backgroundEnd} 100%);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BaseLayout = () => (
  <AppContainer>
    <Header />
    <MainContent>
      <Outlet />
    </MainContent>
    <Footer />
  </AppContainer>
);
