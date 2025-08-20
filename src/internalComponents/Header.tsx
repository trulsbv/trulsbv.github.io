import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../routes/types";
import { semantic } from "../theme/tokens";

const HeaderContainer = styled.header`
  background: ${semantic.header.background};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${semantic.header.border};
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: 0;
  box-shadow: ${semantic.header.shadow};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${semantic.header.text};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${semantic.header.text};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: ${semantic.header.link};
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-weight: 500;
  line-height: 1;
  display: inline-block;

  &:hover {
    background: ${semantic.header.linkHoverBg};
    color: ${semantic.header.text};
  }

  &[aria-current="page"] {
    background: ${semantic.header.linkActiveBg};
    color: ${semantic.header.text};
  }

  &:focus-visible {
    outline: 2px solid ${semantic.header.focusRing};
    outline-offset: 2px;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <Nav>
      <Logo to={ROUTES.HOME}>trulsbv.dev</Logo>
      <NavLinks>
        <li>
          <StyledNavLink to={ROUTES.HOME} end>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={ROUTES.COMPONENTS}>Components</StyledNavLink>
        </li>
      </NavLinks>
    </Nav>
  </HeaderContainer>
);
