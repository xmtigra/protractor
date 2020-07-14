import { browser, ElementFinder } from 'protractor';

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
        await browser.sleep(ms)
    }

    constructor() {
        console.log('BasePo');
    }

    public async isElementDisplayed(element: ElementFinder, timeout: number = 0): Promise<boolean> {
        await this.wait(timeout);
        return element.isDisplayed();
    }

    public async isElementChecked(element: ElementFinder, timeout: number = 0): Promise<boolean> {
        await this.wait(timeout);
        return element.isSelected();
    }

    public async isElementEnabled(element: ElementFinder, timeout: number = 0): Promise<boolean> {
        await this.wait(timeout);
        return element.isEnabled();
    }

    public async getElementText(element: ElementFinder, timeout: number = 0): Promise<string> {
        await this.wait(timeout);
        return element.getText();
    }

    public async clearElementField(element: ElementFinder, timeout: number = 0): Promise<void> {
        await this.wait(timeout);
        await element.clear();
    }

    public async typeElementText(element: ElementFinder, text: string | number, timeout: number = 0): Promise<void> {
        await this.wait(timeout);
        await element.sendKeys(text);
    }

    public async getElementCssValue(element: ElementFinder, value: string, timeout: number = 0): Promise<string> {
        await this.wait(timeout);
        return element.getCssValue(value);
    }

    public async getElementValue(element: ElementFinder, timeout: number = 0): Promise<string> {
        await this.wait(timeout);
        return element.getAttribute('value');
    }

    public async getElementAttribute(element: ElementFinder, name: string, timeout: number = 0): Promise<string> {
        await this.wait(timeout);
        return element.getAttribute(name);
    }

    public async clickOnElement(element: ElementFinder, timeout: number = 0): Promise<void> {
        await this.wait(timeout);
        await element.click();
    }
}
