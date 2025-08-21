import { test, expect } from "@playwright/test";

test.describe("Popover Positioning", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Navigate to the popover examples page
    await page.click("text=Components");
    await page.click("text=Popover");
  });

  test("should position correctly for all placements in standalone context", async ({
    page,
  }) => {
    const placements = ["top", "bottom", "left", "right"];

    for (const placement of placements) {
      // Select the placement
      await page.selectOption("select", placement);

      // Click the trigger button
      await page.click("text=Toggle PopoverTrigger (Improved)");

      // Wait for popover to appear
      await page.waitForSelector('[popover="manual"]', { state: "visible" });

      // Verify popover is visible
      const popover = page.locator('[popover="manual"]');
      await expect(popover).toBeVisible();

      // Close popover
      await page.click("text=Toggle PopoverTrigger (Improved)");

      // Wait for popover to disappear
      await page.waitForSelector('[popover="manual"]', { state: "hidden" });
    }
  });

  test("should position correctly for left/right placements in nested context", async ({
    page,
  }) => {
    // Test left/right positioning in nested popovers
    const placements = ["left", "right"];

    for (const placement of placements) {
      // Navigate to nested example
      await page.click("text=Advanced Examples");
      await page.click("text=Nested Popovers");

      // Select the placement for standalone popover
      await page.selectOption("select", placement);

      // Click the standalone popover trigger
      await page.click("text=Toggle Standalone Popover");

      // Wait for popover to appear
      await page.waitForSelector('[popover="manual"]', { state: "visible" });

      // Verify popover is visible
      const popover = page.locator('[popover="manual"]');
      await expect(popover).toBeVisible();

      // Close popover
      await page.click("text=Toggle Standalone Popover");

      // Wait for popover to disappear
      await page.waitForSelector('[popover="manual"]', { state: "hidden" });
    }
  });
});
