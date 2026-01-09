import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';

let page: Page;

Given('I navigate to {string}', async (url: string) => {
  await page.goto(url);
});

When('I open the basket', async () => {
  const basketButton = await page.locator('a[href*="cart"]'); // Assuming the basket link contains "cart"
  await basketButton.click();
});

Then('I should see that the basket is empty', async () => {
  const emptyBasketMessage = await page.locator('text=Your basket is empty'); // Replace with the actual text that indicates an empty basket
  expect(await emptyBasketMessage.isVisible()).toBeTruthy();
});