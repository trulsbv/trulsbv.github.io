import { Route } from "react-router-dom";
import { HomePage } from "./HomePage";

export const homeRoutes = (
  <Route path="home" element={<HomePage />} handle={{ title: "main" }} />
);
