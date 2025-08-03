import { Outlet, useLocation } from "react-router-dom";
import BlogPosts from "../components/BlogPosts";

const BlogPage = () => {
  const location = useLocation();
  const isCategoryRoute = location.pathname.includes("/blog/category/");

  return (
    <div>
      {!isCategoryRoute && <BlogPosts />}
      <Outlet />
    </div>
  );
};

export default BlogPage;
