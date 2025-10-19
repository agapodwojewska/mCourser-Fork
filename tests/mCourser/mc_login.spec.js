import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mcourser.com/');
  await page.getByRole('button', { name: 'Close window with cookies' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('autotestst01');
  await page.getByRole('textbox', { name: 'username' }).press('Tab');
  await page.getByRole('textbox', { name: 'password' }).fill('t');
  await page.getByRole('button', { name: 'Login' }).click();
});
