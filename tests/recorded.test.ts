import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    


    //Load the page
    await page.goto('https://ecommerce-playground.lambdatest.io/');

    // Hover on My Account 
    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");

    // Click on the login select from the DDL
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    // Click into the Email address field
    await page.getByPlaceholder('E-Mail Address').click();

    // Enter the email address
    await page.getByPlaceholder('E-Mail Address').fill('mooshool.moohoos@mailinator.com');

    // Use the tab to jump into the Password field
    await page.getByPlaceholder('E-Mail Address').press('Tab');

    // Enter the password
    await page.getByPlaceholder('Password').fill('Test123!');

    // Click on the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Click on the Edit account info
    await page.getByRole('link', { name: ' Edit your account information' }).click();

    // Click on the phone field
    await page.getByPlaceholder('Telephone').click();

    // Modify the phone number
    await page.getByPlaceholder('Telephone').fill('7132353323');

    // Click on the Continue button
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
    // Click on the logout button
    await page.getByRole('link', { name: 'Logout', exact: true }).click();

    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');

});