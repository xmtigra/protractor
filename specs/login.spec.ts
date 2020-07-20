import {loginPo} from '../pages/login.po';
import {LOGIN, UI} from '../data/strings.data';
import {User} from "../data/user.data";

// verify url
// verify browser title
// verify click action
// verify css properties
// verify input value (attribute)
// verify button state
// verify element text

const testUser = new User();

describe('Login', () => {

    beforeAll(async () => {
        await loginPo.navigateTo(LOGIN.URL);
    });

    it(`should be on the login page`, async () => {
        expect(await loginPo.getCurrentUrl()).toContain(LOGIN.URL_PART);
        expect(await loginPo.getTitle()).toEqual(LOGIN.TITLE);
    });

    it(`should see login widget on the page`, async () => {
        expect(await loginPo.isOpen()).toEqual(true);
    });

    it(`Verify text on the first login button`, async () => {
        expect(await loginPo.isElementDisplayed(loginPo.loginBtnFirst)).toEqual(true);
        expect(await loginPo.getElementText(loginPo.loginBtnFirst)).toEqual(LOGIN.BUTTON_1);
    });

    it(`Verify text on the second login button`, async () => {
        expect(await loginPo.isElementDisplayed(loginPo.loginBtnSecond)).toEqual(true);
        expect(await loginPo.getElementText(loginPo.loginBtnSecond)).toEqual(LOGIN.BUTTON_2);
    });

    it(`Verify css properties login buttons`, async () => {
        expect(await loginPo.getElementCssValue(loginPo.loginBtnFirst, 'font-family')).toEqual(UI.PRIMARY_FONT);
        expect(await loginPo.getElementCssValue(loginPo.loginBtnFirst, 'color')).toEqual(UI.WHITE_COLOR);
        expect(await loginPo.getElementCssValue(loginPo.loginBtnFirst, 'height')).toEqual(UI.BUTTON_HEIGHT);
    });

    it(`click on first login button`, async () => {
        await loginPo.clickOnElement(loginPo.loginBtnFirst);
        expect(await loginPo.isElementDisplayed(loginPo.emailField)).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        expect(await loginPo.isElementEnabled(loginPo.continueBtn)).toEqual(false);
    });

    it(`type email ${testUser.email} on email field`, async () => {
        await loginPo.fillEmailField(testUser.email);
        expect(await loginPo.getElementValue(loginPo.emailField)).toEqual(testUser.email);
    });

    it(`click on continue button`, async () => {
        await loginPo.goToPasswordScreen();
        expect(await loginPo.isElementDisplayed(loginPo.passwordField)).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        expect(await loginPo.isElementEnabled(loginPo.continueBtn)).toEqual(false);
    });

    it(`type password ${testUser.password} on password field`, async () => {
        await loginPo.fillPasswordField(testUser.password);
        expect(await loginPo.getElementValue(loginPo.passwordField)).toEqual(testUser.password);
    });

    it(`click on continue button`, async () => {
        await loginPo.goToLocationScreen();
        expect(await loginPo.isElementDisplayed(loginPo.firstNameField)).toEqual(true);
        expect(await loginPo.isElementDisplayed(loginPo.lastNameField)).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        expect(await loginPo.isElementEnabled(loginPo.continueBtn)).toEqual(false);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after test');
    });
});
