import { test } from "@playwright/test";


test("Handeling Dropdown Single Option", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Friday"
        index: 4

    })

    await page.waitForTimeout(5000);

})

test("Handeling Dropdown Multiple Option", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.selectOption("#multi-select", [{
        label: "New York"
    }, {
        index: 0
    }, {
        value: "Washington"
    }])

    await page.waitForTimeout(5000);

})

test.only("Bootstrap Dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");

    async function selectCountry(countryName) {


        await page.click("#country+span");

        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();

    }
})