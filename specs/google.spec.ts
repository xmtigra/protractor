import {browser, by, element} from "protractor";

describe('Google', () => {

    beforeAll(async () => {
        console.log('if you need, add some preconditions before the test');
    });

    it('Go to google.com page ', async () => {
        await browser.get('https://google.com', 2000);
    });

    it('Fill some text in the input search', async () => {
        await element(by.css('.gLFyf.gsfi')).sendKeys('techmagic');
    });

    it('Click on the submit button', async () => {
        await element.all(by.css('.gNO89b')).get(1).click();
        await browser.sleep(3000);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after the test');
    });
});
