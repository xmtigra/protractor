import { User } from '../data/user.data';
import { loginPo } from '../pages/login.po';
import { LOGIN, UI } from '../data/strings.data';

// verify url
// verify browser title
// verify click action
// verify css properties
// verify input value (attribute)
// verify button state
// verify element text

describe('Login', () => {

    const testUser = new User();

    beforeAll(async () => {
        await loginPo.navigateTo(LOGIN.URL);
    });

    it(`should be on the login page`, async () => {
        expect(await loginPo.getCurrentUrl()).toContain(LOGIN.URL_PART);
        expect(await loginPo.getTitle()).toEqual(LOGIN.TITLE);
    });

    it(`should see two login buttons`, async () => {
        expect(await loginPo.isOpen()).toEqual(true);
        expect(await loginPo.loginButtons.count()).toEqual(3);
    });

    it(`Verify text on the login buttons`, async () => {
        expect(await loginPo.getElementText(loginPo.loginButtons.get(1))).toEqual(LOGIN.BUTTON_1);
        expect(await loginPo.getElementText(loginPo.loginButtons.get(2))).toEqual(LOGIN.BUTTON_2);
    });

    it(`Verify css properties login buttons`, async () => {
        expect(await loginPo.getElementCssValue(loginPo.loginButtons.get(1), 'font-family')).toEqual(UI.PRIMARY_FONT);
        expect(await loginPo.getElementCssValue(loginPo.loginButtons.get(1), 'color')).toEqual(UI.WHITE_COLOR);
        expect(await loginPo.getElementCssValue(loginPo.loginButtons.get(1), 'height')).toEqual(UI.BUTTON_HEIGHT);
    });

    it(`click on first login button`, async () => {
        await loginPo.clickOnElement(loginPo.loginButtons.get(1));
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
