import { browser, ElementArrayFinder, ElementFinder, protractor } from 'protractor';

export class BasePo {

    private defaultTimeout: number = 4000;
    private defaultUIRetries: number = 4;
    private defaultELRetries: number = 10;

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

    public async waitForElementText(element: ElementFinder, text: string, { timeout = this.defaultTimeout, maxRetries = this.defaultUIRetries } = {}) {
        let currentRetry: number = 0;
        let error: Error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.textToBePresentInElement(element, text), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${element.locator()} is not containing specified text: ${text} after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForElementVisible(element: ElementFinder, { timeout = this.defaultTimeout, maxRetries = this.defaultUIRetries } = {}) {
        let currentRetry: number = 0;
        let error: Error;
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
        throw new Error(`Element ${element.locator()} is not visible after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForElementInvisible(element: ElementFinder, { timeout = this.defaultTimeout, maxRetries = this.defaultUIRetries } = {}) {
        let currentRetry: number = 0;
        let error: Error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.invisibilityOf(element), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${element.locator()} is still visible after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForElementClickable(element: ElementFinder, { timeout = this.defaultTimeout, maxRetries = this.defaultUIRetries } = {}) {
        let currentRetry: number = 0;
        let error: Error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${element.locator()} is not clickable after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForListCountChanged(list: ElementArrayFinder, expectedCount: number, { timeout = this.defaultTimeout, maxRetries = this.defaultUIRetries } = {}) {
        let currentRetry: number = 0;
        let error: Error;
        do {
            try {
                await browser.wait(() => {
                    return list.count().then((actualValue) => {
                        return actualValue === expectedCount;
                    });
                }, timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`List ${list.locator()} count does not changed after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    public async waitForElementToBeSelected(tgtElement: ElementFinder, { timeout = this.defaultTimeout, maxRetries = this.defaultUIRetries } = {}) {
        let currentRetry: number = 0;
        let error: Error;
        do {
            try {
                await browser.wait(protractor.ExpectedConditions.elementToBeSelected(tgtElement), timeout);
                return;
            } catch (err) {
                currentRetry++;
                error = err;
            }
        } while (currentRetry < maxRetries);
        throw new Error(`Element ${tgtElement.locator()} wasn't selected after maximum retries (${maxRetries}), Error message: ${error.name.toString()}`);
    }

    constructor() {
        console.log('BasePo');
    }

    public async isElementPresent(element: ElementFinder, maxRetries = this.defaultELRetries): Promise<boolean> {
        let res;
        for (let i = 0; i < maxRetries; i++) {
            res = await element.isPresent();
            if (res === true) {
                return res;
            }
        }
        return false;
    }

    public async isElementDisplayed(element: ElementFinder, maxRetries = this.defaultELRetries): Promise<boolean> {
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

    public async isElementEnabled(element: ElementFinder): Promise<boolean> {
        await this.isElementPresent(element);
        return element.isEnabled();
    }

    public async isElementSelected(element: ElementFinder): Promise<boolean> {
        await this.isElementPresent(element);
        return element.isSelected();
    }

    public async getElementText(element: ElementFinder): Promise<string> {
        await this.isElementPresent(element);
        return element.getText();
    }

    public async clearElementField(element: ElementFinder): Promise<void> {
        await this.isElementPresent(element);
        await element.clear();
    }

    public async typeElementText(element: ElementFinder, text: string | number): Promise<void> {
        await this.isElementPresent(element);
        await this.clearElementField(element);
        await element.sendKeys(text);
    }

    public async getElementCssValue(element: ElementFinder, value: string): Promise<string> {
        await this.isElementPresent(element);
        return element.getCssValue(value);
    }

    public async getElementValue(element: ElementFinder): Promise<string> {
        await this.isElementPresent(element);
        return element.getAttribute('value');
    }

    public async getElementAttribute(element: ElementFinder, name: string): Promise<string> {
        await this.isElementPresent(element);
        return element.getAttribute(name);
    }

    public async clickOnElement(element: ElementFinder): Promise<void> {
        await this.waitForElementClickable(element);
        await element.click();
    }

}
