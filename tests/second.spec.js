const {test, expect} = require ('@playwright/test');

test('Second_Test_To_Check_Functionality', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log ('hello');
});