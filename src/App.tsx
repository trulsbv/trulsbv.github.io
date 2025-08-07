import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { router } from "./routes/Router";

function App() {
  useEffect(() => {
    // Handle URL hash navigation on page load
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Handle initial load with hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
