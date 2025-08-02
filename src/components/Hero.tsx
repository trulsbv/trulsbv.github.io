import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 80vh;
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

const Greeting = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 2rem 0;
  opacity: 0.9;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  opacity: 0.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Location = styled.div`
  font-size: 1rem;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Flag = styled.span`
  font-size: 1.2rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Greeting>Hello, I'm</Greeting>
        <Name>Truls</Name>
        <Title>Software Engineer</Title>
        <Description>
          I build digital experiences that matter. Passionate about clean code,
          user experience, and creating solutions that make a difference.
        </Description>
        <Location>
          <Flag>🇳🇴</Flag>
          Based in Oslo, Norway
        </Location>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
