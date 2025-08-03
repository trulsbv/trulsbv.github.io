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
      <SectionTitle>What I'm Exploring</SectionTitle>
      <AboutContent>
        <AboutText>
          <p>
            I'm a 24-year-old developer who believes the best way to grow is through 
            continuous experimentation. This site serves as my digital lab where I 
            test new technologies, document my learning process, and share the insights 
            I gain along the way.
          </p>
          <br />
          <p>
            Instead of showcasing polished portfolio pieces, you'll find honest accounts 
            of my experiments with emerging tools, frameworks, and architectural patterns. 
            Some will succeed, some will fail, but all will teach valuable lessons.
          </p>
          <br />
          <p>
            I'm particularly interested in exploring AI integration, modern frontend 
            architectures, and the intersection of performance and developer experience. 
            Join me as I navigate the ever-evolving landscape of software development.
          </p>
        </AboutText>

        <SkillsSection>
          <SkillsTitle>Current Learning Focus</SkillsTitle>
          <SkillsGrid>
            <SkillCategory>
              <CategoryTitle>Frontend Experiments</CategoryTitle>
              <SkillList>
                <SkillItem>React Server Components</SkillItem>
                <SkillItem>Web Components</SkillItem>
                <SkillItem>CSS Container Queries</SkillItem>
                <SkillItem>View Transitions API</SkillItem>
              </SkillList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>AI & ML Integration</CategoryTitle>
              <SkillList>
                <SkillItem>LLM APIs & RAG</SkillItem>
                <SkillItem>Vector Databases</SkillItem>
                <SkillItem>AI-Powered UIs</SkillItem>
                <SkillItem>Prompt Engineering</SkillItem>
              </SkillList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Performance & DX</CategoryTitle>
              <SkillList>
                <SkillItem>Build Tool Optimization</SkillItem>
                <SkillItem>Bundle Analysis</SkillItem>
                <SkillItem>Developer Tooling</SkillItem>
                <SkillItem>Testing Strategies</SkillItem>
              </SkillList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Emerging Tech</CategoryTitle>
              <SkillList>
                <SkillItem>WebAssembly</SkillItem>
                <SkillItem>Edge Computing</SkillItem>
                <SkillItem>Progressive Web Apps</SkillItem>
                <SkillItem>Web APIs</SkillItem>
              </SkillList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsSection>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
