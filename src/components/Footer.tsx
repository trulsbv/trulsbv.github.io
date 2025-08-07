import styled from "styled-components";
import { semantic } from "../theme/tokens";

const FooterContainer = styled.footer`
  background: ${semantic.footer.background};
  backdrop-filter: blur(10px);
  border-top: 1px solid ${semantic.footer.border};
  padding: 2rem 0;
  margin-top: 4rem;
  box-shadow: ${semantic.footer.shadow};
`;

const Copyright = styled.div`
  text-align: center;
  color: ${semantic.footer.textMuted};
  font-size: 0.9rem;
`;

export const Footer = () => (
  <FooterContainer>
    <Copyright>
      © {new Date().getFullYear()} Truls. Technical experiments and
      implementations.
    </Copyright>
  </FooterContainer>
);
