import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the main content", async ({ page }) => {
    await page.goto("/");

    // Check that the header is visible
    await expect(page.locator("header")).toBeVisible();

    // Check that the main content sections are present
    await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
    await expect(
      page.getByText(
        "These are the components I have created while exploring new technical implementations."
      )
    ).toBeVisible();

    // Check navigation links
    await expect(page.getByText("Truls Experiments")).toBeVisible();
    await expect(page.locator("header").getByText("Welcome")).toBeVisible();
    await expect(
      page.locator("header").getByText("Implementations")
    ).toBeVisible();
  });

  test("should navigate to different sections", async ({ page }) => {
    await page.goto("/");

    // Click on Welcome link in header
    await page.locator("header").getByText("Welcome").click();
    await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();

    // Click on Implementations link in header
    await page.locator("header").getByText("Implementations").click();
    // The page should still be visible since it's a scroll-to-section navigation
    await expect(page.locator("header")).toBeVisible();
  });

  test("should have proper page structure", async ({ page }) => {
    await page.goto("/");

    // Check that the page has the expected structure
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Check that the main content is present
    await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
  });
});
