import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registrationPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";
import MegaMenuApplePage from "../pages/megaMenuApplePage";



const email = "hokol.tan5@mailinator.com";

const password = "Team123!"

// test.use({ viewport: {width: 1500, height: 1001}})
// test.use({
//     browserName: "firefox"
// });

test.describe("Page object test demo", async () => {



    test("Register test_01", async ({ page, baseURL }) => {

        const register = new RegisterPage(page);

        await page.viewportSize();

        await page.goto(`${baseURL}route=account/register`);

        await register.enterFirstName("Hokol");
        await register.enterLasttName("Tan");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        await register.enterEmail(email);
        await register.enterTelephone("8182345534");
        await page.waitForTimeout(5000);
        expect(register.isSubscribeChecked()).toBeTruthy();
        await register.clickTermandCondition();
        await register.clickContinueToRegister();



    })

    test("Login test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

    test("Add to cart test_03", async ({ page, baseURL }) => {

        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        const megaMenu = new MegaMenuApplePage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        // await homePage.clickOnSpecialHotMenu();
        // await special.addFirstProductToTheCart();
        await megaMenu.megaMenueDropDown();
        await megaMenu.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();

    })
})