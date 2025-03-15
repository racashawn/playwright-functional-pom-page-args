import { expect, Page } from "@playwright/test";
//locators
const navbarApi = (page: Page) => page.getByRole("link", { name: "API", exact: true });
const linksSection = (page: Page) => ({ 
  introduction: page.getByRole("link", { name: "Introduction", exact: true }),
  installingPlaywright: page.getByRole("link", { name: "Installing Playwright", exact: true }),
  whatsInstalled: page.getByRole("link", { name: "What's Installed" }).nth(2),
  runningExampleTest: page.getByRole("link", { name: "Running the Example Test", exact: true }),
  testsRunningImage: page.getByRole("img", { name: "tests running in command line" })
});


//functions
export async function getStarted(page: Page) {
  await page.getByRole("link", { name: "Get started" }).click();
}

export async function clickAllLinks(page: Page) {
  await linksSection(page).introduction.click();
  await linksSection(page).installingPlaywright.click();
  await linksSection(page).whatsInstalled.click();
  await linksSection(page).runningExampleTest.click();
  await expect(linksSection(page).testsRunningImage).toBeVisible();
}

export async function clickApiLink(page: Page) {
  await navbarApi(page).click();
}
