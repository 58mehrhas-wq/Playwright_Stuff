import{ expect, test } from "@playwright/test";


test("handling JavaScript Alert Box",async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);

        await alert.accept();
    })

    await page.locator("button:has-text('Click Me')").nth(0).click();
    
})

test("handling JavaScript Confirm Box alerts",async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);

        await alert.dismiss();
    })


    await page.locator("button:has-text('Click Me')").nth(1).click();

    await page.waitForTimeout(5000);
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!");    
})

test("handling JavaScript Alert Box2",async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);

        await alert.accept("Hoshol");
    })

    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'Hoshol'");
    
})

test.only("Handeling Bootstrap Modal", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    
    await page.click("//button[@data-target='#myModal']");
    await page.click("(//button[text()='Save Changes'])");
})