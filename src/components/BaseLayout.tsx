import styled from "styled-components";
import { semantic } from "../theme/tokens";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RouteTitle } from "../routes/RouteTitle";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, ${semantic.layout.backgroundStart} 0%, ${semantic.layout.backgroundEnd} 100%);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
`;

const MainContent = styled.main`
  max-width: 1200px;
  padding: 0 20px;
  flex: 1;
`;

export const BaseLayout = () => (
  <AppContainer>
    <RouteTitle />
    <Header />
    <MainContent>
      <Outlet />
    </MainContent>
    <Footer />
  </AppContainer>
);
