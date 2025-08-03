import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../routes/types";
import { TypedLink } from "./TypedLink";

const BlogSection = styled.section`
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

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const PostCard = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    color: white;
  }
`;

const PostDate = styled.time`
  font-size: 0.9rem;
  opacity: 0.7;
  display: block;
  margin-bottom: 1rem;
`;

const PostTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.3;
`;

const PostExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1.5rem;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  opacity: 0.7;
`;

const EmptyStateTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const EmptyStateText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const CategoriesSection = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const CategoriesTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
`;

const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const CategoryLink = styled(TypedLink)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    color: white;
  }
`;

// Mock blog posts data
const mockPosts = [
  {
    id: 1,
    slug: "experimenting-with-react-server-components",
    title: "Experimenting with React Server Components",
    excerpt:
      "My first attempt at implementing RSC in a real project. What worked, what didn't, and the unexpected challenges I encountered along the way.",
    date: "2024-01-15",
    tags: ["React", "Server Components", "Experiments", "Learning"],
  },
  {
    id: 2,
    slug: "building-ai-powered-ui-components",
    title: "Building AI-Powered UI Components from Scratch",
    excerpt:
      "A deep dive into creating interactive components that leverage LLM APIs. From concept to implementation, including the failures and breakthroughs.",
    date: "2024-01-10",
    tags: ["AI", "UI Components", "LLM", "Experiments"],
  },
  {
    id: 3,
    slug: "web-components-vs-react",
    title: "Web Components vs React: A Performance Experiment",
    excerpt:
      "Comparing bundle sizes, runtime performance, and developer experience between native Web Components and React. Surprising results inside.",
    date: "2024-01-05",
    tags: ["Web Components", "React", "Performance", "Comparison"],
  },
];

const BlogPosts = () => {
  // Extract unique categories from tags
  const allTags = mockPosts.flatMap((post) => post.tags);
  const categories = [...new Set(allTags)];

  return (
    <BlogSection>
      <SectionTitle>Learning Experiments</SectionTitle>

      <CategoriesSection>
        <CategoriesTitle>Browse by Category</CategoriesTitle>
        <CategoriesGrid>
          {categories.map((category) => (
            <CategoryLink
              key={category}
              to={ROUTES.BLOG_CATEGORY}
              params={{ category: category.toLowerCase() }}
            >
              {category}
            </CategoryLink>
          ))}
        </CategoriesGrid>
      </CategoriesSection>

      {mockPosts.length > 0 ? (
        <PostsGrid>
          {mockPosts.map((post) => (
            <PostCard
              key={post.id}
              to={ROUTES.BLOG_POST.replace(":slug", post.slug)}
            >
              <PostDate dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </PostDate>
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <PostTags>
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </PostTags>
            </PostCard>
          ))}
        </PostsGrid>
      ) : (
        <EmptyState>
                  <EmptyStateTitle>Experiments in Progress</EmptyStateTitle>
        <EmptyStateText>
          I'm currently setting up my first technical experiments. Check back soon to see 
          what I'm learning and building!
        </EmptyStateText>
        </EmptyState>
      )}
    </BlogSection>
  );
};

export default BlogPosts;
