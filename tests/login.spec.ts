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
        await loginPo.wait(3000);
        expect(await loginPo.loginButtons.count()).toEqual(3);
    });

    it(`Verify text on the login buttons`, async () => {
        expect(await loginPo.loginButtons.get(1).getText()).toEqual(LOGIN.BUTTON_1);
        expect(await loginPo.loginButtons.get(2).getText()).toEqual(LOGIN.BUTTON_2);
    });

    it(`Verify css properties login buttons`, async () => {
        expect(await loginPo.loginButtons.get(1).getCssValue('font-family')).toEqual(UI.PRIMARY_FONT);
        expect(await loginPo.loginButtons.get(1).getCssValue('color')).toEqual(UI.WHITE_COLOR);
        expect(await loginPo.loginButtons.get(1).getCssValue('height')).toEqual(UI.BUTTON_HEIGHT);
    });

    it(`click on first login button`, async () => {
        await loginPo.loginButtons.get(1).click();
        expect(await loginPo.emailField.isDisplayed()).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        expect(await loginPo.continueBtn.isEnabled()).toEqual(false);
    });

    it(`type email ${testUser.email} on email field`, async () => {
        await loginPo.emailField.clear();
        await loginPo.emailField.sendKeys(testUser.email);
        expect(await loginPo.emailField.getAttribute('value')).toEqual(testUser.email);
    });

    it(`click on continue button`, async () => {
        await loginPo.continueBtn.click();
        await loginPo.wait(3000);
        expect(await loginPo.passwordField.isDisplayed()).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        expect(await loginPo.continueBtn.isEnabled()).toEqual(false);
    });

    it(`type password ${testUser.password} on password field`, async () => {
        await loginPo.passwordField.clear();
        await loginPo.passwordField.sendKeys(testUser.password);
        expect(await loginPo.passwordField.getAttribute('value')).toEqual(testUser.password);
    });

    it(`click on continue button`, async () => {
        await loginPo.continueBtn.click();
        await loginPo.wait(1000);
        expect(await loginPo.firstNameField.isDisplayed()).toEqual(true);
        expect(await loginPo.lastNameField.isDisplayed()).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        expect(await loginPo.continueBtn.isEnabled()).toEqual(false);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after test');
    });
});
