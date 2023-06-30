import { expect, test } from "@playwright/test";

test("Interact with frames",async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("Number of frames: " + allframes.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Monwwarr");
    await frame.locator("input[name='lname']").fill("Hoshol");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("mooshool@test.com")

    // expect(await frame?.locator("p.has-text-info").textContent()).toContain("You have entered");

    // const myFrame = page.frame("firstFr");
    // // if(myFrame != null) {
    // //     await myFrame.fill("", "")
    // // }
    // await myFrame?.fill("input[name='fname']", "Mahwash");
    // await myFrame?.fill("input[name='lname']", "Hutchingson");

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");

    await page.waitForTimeout(3000);
    
})