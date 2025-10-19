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
    //definicja nazwy assignmentu na podstawie obecnej daty          
    const dateString = new Date().toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const AssignmentName = `Assignment No. ${dateString}`;

  await page.getByRole('link', { name: 'Assignments' }).click();
  await page.getByRole('button', { name: 'Create Assignment' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill(AssignmentName);
  await page.getByLabel('Main content').getByText('Resources').click();
  await page.getByText('Student\'s tools Select source').click();
  await page.getByRole('option', { name: 'Courses' }).locator('span').click();
  await page.getByRole('combobox', { name: 'Select course' }).click();
  await page.getByText('English now! – B1').click();
  await page.getByText('Chapter 1').click();
  await page.getByText('All kinds of people').click();
  await page.getByRole('button', { name: 'ADD' }).first().click();
  await page.getByRole('tab', { name: 'Assignees' }).click();
  await page.locator('.mat-checkbox-inner-container').click();
  await page.getByRole('tab', { name: 'Options' }).click();
  await page.getByRole('tab', { name: 'Summary' }).locator('div').nth(4).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'CREATE' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Open assignments filters' }).click();
});