import{ expect, test } from "@playwright/test";

test("Interaction with inputs",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    
    console.log('Before entering data: ' + await messageInput.inputValue());
    
    await page.waitForTimeout(1000);    
    
    await messageInput.type("What's happening dude");
    console.log('After entering data: ' + await messageInput.inputValue());
    

})

test("Sum",async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1Input = page.locator("#sum1");
    const sum2Input = page.locator("#sum2");

    const getValuesBtn = page.locator("form#gettotal>button")

    let num1 = 343;
    let num2 = 734;
    await sum1Input.type("" + num1);
    await sum2Input.type("" + num2);

    await getValuesBtn.click()

    await page.waitForTimeout(5000);

    const result = page.locator("#addmessage");
    console.log(await result.textContent());

    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult)
    
})

test("Checkbox",async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

    const singleCheckbox = page.locator("id=isAgeSelected")


    await page.waitForTimeout(5000);

    
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})