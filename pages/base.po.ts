import { browser, ElementFinder, protractor } from 'protractor';

export class BasePo {

    public async navigateTo(url: string, timeout: number = 3000): Promise<void> {
        return browser.get(url, timeout);
    }

    public async getCurrentUrl(): Promise<string> {
        return browser.getCurrentUrl();
    }

    public async getTitle(): Promise<string> {
        return browser.getTitle();
    }

    public async wait(ms: number): Promise<void> {
        await browser.sleep(ms);
    }

    public async waitForElementText(element: ElementFinder, text: string, { timeout = 4000, maxRetries = 4 } = {}) {
        let currentRetry = 0;
        let error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.textToBePresentInElement(element, text), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${element.locator()} is not containing specified text: ${text}
        after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForElementVisible(element: ElementFinder, { timeout = 4000, maxRetries = 4 } = {}) {
        let currentRetry = 0;
        let error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.and(
                    protractor.ExpectedConditions.visibilityOf(element),
                    protractor.ExpectedConditions.elementToBeClickable(element)), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${element.locator()} is not visible
        after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForElementInvisible(element: ElementFinder, { timeout = 4000, maxRetries = 4 } = {}) {
        let currentRetry = 0;
        let error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.invisibilityOf(element), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${element.locator()} is still visible
        after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForElementClickable(element: ElementFinder, { timeout = 4000, maxRetries = 4 } = {}) {
        let currentRetry = 0;
        let error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${element.locator()} is not clickable
        after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    constructor() {
        console.log('BasePo');
    }

    public async isElementPresent(element: ElementFinder, maxRetries = 10): Promise<boolean> {
        let res;
        for (let i = 0; i < maxRetries; i++) {
            res = await element.isPresent();
            if (res === true) {
                return res;
            }
        }
        return false;
    }

    public async isElementDisplayed(element: ElementFinder, maxRetries = 10): Promise<boolean> {
        await this.isElementPresent(element);
        let res;
        for (let i = 0; i < maxRetries; i++) {
            res = await element.isDisplayed();
            if (res === true) {
                return res;
            }
        }
        return false;
    }

    public async isElementEnabled(element: ElementFinder, timeout?: number): Promise<boolean> {
        await this.isElementPresent(element, timeout);
        return element.isEnabled();
    }

    public async isElementChecked(element: ElementFinder, timeout?: number): Promise<boolean> {
        await this.isElementPresent(element, timeout);
        return element.isSelected();
    }

    public async getElementText(element: ElementFinder, timeout?: number): Promise<string> {
        await this.isElementPresent(element, timeout);
        return element.getText();
    }

    public async clearElementField(element: ElementFinder, timeout?: number): Promise<void> {
        await this.isElementPresent(element, timeout);
        await element.clear();
    }

    public async typeElementText(element: ElementFinder, text: string | number, timeout?: number): Promise<void> {
        await this.isElementPresent(element, timeout);
        await this.clearElementField(element);
        await element.sendKeys(text);
    }

    public async getElementCssValue(element: ElementFinder, value: string, timeout?: number): Promise<string> {
        await this.isElementPresent(element, timeout);
        return element.getCssValue(value);
    }

    public async getElementValue(element: ElementFinder, timeout?: number): Promise<string> {
        await this.isElementPresent(element, timeout);
        return element.getAttribute('value');
    }

    public async getElementAttribute(element: ElementFinder, name: string, timeout?: number): Promise<string> {
        await this.isElementPresent(element, timeout);
        return element.getAttribute(name);
    }

    public async clickOnElement(element: ElementFinder): Promise<void> {
        await this.waitForElementClickable(element);
        await element.click();
    }

}
