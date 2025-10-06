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
  await page.getByRole('link', { name: 'Groups' }).click();
  await page.getByRole('textbox', { name: 'Please enter a new group\'s' }).click();
  await page.getByRole('textbox', { name: 'Please enter a new group\'s' }).fill('Group 21');
  await page.getByRole('button', { name: 'Add a group' }).click();
  await page.getByRole('cell', { name: 'dashboard group Group 21' }).getByLabel('More actions').click();
  await page.getByRole('menuitem', { name: 'Edit Students' }).click();
  await page.locator('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.getByRole('button', { name: 'Assign selected students', exact: true }).click();
  await page.getByRole('link', { name: 'Groups', exact: true }).click();
  await page.getByRole('cell', { name: 'dashboard group Group 21' }).getByLabel('More actions').click();
  await page.getByRole('menuitem', { name: 'Remove' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Close the alert.' }).click();
  await page.goto('https://www.mcourser.com/students/classes');
  //  await page.goto('https://www.mcourser.com/students/classes');

});