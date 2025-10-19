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
  await page.getByRole('link', { name: 'Resources' }).click();
  await page.getByText('English now! – B1', { exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.resource-card__icon > .card-link').first().click();
  const page1 = await page1Promise;
  await page1.goto('https://www.mcourser.com/lesson/view_only/2814104232822901/next/~courses~5788808900509696~next~~courses~list~type~all?page=1');
  await page.waitForLoadState('networkidle');
  await page1.getByRole('button', { name: 'Exit' }).click();
});