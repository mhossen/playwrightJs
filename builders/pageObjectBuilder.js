export class PageObjectBuilder {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async buildElements() {
    return await this.page.$$("*");
  }
}
