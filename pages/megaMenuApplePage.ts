import { Page } from "@playwright/test"
export default class MegaMenuApplePage {

    constructor(public page: Page) {

    }

    async megaMenueDropDown() {
        await this.page.hover("//span[normalize-space()='Mega Menu']", {
            strict: false

        });
        await this.page.locator("a[title = 'Apple']")
            .click()
    }

    async addFirstProductToTheCart() {
        await this.page.hover("div[class='carousel-item active'] img[title='iPod Touch']", {
            strict: false

        });
        await this.page.locator("(//i[@class='fas fa-shopping-cart'])[1]")
            .click();

    }
    async isToastVisible() {
        // await this.page.waitFor
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({state:"visible"})
        return toast;
    }
}