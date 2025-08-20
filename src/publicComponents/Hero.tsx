import styled from "styled-components";
import { semantic } from "../theme/tokens";

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${semantic.hero.foreground};
  padding: 4rem 0;
  scroll-margin-top: 80px; /* Account for fixed header */
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Greeting = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  color: ${semantic.hero.title};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0;
  color: ${semantic.hero.text};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Hero = () => {
  const scrollToSection = () => {
    window.history.pushState(null, "", "#welcome");
  };

  return (
    <HeroSection id="welcome">
      <HeroContent>
        <Greeting onClick={scrollToSection}>Welcome</Greeting>
        <Description>
          These are the components I have created while exploring new technical
          implementations.
        </Description>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
