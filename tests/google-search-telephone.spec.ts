import { test, expect } from '@playwright/test';

test('Search for telephone on Google and verify links contain "telephone"', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Accept cookies if the prompt appears
  const acceptCookiesButton = page.locator('text=I agree');
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  // Search for "telephone"
  await page.fill('input[name="q"]', 'telephone');
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results to load
  await page.waitForSelector('#search');

  // Get all search result links
  const links = await page.locator('a').allTextContents();

  // Assert that at least one link contains the word "telephone"
  const hasTelephone = links.some(link => link.toLowerCase().includes('telephone'));
  expect(hasTelephone).toBeTruthy();
});