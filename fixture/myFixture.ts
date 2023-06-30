import { test as myTest } from "@playwright/test";

// type mooshool = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({

    age: 45,
    email: "mooshool.man@mailinator.com"

})

export const test = myFixtureTest;