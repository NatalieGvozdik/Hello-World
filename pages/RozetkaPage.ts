import { Page } from '@playwright/test';

export class RozetkaPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async addProductToBasket(): Promise<void> {
    await this.page.click('selector-for-product'); // Replace with actual selector
    await this.page.click('selector-for-add-to-basket'); // Replace with actual selector
  }

  async openBasket(): Promise<void> {
    await this.page.click('selector-for-basket'); // Replace with actual selector
  }

  async isBasketEmpty(): Promise<boolean> {
    const basketItems = await this.page.$$('selector-for-basket-items'); // Replace with actual selector
    return basketItems.length === 0;
  }
}