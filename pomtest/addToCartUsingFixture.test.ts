import { expect } from "@playwright/test";
import { test } from "../base/pomFixture";
import * as data from "../test-data/addToCart-test-data.json"


// const email = "hokol.tan3@mailinator.com";

// const password = "Team123!"

// test.use({
//     browserName: "webkit"
// });

test.use({ viewport: {width: 1920, height: 1080}})
test.describe("Page object test demo", async () => {


    test("Register test_01", async ({ page, baseURL, registerPage }) => {

        // const register = new RegisterPage(page);

        await page.viewportSize();

        await page.goto(`${baseURL}route=account/register`);

        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLasttName(data.lastname);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.phone_number);
        await page.waitForTimeout(5000);
        expect(registerPage.isSubscribeChecked()).toBeTruthy();
        await registerPage.clickTermandCondition();
        await registerPage.clickContinueToRegister();



    })

    test("Login test_02", async ({ page, baseURL, loginPage }) => {

        // const login = new LoginPage(page);

        await page.goto(`${baseURL}route=account/login`)
        await loginPage.enterEmail(data.email);
        await loginPage.enterLoginPassword(data.password);
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

    test("Add to cart test_03", async ({ page, baseURL, loginPage, megaMenuPage, specialPage }) => {

        // const login = new LoginPage(page);
        // const homePage = new HomePage(page);
        // const special = new SpecialHotPage(page);
        // const megaMenu = new MegaMenuApplePage(page);

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        // await homePage.clickOnSpecialHotMenu();
        // await special.addFirstProductToTheCart();
        await megaMenuPage.megaMenueDropDown();
        await megaMenuPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();

    })
})