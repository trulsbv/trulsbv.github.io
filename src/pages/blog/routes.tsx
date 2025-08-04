import { Route } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { blogPostRoutes } from "./posts/routes";

export const blogRoutes = (
  <>
    <Route path="blog" element={<BlogPage />} />
    {blogPostRoutes}
  </>
);
