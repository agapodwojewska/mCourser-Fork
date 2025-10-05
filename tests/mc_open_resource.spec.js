import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mcourser.com/');
  await page.getByRole('button', { name: 'Close window with cookies' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('presentationteacher001');
  await page.getByRole('textbox', { name: 'username' }).press('Tab');
  await page.getByRole('textbox', { name: 'password' }).fill('pres001');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Resources' }).click();
  await page.locator('a').filter({ hasText: 'English now! – A1' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.list-course-card').first().click();
  const page1 = await page1Promise;
  await page1.goto('https://www.mcourser.com/lesson/view_only/8366145426079741/next/~courses~5683334228213760~next~~courses~list~type~all?page=1');
  await page1.locator('iframe[title="Cover Page"]').contentFrame().locator('#NextPage1').click();
  await page1.locator('iframe[title="Cover Page"]').contentFrame().getByRole('link', { name: '3' }).click();
  await page1.getByRole('button', { name: 'Exit' }).click();
});