import {browser, by, element} from "protractor";
import {GOOGLE, GOOGLE_UI} from "../data/strings.data";

describe('Google', () => {

    const testSearchWorld = "techmagic";
    const testSearchSite = "www.techmagic.co";

    beforeAll(async () => {
        console.log('if you need, add some preconditions before the test');
    });

    it('Go to google.com page ', async () => {
        await browser.get(GOOGLE.URL, 2000);
        expect(await browser.getCurrentUrl()).toContain(GOOGLE.URL);
        expect(await browser.getTitle()).toEqual(GOOGLE.TITLE);
    });

    it('verify is element displayed', async () => {
        expect(await element(by.css('#hplogo')).isDisplayed()).toEqual(true);
    });

    it('verify element state', async () => {
        expect(await element.all(by.css('.gNO89b')).get(1).isEnabled()).toEqual(true);
    });

    it('verify input value', async () => {
        expect(await element(by.css('.gLFyf.gsfi')).getAttribute('value')).toEqual('');
    });

    it('verify image src', async () => {
        expect(await element(by.css('#hplogo')).getAttribute('src')).toContain(GOOGLE.LOGO_SRC);
    });

    it('verify element text', async () => {
        expect(await element(by.css('.Q8LRLc')).getText()).toEqual(GOOGLE.COUNTRY);
    });

    it('verify css properties', async () => {
        expect(await element(by.css('.Q8LRLc')).getCssValue('font-size')).toEqual(GOOGLE_UI.FONT_SIZE);
    });

    it('Fill some text in the input search', async () => {
        await element(by.css('.gLFyf.gsfi')).sendKeys(testSearchWorld);
        expect(await element(by.css('.gLFyf.gsfi')).getAttribute('value')).toEqual(testSearchWorld);
    });

    it('Click on the submit button', async () => {
        await element.all(by.css('.gNO89b')).get(1).click();
        await browser.sleep(2000);
        expect(await element(by.css('[data-hveid="CAIQAA"] .iUh30.Zu0yb.tjvcx')).getText()).toContain(testSearchSite);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after the test');
    });
});
