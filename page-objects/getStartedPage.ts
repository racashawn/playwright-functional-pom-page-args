import { expect, Page } from "@playwright/test";

const navbarApi = (page: Page) => page.locator('a[href="/docs/api/class-playwright"]');

export async function getStarted(page: Page) {
  await page.getByRole("link", { name: "Get started" }).click();
}

export async function clickAllLinks(page: Page) {
  await page.getByRole("link", { name: "Introduction", exact: true }).click();
  await page.getByRole("link", { name: "Installing Playwright", exact: true }).click();
  await page.getByRole("link", { name: "What's Installed" }).nth(2).click();
  await page.getByRole("link", { name: "Running the Example Test", exact: true }).click();
  await expect(page.getByRole("img", { name: "tests running in command line" })).toBeVisible();
}

export async function clickApiLink(page: Page) {
  await navbarApi(page).waitFor({ state: "attached" });
  await navbarApi(page).waitFor({ state: "visible", timeout: 10000 });
  await navbarApi(page).click();
}
