import { chromium, test } from "@playwright/test"

test("Fashion Nova Sale Dresses test", async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.fashionnova.com/');
    await page.getByRole('link', { name: 'close dialog' }).click();
    await page.getByRole('link', { name: 'Sale Dresses' }).click();
    await page.goto('https://www.fashionnova.com/collections/sale-dresses');
    await page.getByLabel('Search').click();
    await page.getByLabel('Search').fill('One Of The Boys Dress - Sage');
    await page.getByLabel('Search').press('Enter');
    await page.goto('https://www.fashionnova.com/pages/search-results/One%20Of%20The%20Boys%20Dress%20-%20Sage');
    await page.getByRole('link', { name: 'One Of The Boys Dress - Sage' }).click();
    await page.getByText('XSOut of stock').click();
    await page.getByRole('heading', { name: 'Notify me when available in XS' }).click();


//     await page.goto("https://www.fashionnova.com/")
//     await page.hover('div[class="header-wrapper"] li:nth-child(2) a:nth-child(1) div:nth-child(2)')
//     // await page.click("text=Login")
//     await page.click('a[title="Sale Dresses"]')
})


