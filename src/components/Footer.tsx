import styled from "styled-components";

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  margin-top: 4rem;
`;

const Copyright = styled.div`
  text-align: center;
  color: white;
  opacity: 0.6;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Truls. Technical experiments and
        implementations.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
