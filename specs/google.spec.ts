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
        expect(await googlePo.isElementDisplayed(googlePo.logoEl)).toEqual(true);
    });

    it('verify element state', async () => {
        expect(await googlePo.isElementEnabled(googlePo.submitButtons.get(1))).toEqual(true);
    });

    it('verify input value', async () => {
        expect(await googlePo.getElementValue(googlePo.searchInput)).toEqual('');
    });

    it('verify image src', async () => {
        expect(await googlePo.getElementAttribute(googlePo.logoEl, 'src')).toContain(GOOGLE.LOGO_SRC);
    });

    it('verify element text', async () => {
        expect(await googlePo.getElementText(googlePo.countryEl)).toEqual(GOOGLE.COUNTRY);
    });

    it('verify css properties', async () => {
        expect(await googlePo.getElementCssValue(googlePo.countryEl, 'font-size')).toEqual(GOOGLE_UI.FONT_SIZE);
    });

    it('Fill some text in the input search', async () => {
        await googlePo.fillSearchInput(testSearchWorld);
        expect(await googlePo.getElementValue(googlePo.searchInput)).toEqual(testSearchWorld);
    });

    it('Click on the submit button', async () => {
        await googlePo.sendForm();
        expect(await googleResultPo.getElementText(googleResultPo.firstSiteURL)).toContain(testSearchSite);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after the test');
    });
});
