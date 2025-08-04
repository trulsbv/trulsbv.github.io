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
  justify-content: space-between;
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

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

export const Header = () => (
  <HeaderContainer>
    <Nav>
      <Logo to={ROUTES.HOME}>Truls Experiments</Logo>
      <NavLinks>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.COMPONENTS}>Components</Link>
        </li>
      </NavLinks>
    </Nav>
  </HeaderContainer>
);
