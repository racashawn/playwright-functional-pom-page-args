import { expect, Page } from "@playwright/test";


const navbarHeading = (page:Page) => page.getByRole("heading", { name: "Playwright Library" });
const properties = (page:Page) => ({
  chromium: () => page.getByRole("link", { name: "chromium", exact: true }),
  device: () => page.getByRole("link", { name: "devices", exact: true }),
  errors: () => page.getByRole("link", { name: "errors", exact: true }),
  firefox: () => page.getByRole("link", { name: "firefox", exact: true }),
  request: () => page.getByRole("link", { name: "request", exact: true }),
  selectors: () => page.getByRole("link", { name: "selectors", exact: true }),
  webkit: () => page.getByRole("link", { name: "webkit", exact: true }),
});

export async function isOnApiPage(page:Page) {
  await navbarHeading(page).waitFor({ state: "attached"});
  await expect(navbarHeading(page)).toBeVisible();
}

export async function clickChromium(page:Page) {
  await properties(page).chromium().click();
}
export async function clickAllPropertiesLinks(page:Page) {
  await properties(page).chromium().click();
  await properties(page).device().click();
  await properties(page).errors().click();
  await properties(page).firefox().click();
  await properties(page).request().click();
  await properties(page).selectors().click();
  await properties(page).webkit().click();
}
