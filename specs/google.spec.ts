import {browser, by, element} from "protractor";

describe('Google', () => {

    beforeAll(async () => {
        console.log('if you need, add some preconditions before the test');
    });

    it('Go to google.com page ', async () => {
        await browser.get('https://google.com', 2000);
        expect(await browser.getCurrentUrl()).toContain("https://www.google.com/");
        expect(await browser.getTitle()).toEqual("Google");
        expect(await element(by.css('#hplogo')).isDisplayed()).toEqual(true);
        expect(await element.all(by.css('.gNO89b')).get(1).isEnabled()).toEqual(true);
        expect(await element(by.css('.gLFyf.gsfi')).getAttribute('value')).toEqual('');
        expect(await element(by.css('#hplogo')).getAttribute('src')).toContain('/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
        expect(await element(by.css('.Q8LRLc')).getText()).toEqual("Україна");
        expect(await element(by.css('.Q8LRLc')).getCssValue('font-size')).toEqual("15px");
    });

    it('Fill some text in the input search', async () => {
        await element(by.css('.gLFyf.gsfi')).sendKeys('techmagic');
        expect(await element(by.css('.gLFyf.gsfi')).getAttribute('value')).toEqual('techmagic');
    });

    it('Click on the submit button', async () => {
        await element.all(by.css('.gNO89b')).get(1).click();
        await browser.sleep(3000);
        expect(await element(by.css('[data-hveid="CAIQAA"] .iUh30.Zu0yb.tjvcx')).getText()).toContain('www.techmagic.co');
    });

    afterAll(async () => {
        console.log('if you need, clear application data after the test');
    });
});
