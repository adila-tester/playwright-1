# Playwright Automation Project

UI test automation for SauceDemo (https://www.saucedemo.com) using Playwright with the Page Object Model (POM) and Allure reporting.

## Tech Stack
- Playwright (TypeScript)
- Page Object Model
- Allure Reports

## Test Coverage
- Login with valid credentials
- Add product to cart
- Open cart page
- Screenshots captured at each step

## Setup
npm install
npx playwright install

## Run Tests
npm test

## View Allure Report
npm run open:reports

## Project Structure
- tests/ – spec files, pages (POM), test data
- fixtures/ – custom fixtures
