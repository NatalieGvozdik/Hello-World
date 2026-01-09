import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RozetkaPage } from '../pages/RozetkaPage';

const rozetkaPage = new RozetkaPage();

Given('I navigate to {string}', async (url: string) => {
  await rozetkaPage.navigateTo(url);
});

When('I add a product to the basket', async () => {
  await rozetkaPage.addProductToBasket();
});

When('I open the basket', async () => {
  await rozetkaPage.openBasket();
});

Then('I verify the basket is not empty', async () => {
  const isBasketEmpty = await rozetkaPage.isBasketEmpty();
  expect(isBasketEmpty).toBe(false);
});