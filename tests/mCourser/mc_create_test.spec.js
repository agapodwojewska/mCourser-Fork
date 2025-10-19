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
  await page.goto('https://www.mcourser.com/dashboard');
  //dodanie nowej grupy o nazwie z obecną datą
      const dateString = new Date().toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
   const GroupName = `Group ${dateString}`;

  await page.getByRole('link', { name: 'Groups' }).click();
  await page.getByRole('textbox', { name: 'Please enter a new group\'s' }).click();
  await page.getByRole('textbox', { name: 'Please enter a new group\'s' }).fill(GroupName);
  await page.getByRole('button', { name: 'Add a group' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('cell', { name: (GroupName) }).getByLabel('More actions').click();
  await page.getByRole('menuitem', { name: 'Edit Students' }).click();
  await page.locator('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.getByRole('button', { name: 'Assign selected students', exact: true }).click();
  await page.getByRole('link', { name: 'Groups', exact: true }).click();
  //
     //definicja nazwy testu na podstawie obecnej daty
  const AssessmentName = `Assessment No. ${dateString}`;
  //
  await page.getByRole('link', { name: 'Assessments' }).click();
  await page.getByRole('button', { name: 'Create online test' }).click();
  await page.getByLabel('create Details').locator('mat-form-field div').filter({ hasText: 'Title' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Title' }).fill(AssessmentName);
  await page.getByRole('tab', { name: 'Resources' }).locator('div').nth(1).click();
  await page.getByRole('button', { name: 'Test ' }).click();
  await page.getByText('New Adventure Test').first().click();
  await page.waitForLoadState('networkidle');
  //przeciąganie elementu
  await page.getByText('Unit 1 – test').hover();
  await page.mouse.down();
  await page.locator('#create-assignment-resources-target').hover();
  await page.mouse.up();
  //koniec przeciągania
  await page.getByText('Assignees', { exact: true }).click();
  await page.getByRole('row').filter({ hasText: GroupName }).getByRole('cell').nth(2).click();
  await page.getByRole('tab', { name: 'Options' }).locator('div').nth(1).click();
  await page.getByRole('textbox', { name: 'Start date' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByText('31').click();
  await page.getByText('Single access').click();
  await page.getByRole('textbox', { name: 'End date' }).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByText('1', { exact: true }).click();
  await page.locator('#due-date__help').click();
  await page.getByText('Assignees', { exact: true }).click();
  await page.getByRole('row').filter({ hasText: GroupName }).getByRole('cell').nth(2).click();
  await page.getByRole('tab', { name: 'Options' }).locator('div').nth(1).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Close the alert.' }).click();
  await page.goto('https://www.mcourser.com/assessment/tests');
  await page.waitForLoadState('networkidle');
  await page.getByRole('textbox', { name: 'Filter field' }).click();
});

