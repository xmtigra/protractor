import {loginPo} from '../pages/login.po';
import {LOGIN, UI} from '../data/strings.data';
import {User} from "../data/user.data";

const testUser = new User();

describe('Login', () => {

    beforeAll(async () => {
        await loginPo.navigateTo(LOGIN.URL);
    });

    // verify url
    // verify browser title
    it(`should be on the login page`, async () => {
        expect(await loginPo.getCurrentUrl()).toContain(LOGIN.URL_PART);
        expect(await loginPo.getTitle()).toEqual(LOGIN.TITLE);
    });

    // verify is element displayed
    it(`should see login widget on the page`, async () => {
        expect(await loginPo.isOpen()).toEqual(true);
    });

    // verify button state
    it(`should continue button is disabled`, async () => {
        expect(await loginPo.isElementEnabled(loginPo.continueBtn)).toEqual(false);
    });

    // verify input value (attribute)
    it(`type email ${testUser.email} on email field`, async () => {
        await loginPo.fillEmailField(testUser.email);
        expect(await loginPo.getElementValue(loginPo.emailField)).toEqual(testUser.email);
    });

    // verify is element displayed
    it(`click on continue button`, async () => {
        await loginPo.goToPasswordScreen();
        expect(await loginPo.isElementDisplayed(loginPo.passwordField)).toEqual(true);
    });

    // verify button state
    it(`should continue button is disabled`, async () => {
        expect(await loginPo.isElementEnabled(loginPo.continueBtn)).toEqual(false);
    });

    // verify input value (attribute)
    it(`type password ${testUser.password} on password field`, async () => {
        await loginPo.fillPasswordField(testUser.password);
        expect(await loginPo.getElementValue(loginPo.passwordField)).toEqual(testUser.password);
    });

    // verify is element displayed
    it(`click on continue button`, async () => {
       await loginPo.goToLocationScreen();
       expect(await loginPo.isElementDisplayed(loginPo.firstNameField)).toEqual(true);
       expect(await loginPo.isElementDisplayed(loginPo.lastNameField)).toEqual(true);
    });

    // verify button state
    it(`should continue button is disabled`, async () => {
        expect(await loginPo.isElementEnabled(loginPo.continueBtn)).toEqual(false);
    });

    // verify element text
    it(`Verify text on the continue button`, async () => {
        expect(await loginPo.getElementText(loginPo.continueBtn)).toEqual(LOGIN.BUTTON);
    });

    // verify css properties
    it(`Verify css properties continue buttons`, async () => {
        expect(await loginPo.getElementCssValue(loginPo.continueBtn, 'font-family')).toEqual(UI.PRIMARY_FONT);
        expect(await loginPo.getElementCssValue(loginPo.continueBtn, 'color')).toEqual(UI.WHITE_COLOR);
        expect(await loginPo.getElementCssValue(loginPo.continueBtn, 'height')).toEqual(UI.BUTTON_HEIGHT);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after test');
    });
});
