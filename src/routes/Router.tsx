import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "../internalComponents/BaseLayout";
import { ROUTES } from "./types";
import { routeSubtrees } from "./routeSubtrees";

export const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <BaseLayout />,
    children: [
      { index: true, element: <Navigate to={ROUTES.HOME} replace /> },
      ...routeSubtrees,
      {
        path: "*",
        element: (
          <div
            style={{
              color: "#111827",
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
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.8 }}>
              Page not found
            </p>
            <a
              href={ROUTES.HOME}
              style={{
                color: "#0F172A",
                textDecoration: "underline",
                fontSize: "1.1rem",
              }}
            >
              Return to home
            </a>
          </div>
        ),
      },
    ],
  },
]);
