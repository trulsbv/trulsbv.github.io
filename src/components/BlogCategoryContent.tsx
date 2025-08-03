import { useParams } from "react-router-dom";
import { TypedLink } from "./TypedLink";
import { ROUTES } from "../routes/types";

const BlogCategoryContent = () => {
  const { category } = useParams<{ category: string }>();

  // Mock data - in a real app, you'd fetch this from an API
  const categoryPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      slug: "getting-started-with-react",
      excerpt:
        "Learn the basics of React and start building modern web applications.",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Advanced TypeScript Patterns",
      slug: "advanced-typescript-patterns",
      excerpt: "Explore advanced TypeScript patterns for better type safety.",
      date: "2024-01-10",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <nav className="mb-4">
            <TypedLink
              to={ROUTES.BLOG}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              ← Back to Blog
            </TypedLink>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-2">
            Category: {category}
          </h1>
          <p className="text-gray-300 text-lg">
            {categoryPosts.length} post{categoryPosts.length !== 1 ? "s" : ""}{" "}
            in this category
          </p>
        </header>

        <div className="space-y-6">
          {categoryPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                <TypedLink
                  to={ROUTES.BLOG_POST}
                  params={{ slug: post.slug }}
                  className="hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </TypedLink>
              </h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <time className="text-gray-400 text-sm">{post.date}</time>
                <TypedLink
                  to={ROUTES.BLOG_POST}
                  params={{ slug: post.slug }}
                  className="text-blue-500 hover:text-blue-700 transition-colors font-medium"
                >
                  Read more →
                </TypedLink>
              </div>
            </article>
          ))}
        </div>

        {categoryPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">
              No posts found in this category.
            </p>
            <TypedLink
              to={ROUTES.BLOG}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Browse all posts
            </TypedLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCategoryContent;
