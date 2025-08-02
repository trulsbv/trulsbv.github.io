import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the main content", async ({ page }) => {
    await page.goto("/");

    // Check that the header is visible
    await expect(page.locator("header")).toBeVisible();

    // Check that the main content sections are present
    await expect(page.getByText("Hello, I'm")).toBeVisible();
    await expect(page.getByText("Truls")).toBeVisible();
    await expect(page.getByText("Software Engineer")).toBeVisible();

    // Check navigation links
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Blog" })).toBeVisible();
  });

  test("should navigate to different sections", async ({ page }) => {
    await page.goto("/");

    // Click on About link
    await page.getByRole("link", { name: "About" }).click();
    await expect(page.getByText("About Me")).toBeVisible();

    // Click on Blog link
    await page.getByRole("link", { name: "Blog" }).click();
    await expect(page.getByText("Latest Posts")).toBeVisible();

    // Click on Home link
    await page.getByRole("link", { name: "Home" }).click();
    await expect(page.getByText("Hello, I'm")).toBeVisible();
  });

  test("should display blog posts", async ({ page }) => {
    await page.goto("/");

    // Scroll down to blog section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check that blog posts are displayed
    await expect(page.getByText("Latest Posts")).toBeVisible();
    await expect(page.getByText("Building a Modern React App")).toBeVisible();
  });

  test("should have proper meta information", async ({ page }) => {
    await page.goto("/");

    // Check page title
    await expect(page).toHaveTitle(/Truls/);

    // Check that the page is responsive
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator("header")).toBeVisible();
  });
});
