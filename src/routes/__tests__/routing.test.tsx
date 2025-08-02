import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { ROUTES } from "../types";
import { useTypedNavigate, useTypedLocation, createTypedLink } from "../hooks";

// Mock the hooks for testing
vi.mock("../hooks", () => ({
  useTypedNavigate: vi.fn(),
  useTypedLocation: vi.fn(),
  createTypedLink: vi.fn(),
}));

describe("Routing System", () => {
  describe("Route Constants", () => {
    it("should have all required routes defined", () => {
      expect(ROUTES.HOME).toBe("/");
      expect(ROUTES.ABOUT).toBe("/about");
      expect(ROUTES.BLOG).toBe("/blog");
      expect(ROUTES.BLOG_POST).toBe("/blog/:slug");
      expect(ROUTES.CONTACT).toBe("/contact");
    });
  });

  describe("createTypedLink", () => {
    it("should create links without parameters", () => {
      const link = createTypedLink(ROUTES.HOME);
      expect(link).toBe("/");
    });

    it("should create links with parameters", () => {
      const link = createTypedLink(ROUTES.BLOG_POST, { slug: "test-post" });
      expect(link).toBe("/blog/test-post");
    });
  });

  describe("useTypedNavigate", () => {
    it("should provide navigation methods", () => {
      const mockNavigate = vi.fn();
      (useTypedNavigate as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
        {
          navigate: mockNavigate,
          goHome: vi.fn(),
          goAbout: vi.fn(),
          goBlog: vi.fn(),
          goContact: vi.fn(),
          goToBlogPost: vi.fn(),
        }
      );

      const { navigate } = useTypedNavigate();
      expect(navigate).toBeDefined();
    });
  });

  describe("useTypedLocation", () => {
    it("should provide location information", () => {
      (useTypedLocation as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
        {
          pathname: "/",
          isHome: true,
          isAbout: false,
          isBlog: false,
          isContact: false,
          isBlogPost: false,
        }
      );

      const location = useTypedLocation();
      expect(location.isHome).toBe(true);
      expect(location.isAbout).toBe(false);
    });
  });
});

// Test wrapper for components that need router context
export const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);
