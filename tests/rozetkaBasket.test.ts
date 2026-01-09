import { test, expect } from '@playwright/test';

test('Verify that the basket is empty on Rozetka', async ({ page }) => {
  // Navigate to Rozetka website
  await page.goto('https://rozetka.com.ua/');

  // Click on the basket icon
  await page.click('a[href*="cart"]');

  // Assert that the basket is empty
  const emptyBasketMessage = await page.locator('text=Корзина пуста').isVisible();
  expect(emptyBasketMessage).toBeTruthy();
});