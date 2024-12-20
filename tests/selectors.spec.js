import { test, expect } from "@playwright/test";

test("Selectors Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
  await page.click("id=user-name");
  await page.locator("id=user-name").fill("Edison");

  //Using CSS Selectors
  // #login-button
  await page.locator("#login-button").click();

  //Using XPath
  await page.locator('//input[@id="password"]').click();
  await page.locator('//input[@id="password"]').fill("Alicenk");

  //Using Text
  await page.locator("text=Login").click();
});
