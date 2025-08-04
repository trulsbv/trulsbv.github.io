import { test, expect } from "@playwright/test";

test.describe("Components Routes", () => {
  test("should display the components page", async ({ page }) => {
    await page.goto("/components");

    // Check that the components page loads
    await expect(
      page.getByRole("heading", { name: "Components", level: 1 })
    ).toBeVisible();

    // Check that component cards are displayed
    await expect(page.getByText("Hero")).toBeVisible();
    await expect(page.getByText("AI Banner")).toBeVisible();
    await expect(page.getByText("Component Showcase")).toBeVisible();
  });

  test("should navigate to component detail page", async ({ page }) => {
    await page.goto("/components");

    // Click on the Hero component card
    await page.getByRole("link", { name: /Hero.*Main hero section/ }).click();

    // Should navigate to the hero component detail page
    await expect(page.url()).toContain("/components/hero");
    await expect(page.getByRole("heading", { name: "Hero" })).toBeVisible();
  });

  test("should display component detail page with live demo and code", async ({
    page,
  }) => {
    await page.goto("/components/hero");

    // Check that the component detail page loads
    await expect(
      page.getByRole("heading", { name: "Hero", level: 1 })
    ).toBeVisible();

    // Check that both live demo and code sections are present
    await expect(page.getByText("Live Demo")).toBeVisible();
    await expect(page.getByText("Code")).toBeVisible();
  });

  test("should handle non-existent component gracefully", async ({ page }) => {
    await page.goto("/components/non-existent-component");

    // Should show a 404-like message
    await expect(page.getByText("Component Not Found")).toBeVisible();
    await expect(page.getByText("Back to Components")).toBeVisible();
  });
});
