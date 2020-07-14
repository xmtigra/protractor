import { browser } from 'protractor';

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
}
