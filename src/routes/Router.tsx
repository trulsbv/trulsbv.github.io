import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./config";
import { ROUTES } from "./types";

const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, component: Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}

      {/* Catch-all route for 404 */}
      <Route
        path="*"
        element={
          <div
            style={{
              color: "white",
              textAlign: "center",
              padding: "4rem 2rem",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
            <p
              style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.8 }}
            >
              Page not found
            </p>
            <a
              href={ROUTES.HOME}
              style={{
                color: "white",
                textDecoration: "underline",
                fontSize: "1.1rem",
              }}
            >
              Return to home
            </a>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRouter;
