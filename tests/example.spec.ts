import { test } from "@playwright/test";
import * as homePage from "../page-objects/homePage";
import * as getStartedPage from "../page-objects/getStartedPage";
import * as apiPage from "../page-objects/apiPage";

test("test1", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickApiLink(page);
  await apiPage.isOnApiPage(page);
  await apiPage.clickChromium(page);
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickApiLink(page);
  await apiPage.isOnApiPage(page);
  await apiPage.clickChromium(page);
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickApiLink(page);
  await apiPage.isOnApiPage(page);
  await apiPage.clickChromium(page);
});

test("test2", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickApiLink(page);
//   await getPage().pause()
  await apiPage.isOnApiPage(page);
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickApiLink(page);
//   await getPage().pause()
  await apiPage.isOnApiPage(page);
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickApiLink(page);
//   await getPage().pause()
  await apiPage.isOnApiPage(page);
  await apiPage.clickAllPropertiesLinks(page);
});
