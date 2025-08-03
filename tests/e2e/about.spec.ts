import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test("should display the about page content", async ({ page }) => {
    await page.goto("/about");

    // Check that the header is visible
    await expect(page.locator("header")).toBeVisible();

    // Check that the page has the expected structure
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
});
