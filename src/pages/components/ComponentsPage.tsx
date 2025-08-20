import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ComponentsIndex } from "../../publicComponents/ComponentsIndex";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ComponentsPage = () => {
  return (
    <PageContainer>
      <ComponentsIndex />
      <Outlet />
    </PageContainer>
  );
};
