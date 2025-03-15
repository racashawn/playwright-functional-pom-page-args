# Functional with Page Argument

This project demonstrates the use of functional programming with page arguments in Playwright. Playwright is used here due to its powerful support for end-to-end testing and its simplicity in handling browser automation.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [How this works](#how-this-works)
- [Contributing](#contributing)

## Introduction
This project showcases how to use functional programming techniques to handle page arguments effectively in Playwright. Functional programming allows for cleaner, more maintainable code, and efficient data processing.

## Installation
To install the necessary dependencies, run:
```bash
npm install
```

## Usage
To run the tests, use the following command:
```bash
npx playwright test
```

### How this works:

In this project, locators are used to interact with elements on the page. The page object is passed from the test into the functions, which then use the page to create locators. This approach eliminates the need for object creation as seen in classic Page Object Model (POM) implementations that use classes. By passing the page directly, the code remains functional and avoids the overhead of class-based object management, resulting in simpler and more efficient test scripts.

### Example

Here is an example of how locators are used in this project:

```ts
// homePage.ts
import { Page } from "@playwright/test";

export async function navigateToHomepage(page: Page) {
    await page.goto("https://playwright.dev/");
}

// getStartedPage.ts
import { Page } from "@playwright/test";

const navbarApi = (page: Page) => page.getByRole("link", { name: "API", exact: true });

export async function getStarted(page: Page) {
    await page.getByRole("link", { name: "Get started" }).click();
}

export async function clickApiLink(page: Page) {
    await navbarApi(page).click();
}

// example.spec.ts
import { test } from "@playwright/test";
import * as homePage from "../page-objects/homePage";
import * as getStartedPage from "../page-objects/getStartedPage";

test("test1", async ({ page }) => {
    await homePage.navigateToHomepage(page);
    await getStartedPage.getStarted(page);
    await getStartedPage.clickApiLink(page);
});
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.


