import {GOOGLE, GOOGLE_UI} from "../data/strings.data";
import {googlePo} from "../pages/google.po";
import {googleResultPo} from "../pages/googleResult.po";

describe('Google', () => {

    const testSearchWorld = "techmagic";
    const testSearchSite = "www.techmagic.co";

    beforeAll(async () => {
        console.log('if you need, add some preconditions before the test');
    });

    it('Go to google.com page ', async () => {
        await googlePo.navigateTo(GOOGLE.URL);
        expect(await googlePo.getCurrentUrl()).toContain(GOOGLE.URL);
        expect(await googlePo.getTitle()).toEqual(GOOGLE.TITLE);
    });

    it('verify is element displayed', async () => {
        expect(await googlePo.logoEl.isDisplayed()).toEqual(true);
    });

    it('verify element state', async () => {
        expect(await googlePo.submitButtons.get(1).isEnabled()).toEqual(true);
    });

    it('verify input value', async () => {
        expect(await googlePo.searchInput.getAttribute('value')).toEqual('');
    });

    it('verify image src', async () => {
        expect(await googlePo.logoEl.getAttribute('src')).toContain(GOOGLE.LOGO_SRC);
    });

    it('verify element text', async () => {
        expect(await googlePo.countryEl.getText()).toEqual(GOOGLE.COUNTRY);
    });

    it('verify css properties', async () => {
        expect(await googlePo.countryEl.getCssValue('font-size')).toEqual(GOOGLE_UI.FONT_SIZE);
    });

    it('Fill some text in the input search', async () => {
        await googlePo.searchInput.sendKeys(testSearchWorld);
        expect(await googlePo.searchInput.getAttribute('value')).toEqual(testSearchWorld);
    });

    it('Click on the submit button', async () => {
        await googlePo.submitButtons.get(1).click();
        await googlePo.wait(2000);
        expect(await googleResultPo.firstSiteURL.getText()).toContain(testSearchSite);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after the test');
    });
});
