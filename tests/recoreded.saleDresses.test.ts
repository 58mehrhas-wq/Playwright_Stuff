import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.fashionnova.com/');
  await page.getByRole('link', { name: 'close dialog' }).click();
//   await page.hover('div[class="header-wrapper"] li:nth-child(2) a:nth-child(1) div:nth-child(2)')
//   await page.getByRole('link', { name: 'Sale Dresses' }).click();
  await page.goto('https://www.fashionnova.com/collections/sale-dresses');
  await expect(page).toHaveURL('https://www.fashionnova.com/collections/sale-dresses');
  await page.getByRole('link', { name: 'Load more' }).click();
  await page.getByRole('link', { name: 'One Of The Boys Dress - Sage' }).click();
  await page.getByText('XSOut of stock').click();
  await page.getByRole('heading', { name: 'Notify me when available in XS' }).click();
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.locator('.header-logo__link').first().click();
  await expect(page).toHaveURL('https://www.fashionnova.com/');
//   await page.getByRole('link', { name: 'Sale Dresses' }).click();
//   await page.getByLabel('Search').click();
//   await page.getByLabel('Search').fill('Once Of The Boys Dress - Sage');
//   await page.getByRole('link', { name: 'One Of The Boys Dress - Sage One Of The Boys Dress - Sage' }).click();
});