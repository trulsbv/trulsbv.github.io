import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 0;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const SkillsSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CategoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  padding: 0.25rem 0;
  opacity: 0.8;
  font-size: 0.95rem;
`;

const About = () => {
  return (
    <AboutSection>
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutText>
          <p>
            I'm a 24-year-old software engineer passionate about creating
            meaningful digital experiences. With a strong foundation in modern
            web technologies, I enjoy solving complex problems and building
            applications that users love.
          </p>
          <br />
          <p>
            When I'm not coding, you can find me exploring the beautiful nature
            around Oslo, reading about new technologies, or contributing to
            open-source projects. I believe in continuous learning and staying
            up-to-date with the latest industry trends.
          </p>
          <br />
          <p>
            I'm always interested in new opportunities and collaborations.
            Whether you want to discuss a project, share ideas, or just say
            hello, feel free to reach out!
          </p>
        </AboutText>

        <SkillsSection>
          <SkillsTitle>Skills & Technologies</SkillsTitle>
          <SkillsGrid>
            <SkillCategory>
              <CategoryTitle>Frontend</CategoryTitle>
              <SkillList>
                <SkillItem>React & TypeScript</SkillItem>
                <SkillItem>Next.js</SkillItem>
                <SkillItem>Styled Components</SkillItem>
                <SkillItem>Tailwind CSS</SkillItem>
              </SkillList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Backend</CategoryTitle>
              <SkillList>
                <SkillItem>Node.js</SkillItem>
                <SkillItem>Express</SkillItem>
                <SkillItem>PostgreSQL</SkillItem>
                <SkillItem>MongoDB</SkillItem>
              </SkillList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Tools</CategoryTitle>
              <SkillList>
                <SkillItem>Git & GitHub</SkillItem>
                <SkillItem>Docker</SkillItem>
                <SkillItem>CI/CD</SkillItem>
                <SkillItem>AWS</SkillItem>
              </SkillList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Testing</CategoryTitle>
              <SkillList>
                <SkillItem>Jest</SkillItem>
                <SkillItem>Playwright</SkillItem>
                <SkillItem>React Testing Library</SkillItem>
                <SkillItem>Storybook</SkillItem>
              </SkillList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsSection>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
