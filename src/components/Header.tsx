import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../routes/types";
import { useTypedLocation } from "../routes/hooks";

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
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

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? "#fff" : "rgba(255, 255, 255, 0.8)")};
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const Header = () => {
  const { isHome, isAbout, isBlog, isContact } = useTypedLocation();

  return (
    <HeaderContainer>
      <Nav>
        <Logo to={ROUTES.HOME}>Truls.dev</Logo>
        <NavLinks>
          <li>
            <NavLink to={ROUTES.HOME} $active={isHome}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT} $active={isAbout}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG} $active={isBlog}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT} $active={isContact}>
              Contact
            </NavLink>
          </li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
