import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../routes/types";

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to={ROUTES.HOME}>Truls Experiments</Logo>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
