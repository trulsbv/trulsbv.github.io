import styled from "styled-components";
import Hero from "../../publicComponents/Hero";
import { ComponentsGrid } from "../../publicComponents/ComponentsGrid";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HomePage = () => {
  return (
    <>
      <Hero />
      <PageContainer>
        <ComponentsGrid />
      </PageContainer>
    </>
  );
};
