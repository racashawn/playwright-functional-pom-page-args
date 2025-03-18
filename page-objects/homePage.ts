import { Page } from "@playwright/test";




export async function navigateToHomepage(page:Page) {
    await page.goto("https://playwright.dev/");
}

