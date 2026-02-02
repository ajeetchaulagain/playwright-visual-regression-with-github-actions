import { test, expect } from "@playwright/test";

test("Home Page Visual Regression", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot("home-page.png", { fullPage: true });
});
