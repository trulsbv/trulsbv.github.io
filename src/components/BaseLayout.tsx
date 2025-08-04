import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
