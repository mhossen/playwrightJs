const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");

test("getting started should contain table of contents", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
});
