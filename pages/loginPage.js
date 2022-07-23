exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.page.locator("");
  }

  async goTo() {
    await this.page.goto("/");
    await this.page.waitForTimeout(5000);
  }
};
