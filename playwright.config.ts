import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: "chrome",
            use: {
                ...devices["Desktop Chrome"]
            }
        },
        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"]
            }
        },
        {
            name: "safari",
            use: {
                ...devices["Desktop Safari"]
            }
        }
    ],


    testMatch:  
                // ["pomtest/addToCartUsingFixture.test.ts"],
                // ["fixture/fixtest.test.ts"],
                // ["pomtest/addToCart.test.ts"],
                // ["uploadDownload.test.ts"],
                // ["calendar.test.ts"],
                // ["windows.test.ts"],
                ["frames.test.ts"],
                // ["dropdown.test.ts"],
                // ["alert.test.ts"],
                // ["basicInteraction.test.ts"],
                // ["recoreded.saleDresses.test.ts"],
                // ["recorded.test.ts"],
                // ["tests/login.test.ts"],
                // ["tests/saleDresses.test.ts"],
                
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        viewport: { width:1920, height:1080},
        launchOptions: {
            slowMo: 1000
        }
    },
    retries: 0,

    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]

};
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default config;
