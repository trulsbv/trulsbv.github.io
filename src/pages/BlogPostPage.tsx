import { useParams } from "react-router-dom";
import styled from "styled-components";
import type { BlogPostParams } from "../routes/types";

const BlogPostContainer = styled.div`
  padding: 4rem 0;
  color: white;
  max-width: 800px;
  margin: 0 auto;
`;

const BlogPostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BlogPostMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0.7;
  font-size: 0.9rem;
`;

const BlogPostContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const NotFoundMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: white;
`;

const NotFoundTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
`;

// Mock blog posts data
const mockBlogPosts = [
  {
    slug: "building-modern-react-app",
    title: "Building a Modern React App with Vite and TypeScript",
    date: "2024-01-15",
    author: "Truls",
    content: `
      <p>A deep dive into setting up a production-ready React application with Vite, TypeScript, and modern tooling for optimal developer experience.</p>
      
      <h2>Why Vite?</h2>
      <p>Vite provides an incredibly fast development server and build tool that leverages native ES modules. This results in instant hot module replacement (HMR) and lightning-fast builds.</p>
      
      <h2>TypeScript Integration</h2>
      <p>TypeScript adds type safety to your React components, making your code more maintainable and catching errors at compile time rather than runtime.</p>
      
      <h2>Modern Tooling</h2>
      <p>Combining Vite with TypeScript, ESLint, and Prettier creates a robust development environment that scales with your project.</p>
    `,
  },
  {
    slug: "styled-components-power",
    title: "The Power of Styled Components in React",
    date: "2024-01-10",
    author: "Truls",
    content: `
      <p>Exploring how styled-components can revolutionize your CSS-in-JS approach and improve component reusability in React applications.</p>
      
      <h2>CSS-in-JS Benefits</h2>
      <p>Styled components provide scoped styling, dynamic styling based on props, and better component encapsulation.</p>
      
      <h2>Component Reusability</h2>
      <p>By combining styling with components, you create more reusable and maintainable UI elements.</p>
    `,
  },
  {
    slug: "e2e-testing-playwright",
    title: "End-to-End Testing with Playwright",
    date: "2024-01-05",
    author: "Truls",
    content: `
      <p>Why Playwright is becoming the go-to choice for E2E testing and how to implement it effectively in your development workflow.</p>
      
      <h2>Why Playwright?</h2>
      <p>Playwright provides reliable cross-browser testing with excellent debugging capabilities and modern web support.</p>
      
      <h2>Implementation</h2>
      <p>Setting up Playwright in your project is straightforward and provides immediate value for testing user workflows.</p>
    `,
  },
];

const BlogPostPage = () => {
  const { slug } = useParams<keyof BlogPostParams>();

  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <NotFoundMessage>
        <NotFoundTitle>Blog Post Not Found</NotFoundTitle>
        <NotFoundText>
          The blog post you're looking for doesn't exist.
          <br />
          <a
            href="/blog"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Return to blog
          </a>
        </NotFoundText>
      </NotFoundMessage>
    );
  }

  return (
    <BlogPostContainer>
      <BlogPostTitle>{post.title}</BlogPostTitle>
      <BlogPostMeta>
        <span>By {post.author}</span>
        <span>•</span>
        <span>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </BlogPostMeta>
      <BlogPostContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogPostContainer>
  );
};

export default BlogPostPage;
