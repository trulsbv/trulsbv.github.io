import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 4rem 0;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Greeting = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 2rem 0;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Greeting>Welcome</Greeting>
        <Description>
          These are the components I have created while exploring new technical
          implementations.
        </Description>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
