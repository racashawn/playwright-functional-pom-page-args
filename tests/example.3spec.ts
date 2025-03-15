import { test } from "@playwright/test";
import * as homePage from "../page-objects/homePage";
import * as getStartedPage from "../page-objects/getStartedPage";

test("test1", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickAllLinks(page);
 
});

test("test2", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickAllLinks(page);
});
test("test3", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickAllLinks(page);
 
});

test("test4", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickAllLinks(page);
});

test("test5", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickAllLinks(page);
});

test("test6", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickAllLinks(page);
});
test("test7", async ({page}) => {
  await homePage.navigateToHomepage(page);
  await getStartedPage.getStarted(page);
  await getStartedPage.clickAllLinks(page);
}
);

