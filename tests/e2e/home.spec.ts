import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should have proper page structure", async ({ page }) => {
    await page.goto("/");

    // Check that the page has the expected structure
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Check that the main content is present
    await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
  });

  test("should set document title to 'trulsbv.dev - home'", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/trulsbv\.dev - home/);
  });
});
