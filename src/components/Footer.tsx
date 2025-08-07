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

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: ${semantic.hero.title};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: ${semantic.footer.textMuted};
  font-size: 0.9rem;
`;

export const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterLink
        href="https://github.com/trulsbv/trulsbv.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        View source on GitHub
      </FooterLink>
      <Copyright>
        © {new Date().getFullYear()} Truls. Technical experiments and
        implementations.
      </Copyright>
    </FooterContent>
  </FooterContainer>
);
